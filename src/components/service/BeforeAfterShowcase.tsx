"use client";

import Image from "next/image";
import { useState } from "react";
import type { ServiceConfig } from "@/config/services";
import type { ServiceVisuals } from "@/lib/service-images";

type BeforeAfterShowcaseProps = { service: ServiceConfig; visuals: ServiceVisuals };

export default function BeforeAfterShowcase({ service, visuals }: BeforeAfterShowcaseProps) {
  const [position, setPosition] = useState(50);
  const hasBefore = Boolean(visuals.before);
  const hasAfter = Boolean(visuals.after);

  return (
    <section className="relative overflow-hidden bg-[#0c0c0b] py-28 sm:py-36 lg:py-44" id="service-transformation">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(216,189,121,.1),transparent_34%),linear-gradient(145deg,transparent_40%,rgba(255,255,255,.025)_100%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-7 lg:grid-cols-[.86fr_1.14fr] lg:gap-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.48em] text-[#d8bd79] sm:text-xs sm:tracking-[.62em]">{service.beforeAfter.eyebrow}</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-.05em] text-white sm:mt-7 sm:text-5xl">{service.beforeAfter.title}</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/64">{service.beforeAfter.description}</p>
            <p className="mt-5 max-w-lg border-l border-[#d8bd79]/45 pl-5 text-sm leading-6 text-white/48">Use the slider to compare the existing condition and finished work once approved photography is available.</p>
          </div>

          <div className="group relative aspect-[16/10] overflow-hidden rounded-[26px] border border-white/12 bg-[#11110f] shadow-[0_32px_90px_rgba(0,0,0,.4)] sm:rounded-[32px]">
            {hasBefore ? <Image alt={visuals.before?.alt ?? "Before project work"} className="object-cover brightness-[.62]" fill sizes="(max-width: 1023px) calc(100vw - 2.5rem), 58vw" src={visuals.before!.src} /> : <div className="absolute inset-0 bg-[linear-gradient(135deg,#191711_0%,#0a0a09_52%,#1a1710_100%)]" />}
            {!hasBefore && <div className="pointer-events-none absolute inset-y-0 left-[28%] w-px bg-[#d8bd79]/22 shadow-[0_0_22px_rgba(216,189,121,.5)]" />}
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
              {hasAfter ? <Image alt={visuals.after?.alt ?? "Completed project work"} className="object-cover brightness-[.9]" fill sizes="(max-width: 1023px) calc(100vw - 2.5rem), 58vw" src={visuals.after!.src} /> : <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(216,189,121,.25),transparent_22%),linear-gradient(135deg,#242015_0%,#100f0c_57%,#17140e_100%)]" />}
              {!hasAfter && <div className="pointer-events-none absolute inset-x-[12%] bottom-[26%] h-px bg-gradient-to-r from-transparent via-[#ead7a3]/75 to-transparent" />}
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px bg-[#ead7a3] shadow-[0_0_18px_rgba(234,215,163,.85)]" style={{ left: `${position}%` }}>
              <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#ead7a3]/75 bg-[#0b0b0a]/90 text-xs text-[#ead7a3] shadow-[0_8px_26px_rgba(0,0,0,.5)]">↔</span>
            </div>
            <div className="absolute left-5 top-5 rounded-full border border-white/16 bg-black/35 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.17em] text-white/70 backdrop-blur-md">{hasBefore ? service.beforeAfter.beforeLabel : "Existing condition"}</div>
            <div className="absolute right-5 top-5 rounded-full border border-[#d8bd79]/35 bg-[#d8bd79]/[.1] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.17em] text-[#ead7a3] backdrop-blur-md">{hasAfter ? service.beforeAfter.afterLabel : "Finished vision"}</div>
            <input aria-label="Compare before and after project conditions" className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0" max="100" min="0" onChange={(event) => setPosition(Number(event.target.value))} type="range" value={position} />
            <p className="absolute bottom-5 left-5 right-5 text-[9px] font-semibold uppercase tracking-[.15em] text-white/45">{hasBefore || hasAfter ? "Drag to compare project photography" : "Photography-ready comparison module"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
