"use client";

import { roofLayers } from "@/config/roofLayers";

type RoofFallbackStatus = "loading" | "unsupported" | "error";

type RoofFallbackProps = {
  activeLayerId?: string;
  onRetry?: () => void;
  status?: RoofFallbackStatus;
};

const fallbackCopy: Record<RoofFallbackStatus, { eyebrow: string; title: string; body: string }> = {
  loading: {
    eyebrow: "Interactive roof system",
    title: "Preparing the 3D roof",
    body: "The lightweight roof viewer loads only when this section is nearby.",
  },
  unsupported: {
    eyebrow: "Roof system overview",
    title: "Interactive 3D is unavailable",
    body: "You can still use the layer controls to explore every part of the roofing system.",
  },
  error: {
    eyebrow: "Roof system overview",
    title: "The interactive view paused",
    body: "The layer guide remains available while the 3D viewer is paused.",
  },
};

export default function RoofFallback({ activeLayerId, onRetry, status = "loading" }: RoofFallbackProps) {
  const copy = fallbackCopy[status];

  return (
    <div
      aria-live={status === "loading" ? "off" : "polite"}
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#0d0e0c] px-5 py-16 text-center"
      role={status === "loading" ? "status" : "group"}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(216,189,121,.12),transparent_48%)]" />
      <div className="relative mx-auto flex w-full max-w-lg flex-col items-center">
        <svg
          aria-hidden="true"
          className="h-auto w-full max-w-[360px] drop-shadow-[0_22px_30px_rgba(0,0,0,.55)]"
          viewBox="0 0 360 245"
        >
          <defs>
            <linearGradient id="roof-fallback-surface" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity=".24" />
              <stop offset="1" stopColor="#ffffff" stopOpacity=".02" />
            </linearGradient>
          </defs>
          {roofLayers.map((layer, index) => {
            const reverseIndex = roofLayers.length - index - 1;
            const y = 42 + reverseIndex * 18;
            const selected = layer.id === activeLayerId;

            return (
              <g key={layer.id} opacity={activeLayerId && !selected ? 0.38 : 1}>
                <path
                  d={`M 48 ${y + 62} L 179 ${y} L 312 ${y + 62} L 286 ${y + 72} L 179 ${y + 22} L 73 ${y + 72} Z`}
                  fill={selected ? layer.accent : layer.color}
                  stroke={selected ? "#f0d996" : "rgba(255,255,255,.2)"}
                  strokeWidth={selected ? 2 : 1}
                />
                <path
                  d={`M 73 ${y + 72} L 179 ${y + 22} L 286 ${y + 72}`}
                  fill="none"
                  stroke="url(#roof-fallback-surface)"
                  strokeWidth="2"
                />
              </g>
            );
          })}
        </svg>

        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[.28em] text-[#d8bd79]">{copy.eyebrow}</p>
        <p className="mt-3 text-xl font-semibold tracking-[-.025em] text-white sm:text-2xl">{copy.title}</p>
        <p className="mt-2 max-w-sm text-sm leading-6 text-white/55">{copy.body}</p>

        {status !== "loading" && onRetry ? (
          <button
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-[#d8bd79]/45 px-5 text-[10px] font-semibold uppercase tracking-[.16em] text-[#ead8a8] transition hover:border-[#d8bd79] hover:bg-[#d8bd79]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8bd79] motion-reduce:transition-none"
            onClick={onRetry}
            type="button"
          >
            Try 3D again
          </button>
        ) : null}
      </div>
    </div>
  );
}
