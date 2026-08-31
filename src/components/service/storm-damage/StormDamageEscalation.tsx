import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { stormDamageEscalation } from "@/config/services/stormDamage";

const desktopOffsets = ["lg:mt-0", "lg:mt-12", "lg:mt-24"];

function focalPoint(image: (typeof stormDamageEscalation.stages)[number]["image"]) {
  return {
    "--storm-image-position-mobile": image.mobileObjectPosition,
    "--storm-image-position-desktop": image.objectPosition,
  } as CSSProperties;
}

export default function StormDamageEscalation() {
  const { eyebrow, title, description, note, stages, insurance } = stormDamageEscalation;

  return (
    <section aria-labelledby="storm-damage-escalation-title" className="relative overflow-hidden bg-[#11110f] py-14 text-white sm:py-20 lg:py-24" id="storm-damage-escalation">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#d8bd79]/[.055] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <header className="grid gap-6 border-b border-white/12 pb-8 lg:grid-cols-[1.08fr_.72fr] lg:items-end lg:gap-16 lg:pb-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">{eyebrow}</p>
            <h2 className="mt-4 max-w-4xl text-balance text-4xl leading-[.98] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl" id="storm-damage-escalation-title">
              {title}
            </h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-white/64 sm:text-base">{description}</p>
            <p className="mt-3 text-xs leading-5 text-white/42">{note}</p>
          </div>
        </header>

        <ol className="mt-9 grid gap-9 sm:mt-12 md:grid-cols-3 md:gap-4 lg:gap-5 xl:gap-7">
          {stages.map((stage, index) => (
            <li className={desktopOffsets[index]} key={stage.id}>
              <article className="group border-t border-[#d8bd79]/40 pt-3">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="font-mono text-[10px] font-semibold tracking-[.2em] text-[#d8bd79]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-right text-[9px] font-bold uppercase tracking-[.18em] text-white/48 sm:text-[10px]">{stage.label}</span>
                </div>

                <figure className="relative aspect-[4/5] overflow-hidden bg-[#1a1a17] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4]" style={focalPoint(stage.image)}>
                  <Image
                    alt={stage.image.alt}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none [object-position:var(--storm-image-position-mobile)] lg:[object-position:var(--storm-image-position-desktop)]"
                    fill
                    loading="lazy"
                    sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 767px) calc(100vw - 4rem), (max-width: 1279px) 29vw, 384px"
                    src={stage.image.src}
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/5 to-transparent" />
                  <figcaption className="absolute inset-x-4 bottom-4 max-w-sm text-[10px] leading-4 text-white/72 sm:inset-x-5 sm:bottom-5 sm:text-[11px] lg:text-xs lg:leading-5">
                    {stage.image.caption}
                  </figcaption>
                </figure>

                <h3 className="mt-5 text-xl font-semibold leading-tight tracking-[-.025em] text-white sm:text-2xl md:text-lg lg:text-xl xl:text-2xl">{stage.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/56 md:text-xs md:leading-5 lg:text-sm lg:leading-6">{stage.description}</p>
              </article>
            </li>
          ))}
        </ol>

        <aside className="mt-14 grid overflow-hidden border border-white/12 bg-white/[.035] lg:mt-20 lg:grid-cols-[.8fr_1.2fr]" aria-labelledby="storm-insurance-title">
          <div className="border-b border-white/12 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="text-[9px] font-bold uppercase tracking-[.22em] text-[#d8bd79] sm:text-[10px]">{insurance.eyebrow}</p>
            <h3 className="mt-4 max-w-xl text-balance text-3xl leading-none tracking-[-.02em] [font-family:var(--font-bebas)] sm:text-4xl" id="storm-insurance-title">
              {insurance.title}
            </h3>
          </div>
          <div className="flex flex-col items-start justify-center p-6 sm:p-8 lg:p-10">
            <p className="max-w-2xl text-sm leading-7 text-white/62 sm:text-base">{insurance.description}</p>
            <Link
              className="mt-6 inline-flex min-h-13 items-center justify-center gap-3 bg-[#d8bd79] px-6 text-center text-[9px] font-bold uppercase tracking-[.14em] text-[#17130a] transition-colors hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transition-none sm:text-[10px]"
              href={insurance.href}
            >
              {insurance.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
