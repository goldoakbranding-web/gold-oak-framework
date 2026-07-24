import "server-only";

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

type RateLimitStore = Map<string, RateLimitBucket>;

const globalForRateLimit = globalThis as typeof globalThis & { __cmRoofingEstimateRateLimitStore?: RateLimitStore };
const windowMs = 15 * 60 * 1000;
const maximumRequests = 5;

function getStore() {
  globalForRateLimit.__cmRoofingEstimateRateLimitStore ??= new Map();
  return globalForRateLimit.__cmRoofingEstimateRateLimitStore;
}

/**
 * Process-local limiter for the route. Replace this store with Redis, Upstash, or a platform
 * rate-limit service when the app runs on multiple server instances.
 */
export function consumeEstimateRateLimit(identifier: string) {
  const now = Date.now();
  const store = getStore();

  for (const [key, bucket] of store) {
    if (bucket.resetAt <= now) store.delete(key);
  }

  const current = store.get(identifier);
  if (!current || current.resetAt <= now) {
    store.set(identifier, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maximumRequests - 1, retryAfterSeconds: 0 };
  }

  if (current.count >= maximumRequests) {
    return { allowed: false, remaining: 0, retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)) };
  }

  current.count += 1;
  return { allowed: true, remaining: maximumRequests - current.count, retryAfterSeconds: 0 };
}

export function getRequestIdentifier(headers: Headers) {
  const forwarded = headers.get("x-forwarded-for");
  const candidate = forwarded?.split(",")[0]?.trim() || headers.get("x-real-ip") || "unknown";
  return candidate.slice(0, 128);
}
