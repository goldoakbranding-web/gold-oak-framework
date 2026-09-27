import "server-only";

import { Buffer } from "node:buffer";
import { Resend } from "resend";
import { business } from "@/config/business";
import type {
  EstimateLead,
  NotificationChannelResult,
  NotificationDeliveryReport,
  NotificationEmail,
  NotificationSms,
} from "./types";

type SmsProvider = "twilio";
type DeliveryFailureReason = "not-configured" | "delivery-failed";

const requestTimeoutMs = 10_000;
const leadSource = "cmroofingwi.com";
const resendSender = "CM Roofing Website <leads@cmroofingwi.com>";

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

function formatSubmissionTimestamp(submittedAt: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "long",
    timeZone: "America/Chicago",
  }).format(submittedAt);
}

function getEmailSubject(lead: EstimateLead) {
  const service = lead.serviceNeeded ? ` — ${lead.serviceNeeded}` : "";
  return `New CM Roofing Website Lead — ${lead.fullName}${service}`;
}

function toPlainText(lead: EstimateLead, submittedAt: Date) {
  return [
    `New website lead for ${business.name}`,
    "",
    `Name: ${lead.fullName}`,
    `Phone: ${displayValue(lead.phone)}`,
    `Email: ${displayValue(lead.email)}`,
    `Property location: ${lead.propertyLocation}`,
    `Service: ${lead.serviceNeeded}`,
    `Preferred contact method: ${lead.preferredContact}`,
    `Project details: ${displayValue(lead.projectDetails)}`,
    `Consent: ${lead.consent ? "Yes" : "No"}`,
    `Source: ${leadSource}`,
    `Submitted: ${formatSubmissionTimestamp(submittedAt)} (${submittedAt.toISOString()})`,
  ].join("\n");
}

function createEmailHtml(lead: EstimateLead, submittedAt: Date) {
  const rows = [
    { label: "Name", value: lead.fullName },
    {
      label: "Phone",
      value: displayValue(lead.phone),
      href: lead.phone ? `tel:${lead.phone.replace(/[^\d+]/g, "")}` : undefined,
    },
    {
      label: "Email",
      value: displayValue(lead.email),
      href: lead.email ? `mailto:${lead.email}` : undefined,
    },
    { label: "Property location", value: lead.propertyLocation },
    { label: "Service", value: lead.serviceNeeded },
    { label: "Preferred contact method", value: lead.preferredContact },
    { label: "Project details", value: displayValue(lead.projectDetails) },
    { label: "Consent", value: lead.consent ? "Yes" : "No" },
    { label: "Source", value: leadSource },
    {
      label: "Submitted",
      value: `${formatSubmissionTimestamp(submittedAt)} (${submittedAt.toISOString()})`,
    },
  ];

  const rowMarkup = rows.map(({ href, label, value }) => {
    const content = href
      ? `<a href="${escapeHtml(href)}" style="color:#8a6a20;text-decoration:underline">${escapeHtml(value)}</a>`
      : escapeHtml(value);
    return `<div style="padding:16px 0;border-bottom:1px solid #ece8dd"><div style="color:#7c745f;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase">${escapeHtml(label)}</div><div style="margin-top:6px;color:#171712;font-size:16px;line-height:1.5;white-space:pre-line">${content}</div></div>`;
  }).join("");

  const replyNote = lead.email
    ? `<p style="margin:24px 0 0;color:#625d50;font-size:13px;line-height:1.6">Reply to this email to respond directly to ${escapeHtml(lead.fullName)}.</p>`
    : "";

  return `<!doctype html><html><body style="margin:0;background:#f3f1eb;color:#171712;font-family:Arial,sans-serif"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:32px 16px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2ded1;border-radius:16px;overflow:hidden"><tr><td style="padding:28px 32px;background:#11110f;color:#fff"><p style="margin:0 0 10px;color:#c8a24d;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">New website lead</p><h1 style="margin:0;font-size:28px;line-height:1.2">${escapeHtml(business.name)}</h1></td></tr><tr><td style="padding:12px 32px 28px">${rowMarkup}${replyNote}</td></tr></table></td></tr></table></body></html>`;
}

export function createNotificationPayloads(
  lead: EstimateLead,
  submittedAt = new Date(),
): { email: NotificationEmail; sms: NotificationSms } {
  const text = toPlainText(lead, submittedAt);
  return {
    email: {
      to: getEnvironmentValue("CONTACT_NOTIFICATION_EMAIL") ?? "",
      from: resendSender,
      replyTo: lead.email || undefined,
      subject: getEmailSubject(lead),
      text,
      html: createEmailHtml(lead, submittedAt),
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
  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: email.from,
    to: [email.to],
    replyTo: email.replyTo,
    subject: email.subject,
    html: email.html,
    text: email.text,
  });
  if (error) {
    console.error("[lead-notification:resend-rejected]", {
      code: error.name,
      status: error.statusCode,
    });
    throw new ProviderRequestError("Resend email", error.statusCode ?? undefined);
  }
  if (!data?.id) {
    console.error("[lead-notification:resend-rejected]", { code: "missing-message-id" });
    throw new ProviderRequestError("Resend email");
  }
}

async function sendEmail(email: NotificationEmail): Promise<NotificationChannelResult> {
  const provider = "resend" as const;
  const apiKey = getEnvironmentValue("RESEND_API_KEY");
  if (!apiKey || !email.to) return { channel: "email", provider, status: "not-configured" };

  try {
    await sendResend(email, apiKey);
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
 * A submission succeeds only after Resend accepts the notification email.
 * No database persistence is implied; if email delivery is unavailable or fails,
 * the route returns an error so the browser retains the customer's form values.
 */
export async function sendLeadNotifications(lead: EstimateLead): Promise<NotificationDeliveryReport> {
  const payloads = createNotificationPayloads(lead);
  const [email, sms] = await Promise.all([sendEmail(payloads.email), sendSms(payloads.sms)]);

  if (email.status !== "delivered") {
    const reason = email.status === "not-configured" ? "not-configured" : "delivery-failed";
    throw new LeadDeliveryError(reason, email, sms);
  }

  return { delivered: true, email, sms };
}
