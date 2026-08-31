"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";
import type { ServiceImage, ServiceProjectComparison } from "@/config/services";

type BeforeAfterShowcaseProps = { evidence: ServiceProjectComparison };

function focalPoint(image: ServiceImage) {
  return {
    "--image-position-mobile": image.mobileObjectPosition,
    "--image-position-desktop": image.objectPosition,
  } as CSSProperties;
}

export default function BeforeAfterShowcase({ evidence }: BeforeAfterShowcaseProps) {
  const [position, setPosition] = useState(50);

  return (
    <section className="scroll-mt-24 bg-[#0d0d0c] py-12 sm:py-20 md:scroll-mt-36 lg:py-24" id="service-project">
      <div className="mx-auto grid max-w-7xl gap-9 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:gap-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">{evidence.eyebrow}</p>
          <h2 className="mt-4 text-balance text-4xl leading-[.98] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">{evidence.title}</h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/62 sm:text-base">{evidence.description}</p>
          <p className="mt-5 border-l border-[#d8bd79]/70 pl-4 text-xs leading-6 text-white/45">Drag the divider to compare the matched project photographs.</p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-[#171714] shadow-[0_28px_80px_rgba(0,0,0,.35)] has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-[#ead7a3]/45 sm:aspect-[16/11]" style={focalPoint(evidence.before.image)}>
          <Image
            alt={evidence.before.image.alt}
            className="object-cover [object-position:var(--image-position-mobile)] lg:[object-position:var(--image-position-desktop)]"
            fill
            sizes="(max-width: 1023px) calc(100vw - 2.5rem), 60vw"
            src={evidence.before.image.src}
          />
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)`, ...focalPoint(evidence.after.image) }}>
            <Image
              alt={evidence.after.image.alt}
              className="object-cover [object-position:var(--image-position-mobile)] lg:[object-position:var(--image-position-desktop)]"
              fill
              sizes="(max-width: 1023px) calc(100vw - 2.5rem), 60vw"
              src={evidence.after.image.src}
            />
          </div>
          <div className="absolute left-4 top-4 bg-black/65 px-3 py-2 text-[9px] font-bold uppercase tracking-[.14em] text-white backdrop-blur-sm">{evidence.before.label}</div>
          <div className="absolute right-4 top-4 bg-[#d8bd79] px-3 py-2 text-[9px] font-bold uppercase tracking-[.14em] text-[#17130a]">{evidence.after.label}</div>
          <input
            aria-label="Compare before and after project photographs"
            className="peer absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
            max="100"
            min="0"
            onChange={(event) => setPosition(Number(event.target.value))}
            type="range"
            value={position}
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 z-10 w-px bg-[#ead7a3] shadow-[0_0_16px_rgba(234,215,163,.8)]" style={{ left: `${position}%` }}>
            <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#ead7a3] bg-[#11110f] text-sm text-[#ead7a3] shadow-lg peer-focus-visible:ring-4 peer-focus-visible:ring-[#ead7a3]/45">↔</span>
          </div>
        </div>
      </div>
    </section>
  );
}
