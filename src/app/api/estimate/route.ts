import { NextResponse } from "next/server";
import { estimateFailureNotice } from "@/config/contact";
import { consumeEstimateRateLimit, getRequestIdentifier } from "@/lib/lead/rate-limit";
import { LeadDeliveryError, sendLeadNotifications } from "@/lib/lead/notifications";
import { getEstimateLead, validateEstimateLead } from "@/lib/lead/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const maxBodyBytes = 20_000;
const minimumHumanFillTimeMs = 750;

function json(body: Record<string, unknown>, status: number, headers?: HeadersInit) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

function hasAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}

export async function POST(request: Request) {
  if (!hasAllowedOrigin(request)) return json({ error: "Invalid request origin." }, 403);

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(contentLength) && contentLength > maxBodyBytes) return json({ error: "Request is too large." }, 413);

  const identifier = getRequestIdentifier(request.headers);
  const rateLimit = consumeEstimateRateLimit(identifier);
  if (!rateLimit.allowed) {
    return json({ error: "Too many requests. Please try again shortly." }, 429, { "Retry-After": String(rateLimit.retryAfterSeconds) });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid JSON request body." }, 400);
  }

  const validation = validateEstimateLead(payload);
  if (!validation.ok) return json({ error: "Please review the highlighted fields.", fieldErrors: validation.errors }, 422);

  // Return a generic accepted response for bots without exposing the honeypot check.
  if (validation.data.website) return json({ status: "success" }, 201);

  const elapsed = Date.now() - validation.data.formStartedAt;
  if (elapsed < minimumHumanFillTimeMs || validation.data.formStartedAt > Date.now() + 60_000) {
    return json({ error: "Please wait a moment and try again." }, 422);
  }

  try {
    const delivery = await sendLeadNotifications(getEstimateLead(validation.data));

    if (delivery.email.status === "failed" || delivery.sms.status === "failed") {
      console.warn("[lead-notification:partial-delivery]", {
        email: delivery.email.status,
        sms: delivery.sms.status,
      });
    }

    return json({ status: "success" }, 201);
  } catch (error) {
    if (error instanceof LeadDeliveryError) {
      console.error("[lead-notification:error]", {
        reason: error.reason,
        email: error.email.status,
        sms: error.sms.status,
      });
      return json({ error: estimateFailureNotice }, error.reason === "not-configured" ? 503 : 502);
    }

    console.error("[lead-notification:error]", { reason: "unexpected" });
    return json({ error: estimateFailureNotice }, 502);
  }
}
