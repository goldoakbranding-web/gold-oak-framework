import "server-only";

import { Buffer } from "node:buffer";
import { business } from "@/config/business";
import type {
  EstimateLead,
  NotificationChannelResult,
  NotificationDeliveryReport,
  NotificationEmail,
  NotificationSms,
} from "./types";

type EmailProvider = "resend" | "sendgrid";
type SmsProvider = "twilio";
type DeliveryFailureReason = "not-configured" | "delivery-failed";

const requestTimeoutMs = 10_000;

/** Contains only operational channel state; lead content and credentials are never attached. */
export class LeadDeliveryError extends Error {
  readonly reason: DeliveryFailureReason;
  readonly email: NotificationChannelResult;
  readonly sms: NotificationChannelResult;

  constructor(reason: DeliveryFailureReason, email: NotificationChannelResult, sms: NotificationChannelResult) {
    super(reason === "not-configured" ? "Lead delivery is not configured." : "Lead delivery failed.");
    this.name = "LeadDeliveryError";
    this.reason = reason;
    this.email = email;
    this.sms = sms;
  }
}

class ProviderRequestError extends Error {
  constructor(provider: string, status?: number) {
    super(status ? `${provider} request failed with status ${status}.` : `${provider} request failed.`);
    this.name = "ProviderRequestError";
  }
}

function getEnvironmentValue(...names: string[]) {
  for (const name of names) {
    const value = process.env[name]?.trim();
    if (value) return value;
  }

  return undefined;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

function displayValue(value: string) {
  return value || "Not provided";
}

function toPlainText(lead: EstimateLead) {
  return [
    `New website lead for ${business.name}`,
    "",
    `Name: ${lead.fullName}`,
    `Phone: ${displayValue(lead.phone)}`,
    `Email: ${displayValue(lead.email)}`,
    `Location: ${lead.propertyLocation}`,
    `Service: ${lead.serviceNeeded}`,
    `Preferred contact: ${lead.preferredContact}`,
    `Project details: ${displayValue(lead.projectDetails)}`,
  ].join("\n");
}

function createEmailHtml(lead: EstimateLead) {
  const rows = [
    ["Name", lead.fullName],
    ["Phone", displayValue(lead.phone)],
    ["Email", displayValue(lead.email)],
    ["Property address or city", lead.propertyLocation],
    ["Service needed", lead.serviceNeeded],
    ["Preferred contact", lead.preferredContact],
    ["Project details", displayValue(lead.projectDetails)],
  ];

  return `<!doctype html><html><body style="margin:0;background:#f3f1eb;color:#171712;font-family:Arial,sans-serif"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:32px 16px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2ded1;border-radius:16px;overflow:hidden"><tr><td style="padding:28px 32px;background:#11110f;color:#fff"><p style="margin:0 0 10px;color:#c8a24d;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">New website lead</p><h1 style="margin:0;font-size:28px;line-height:1.2">${escapeHtml(business.name)}</h1></td></tr><tr><td style="padding:12px 32px 28px">${rows.map(([label, value]) => `<div style="padding:16px 0;border-bottom:1px solid #ece8dd"><div style="color:#7c745f;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase">${escapeHtml(label)}</div><div style="margin-top:6px;color:#171712;font-size:16px;line-height:1.5;white-space:pre-line">${escapeHtml(value)}</div></div>`).join("")}</td></tr></table></td></tr></table></body></html>`;
}

export function createNotificationPayloads(lead: EstimateLead): { email: NotificationEmail; sms: NotificationSms } {
  const text = toPlainText(lead);
  return {
    email: {
      to: getEnvironmentValue("LEAD_RECIPIENT_EMAIL", "EMAIL_TO") ?? business.notificationRecipients.email,
      from: getEnvironmentValue("LEAD_FROM_EMAIL", "RESEND_FROM_EMAIL", "SENDGRID_FROM_EMAIL", "EMAIL_FROM"),
      subject: `New website lead: ${lead.serviceNeeded} — ${lead.fullName}`,
      text,
      html: createEmailHtml(lead),
    },
    sms: {
      to: getEnvironmentValue("LEAD_RECIPIENT_PHONE", "TEXT_NOTIFICATION_NUMBER") ?? business.notificationRecipients.sms,
      body: [
        "New website lead:",
        lead.fullName,
        lead.serviceNeeded,
        lead.propertyLocation,
        `Preferred: ${lead.preferredContact}`,
        `Phone: ${displayValue(lead.phone)}`,
        `Email: ${displayValue(lead.email)}`,
      ].join("\n"),
    },
  };
}

async function ensureResponse(response: Response, provider: string) {
  if (response.ok) return;
  throw new ProviderRequestError(provider, response.status);
}

async function sendResend(email: NotificationEmail, apiKey: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: email.from, to: [email.to], subject: email.subject, html: email.html, text: email.text }),
    signal: AbortSignal.timeout(requestTimeoutMs),
  });
  await ensureResponse(response, "Resend email");
}

