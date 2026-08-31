import "server-only";

import { preferredContactOptions, serviceOptions } from "@/config/contact";
import type { EstimateLead, EstimateLeadInput } from "./types";

export type LeadValidationResult =
  | { ok: true; data: EstimateLeadInput }
  | { ok: false; errors: Record<string, string> };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : null;
}

function sanitizeSingleLine(value: unknown, maximumLength: number) {
  if (typeof value !== "string") return "";

  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maximumLength);
}

function sanitizeMultiline(value: unknown, maximumLength: number) {
  if (typeof value !== "string") return "";

  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n?/g, "\n")
    .trim()
    .slice(0, maximumLength);
}

function hasOption(options: readonly string[], value: string) {
  return options.includes(value);
}

/** Validates and normalizes every client field independently of client-side validation. */
export function validateEstimateLead(input: unknown): LeadValidationResult {
  const payload = asRecord(input);
  if (!payload) return { ok: false, errors: { form: "Invalid request payload." } };

  const data: EstimateLeadInput = {
    fullName: sanitizeSingleLine(payload.fullName, 100),
    phone: sanitizeSingleLine(payload.phone, 32),
    email: sanitizeSingleLine(payload.email, 254).toLowerCase(),
    propertyLocation: sanitizeSingleLine(payload.propertyLocation, 180),
    serviceNeeded: sanitizeSingleLine(payload.serviceNeeded, 80),
    preferredContact: sanitizeSingleLine(payload.preferredContact, 24),
    projectDetails: sanitizeMultiline(payload.projectDetails, 2000),
    consent: payload.consent === true,
    website: sanitizeSingleLine(payload.website, 160),
    formStartedAt: typeof payload.formStartedAt === "number" && Number.isFinite(payload.formStartedAt) ? payload.formStartedAt : 0,
  };
  const errors: Record<string, string> = {};
  const phoneDigits = data.phone.replace(/\D/g, "");
  const phoneRequired = data.preferredContact === "Phone" || data.preferredContact === "Text";
  const emailRequired = data.preferredContact === "Email";

  if (!data.fullName) errors.fullName = "Enter your full name.";
  if (phoneRequired && !data.phone) errors.phone = "Enter a phone number.";
  else if (data.phone && (phoneDigits.length < 10 || phoneDigits.length > 15)) errors.phone = "Enter a valid phone number.";
  if (emailRequired && !data.email) errors.email = "Enter your email address.";
  else if (data.email && !emailPattern.test(data.email)) errors.email = "Enter a valid email address.";
  if (!data.propertyLocation) errors.propertyLocation = "Enter your property address or city.";
  if (!hasOption(serviceOptions, data.serviceNeeded)) errors.serviceNeeded = "Choose a valid service.";
  if (!hasOption(preferredContactOptions, data.preferredContact)) errors.preferredContact = "Choose a valid contact method.";
  if (!data.consent) errors.consent = "Consent is required.";

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}

export function getEstimateLead(input: EstimateLeadInput): EstimateLead {
  return {
    fullName: input.fullName,
    phone: input.phone,
    email: input.email,
    propertyLocation: input.propertyLocation,
    serviceNeeded: input.serviceNeeded,
    preferredContact: input.preferredContact,
    projectDetails: input.projectDetails,
  };
}
