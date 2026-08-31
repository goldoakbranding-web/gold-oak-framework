import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { business } from "@/config/business";
import { roofingPage } from "@/config/services/roofingPage";

type FocalImage = {
  objectPosition: string;
  mobileObjectPosition: string;
};

function focalPoint(image: FocalImage) {
  return {
    "--roofing-cta-position-mobile": image.mobileObjectPosition,
    "--roofing-cta-position-desktop": image.objectPosition,
  } as CSSProperties;
}

export default function RoofingCTA() {
  const cta = roofingPage.cta;

  return (
    <section
      className="relative isolate flex min-h-[560px] scroll-mt-24 items-end overflow-hidden bg-[#080807] py-12 text-white sm:min-h-[640px] sm:py-18 md:scroll-mt-36 lg:min-h-[700px] lg:py-24"
      id="service-contact"
      style={focalPoint(cta.image)}
    >
      <Image
        alt={cta.image.alt}
        className="object-cover [object-position:var(--roofing-cta-position-mobile)] lg:[object-position:var(--roofing-cta-position-desktop)]"
        fill
        loading="lazy"
        sizes="100vw"
        src={cta.image.src}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,4,.08)_0%,rgba(5,5,4,.22)_30%,rgba(5,5,4,.94)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,5,4,.92)_0%,rgba(5,5,4,.72)_47%,rgba(5,5,4,.16)_100%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(216,189,121,.12),transparent_36%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl border-t border-white/28 pt-6 sm:pt-8 lg:max-w-[58%]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#ead7a3] sm:text-xs">
              {cta.eyebrow}
            </p>
            <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/46">
              Active installation photography
            </p>
          </div>

          <h2 className="mt-5 max-w-2xl text-balance text-5xl leading-[.88] tracking-[-.02em] [font-family:var(--font-bebas)] sm:text-6xl lg:text-7xl">
            {cta.title}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-lg sm:leading-8">
            {cta.description}
          </p>
          {cta.image.caption ? (
            <p className="mt-4 max-w-xl border-l border-[#d8bd79]/70 pl-3 text-[9px] leading-4 tracking-[.04em] text-white/46">
              {cta.image.caption}
            </p>
          ) : null}

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <Link
              className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#d8bd79] px-7 text-center text-[10px] font-bold uppercase tracking-[.16em] text-[#17130a] transition-colors hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transition-none sm:px-8"
              href={cta.primaryAction.href}
            >
              {cta.primaryAction.label}
              <span aria-hidden="true" className="text-base leading-none">
                ↗
              </span>
            </Link>

            {cta.secondaryAction.href && business.phone.value ? (
              <a
                aria-label={`${cta.secondaryAction.label} at ${business.phone.value}`}
                className="inline-flex min-h-14 items-center justify-center gap-4 border border-white/38 bg-black/25 px-7 text-center text-white backdrop-blur-sm transition-[background-color,border-color] hover:border-white/70 hover:bg-black/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none sm:px-8"
                href={cta.secondaryAction.href}
              >
                <span className="text-[10px] font-bold uppercase tracking-[.16em]">
                  {cta.secondaryAction.label}
                </span>
                <span aria-hidden="true" className="h-4 w-px bg-white/28" />
                <span className="text-xs font-semibold tracking-[.04em]">
                  {business.phone.value}
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