async function sendSendGrid(email: NotificationEmail, apiKey: string) {
  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: email.to }] }],
      from: { email: email.from },
      subject: email.subject,
      content: [
        { type: "text/plain", value: email.text },
        { type: "text/html", value: email.html },
      ],
    }),
    signal: AbortSignal.timeout(requestTimeoutMs),
  });
  await ensureResponse(response, "SendGrid email");
}

function resolveEmailProvider(): EmailProvider | undefined {
  const configured = getEnvironmentValue("EMAIL_PROVIDER")?.toLowerCase();
  if (configured === "resend" || configured === "sendgrid") return configured;
  if (configured) return undefined;
  if (getEnvironmentValue("RESEND_API_KEY")) return "resend";
  if (getEnvironmentValue("SENDGRID_API_KEY")) return "sendgrid";
  return undefined;
}

async function sendEmail(email: NotificationEmail): Promise<NotificationChannelResult> {
  const requestedProvider = getEnvironmentValue("EMAIL_PROVIDER")?.toLowerCase();
  const provider = resolveEmailProvider();

  if (requestedProvider && !provider) return { channel: "email", status: "failed" };
  if (!provider) return { channel: "email", status: "not-configured" };

  const apiKey = provider === "resend"
    ? getEnvironmentValue("RESEND_API_KEY")
    : getEnvironmentValue("SENDGRID_API_KEY");

  if (!apiKey || !email.from || !email.to) return { channel: "email", provider, status: "not-configured" };

  try {
    if (provider === "resend") await sendResend(email, apiKey);
    else await sendSendGrid(email, apiKey);
    return { channel: "email", provider, status: "delivered" };
  } catch {
    return { channel: "email", provider, status: "failed" };
  }
}

async function sendTwilio(sms: NotificationSms, accountSid: string, authToken: string, from: string) {
  const authorization = Buffer.from(`${accountSid}:${authToken}`).toString("base64");
  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${encodeURIComponent(accountSid)}/Messages.json`, {
    method: "POST",
    headers: { Authorization: `Basic ${authorization}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ To: sms.to, From: from, Body: sms.body }),
    signal: AbortSignal.timeout(requestTimeoutMs),
  });
  await ensureResponse(response, "Twilio SMS");
}

function resolveSmsProvider(): SmsProvider | undefined {
  const configured = getEnvironmentValue("SMS_PROVIDER")?.toLowerCase();
  if (configured === "twilio") return configured;
  if (configured) return undefined;

  const hasTwilioConfiguration = Boolean(
    getEnvironmentValue("TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_FROM_NUMBER", "TWILIO_PHONE_NUMBER"),
  );
  return hasTwilioConfiguration ? "twilio" : undefined;
}

async function sendSms(sms: NotificationSms): Promise<NotificationChannelResult> {
  const requestedProvider = getEnvironmentValue("SMS_PROVIDER")?.toLowerCase();
  const provider = resolveSmsProvider();

  if (requestedProvider && !provider) return { channel: "sms", status: "failed" };
  if (!provider) return { channel: "sms", status: "not-configured" };

  const accountSid = getEnvironmentValue("TWILIO_ACCOUNT_SID");
  const authToken = getEnvironmentValue("TWILIO_AUTH_TOKEN");
  const from = getEnvironmentValue("TWILIO_FROM_NUMBER", "TWILIO_PHONE_NUMBER");

  if (!accountSid || !authToken || !from || !sms.to) return { channel: "sms", provider, status: "not-configured" };

  try {
    await sendTwilio(sms, accountSid, authToken, from);
    return { channel: "sms", provider, status: "delivered" };
  } catch {
    return { channel: "sms", provider, status: "failed" };
  }
}

/**
 * A submission succeeds only after at least one configured provider accepts it.
 * No database persistence is implied; if every channel is unavailable or fails,
 * the route returns an error so the browser retains the customer's form values.
 */
export async function sendLeadNotifications(lead: EstimateLead): Promise<NotificationDeliveryReport> {
  const payloads = createNotificationPayloads(lead);
  const [email, sms] = await Promise.all([sendEmail(payloads.email), sendSms(payloads.sms)]);

  if (email.status === "delivered" || sms.status === "delivered") {
    return { delivered: true, email, sms };
  }

  const reason = email.status === "not-configured" && sms.status === "not-configured"
    ? "not-configured"
    : "delivery-failed";
  throw new LeadDeliveryError(reason, email, sms);
}
