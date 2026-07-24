import "server-only";

import { Buffer } from "node:buffer";
import { business } from "@/config/business";
import type { EstimateLead, NotificationEmail, NotificationSms } from "./types";

type EmailProvider = "resend" | "sendgrid" | "smtp" | "ses";
type SmsProvider = "twilio" | "vonage" | "sns";
type ChannelResult = { delivered: boolean; configured: boolean };

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

function toPlainText(lead: EstimateLead) {
  return [
    `New website lead for ${business.name}`,
    "",
    `Name: ${lead.fullName}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    `Location: ${lead.propertyLocation}`,
    `Service: ${lead.serviceNeeded}`,
    `Preferred contact: ${lead.preferredContact}`,
    `Project details: ${lead.projectDetails || "Not provided"}`,
  ].join("\n");
}

function createEmailHtml(lead: EstimateLead) {
  const rows = [
    ["Name", lead.fullName],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Property address or city", lead.propertyLocation],
    ["Service needed", lead.serviceNeeded],
    ["Preferred contact", lead.preferredContact],
    ["Project details", lead.projectDetails || "Not provided"],
  ];

  return `<!doctype html><html><body style="margin:0;background:#f3f1eb;color:#171712;font-family:Arial,sans-serif"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:32px 16px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2ded1;border-radius:16px;overflow:hidden"><tr><td style="padding:28px 32px;background:#11110f;color:#fff"><p style="margin:0 0 10px;color:#c8a24d;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">New website lead</p><h1 style="margin:0;font-size:28px;line-height:1.2">${escapeHtml(business.name)}</h1></td></tr><tr><td style="padding:12px 32px 28px">${rows.map(([label, value]) => `<div style="padding:16px 0;border-bottom:1px solid #ece8dd"><div style="color:#7c745f;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase">${escapeHtml(label)}</div><div style="margin-top:6px;color:#171712;font-size:16px;line-height:1.5;white-space:pre-line">${escapeHtml(value)}</div></div>`).join("")}</td></tr></table></td></tr></table></body></html>`;
}

export function createNotificationPayloads(lead: EstimateLead): { email: NotificationEmail; sms: NotificationSms } {
  const text = toPlainText(lead);
  return {
    email: {
      to: process.env.EMAIL_TO || business.notificationRecipients.email,
      from: process.env.EMAIL_FROM,
      subject: `New website lead: ${lead.serviceNeeded} — ${lead.fullName}`,
      text,
      html: createEmailHtml(lead),
    },
    sms: {
      to: process.env.TEXT_NOTIFICATION_NUMBER || business.notificationRecipients.sms,
      body: `New website lead:\n${lead.fullName}\n${lead.serviceNeeded}\n${lead.propertyLocation}\n${lead.phone}`,
    },
  };
}

async function ensureResponse(response: Response, provider: string) {
  if (response.ok) return;
  const detail = (await response.text()).slice(0, 500);
  throw new Error(`${provider} notification failed (${response.status}): ${detail}`);
}

async function sendResend(email: NotificationEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !email.from) return false;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: email.from, to: [email.to], subject: email.subject, html: email.html, text: email.text }),
  });
  await ensureResponse(response, "Resend email");
  return true;
}

async function sendSendGrid(email: NotificationEmail) {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey || !email.from) return false;
  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ personalizations: [{ to: [{ email: email.to }] }], from: { email: email.from }, subject: email.subject, content: [{ type: "text/plain", value: email.text }, { type: "text/html", value: email.html }] }),
  });
  await ensureResponse(response, "SendGrid email");
  return true;
}

async function sendEmail(email: NotificationEmail): Promise<ChannelResult> {
  const provider = process.env.EMAIL_PROVIDER?.toLowerCase() as EmailProvider | undefined;
  if (!provider || !email.from) {
    console.info("[lead-notification:email:development]", email);
    return { delivered: false, configured: false };
  }

  if (provider === "resend") return { delivered: await sendResend(email), configured: true };
  if (provider === "sendgrid") return { delivered: await sendSendGrid(email), configured: true };
  if (provider === "smtp" || provider === "ses") {
    throw new Error(`EMAIL_PROVIDER=${provider} requires a server-side adapter. Configure Resend or SendGrid now, or add the provider adapter before enabling this provider.`);
  }

  throw new Error("EMAIL_PROVIDER must be resend, sendgrid, smtp, or ses.");
}

async function sendTwilio(sms: NotificationSms) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;
  if (!accountSid || !authToken || !from) return false;

  const authorization = Buffer.from(`${accountSid}:${authToken}`).toString("base64");
  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${encodeURIComponent(accountSid)}/Messages.json`, {
    method: "POST",
    headers: { Authorization: `Basic ${authorization}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ To: sms.to, From: from, Body: sms.body }),
  });
  await ensureResponse(response, "Twilio SMS");
  return true;
}

async function sendSms(sms: NotificationSms): Promise<ChannelResult> {
  const provider = (process.env.SMS_PROVIDER?.toLowerCase() || "twilio") as SmsProvider;
  if (provider === "twilio") {
    const delivered = await sendTwilio(sms);
    if (!delivered) console.info("[lead-notification:sms:development]", sms);
    return { delivered, configured: delivered };
  }

  if (provider === "vonage" || provider === "sns") {
    throw new Error(`SMS_PROVIDER=${provider} requires a server-side adapter. Configure Twilio now, or add the provider adapter before enabling this provider.`);
  }

  throw new Error("SMS_PROVIDER must be twilio, vonage, or sns.");
}

/** Sends configured notifications; missing credentials intentionally use development logging instead of pretending delivery occurred. */
export async function sendLeadNotifications(lead: EstimateLead) {
  const payloads = createNotificationPayloads(lead);
  const [email, sms] = await Promise.all([sendEmail(payloads.email), sendSms(payloads.sms)]);
  return { mode: email.delivered && sms.delivered ? "sent" : "development", email, sms };
}
