"use client";

import type { RoofLayer } from "@/config/roofLayers";

type RoofInfoCardProps = {
  layer: RoofLayer;
};

export default function RoofInfoCard({ layer }: RoofInfoCardProps) {
  return (
    <article
      className="relative overflow-hidden rounded-[22px] border border-white/12 bg-[#11110f]/75 p-5 shadow-[0_20px_55px_rgba(0,0,0,.28)] backdrop-blur-xl sm:p-6"
      style={{ boxShadow: `0 20px 55px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.05)` }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${layer.accent}, transparent)` }}
      />
      <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full blur-3xl" style={{ backgroundColor: `${layer.accent}16` }} />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#d8bd79]">{layer.eyebrow}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">{layer.name}</h3>
        </div>
        <span className="font-mono text-xs text-white/35">{layer.number} / 07</span>
      </div>

      <p className="relative mt-4 text-sm leading-6 text-white/72">{layer.purpose}</p>

      <div className="relative mt-5 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[.16em] text-white/40">Why it matters</p>
          <p className="mt-1.5 text-xs leading-5 text-white/68">{layer.whyItMatters}</p>
        </div>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[.16em] text-white/40">Preferred options</p>
          <p className="mt-1.5 text-xs leading-5 text-white/68">{layer.manufacturerOptions}</p>
        </div>
      </div>

      <div className="relative mt-5 grid gap-3 rounded-xl border border-white/[.08] bg-black/20 p-3 sm:grid-cols-2">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[.16em] text-white/40">Warranty</p>
          <p className="mt-1 text-xs leading-5 text-white/72">{layer.warranty}</p>
        </div>
        <div className="border-t border-white/[.08] pt-3 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">
          <p className="text-[9px] font-semibold uppercase tracking-[.16em] text-white/40">Installation note</p>
          <p className="mt-1 text-xs leading-5 text-white/72">{layer.installationNote}</p>
        </div>
      </div>
    </article>
  );
}
