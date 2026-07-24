import Link from "next/link";
import BackgroundImageLayer from "@/components/ui/BackgroundImageLayer";
import { business } from "@/config/business";
import type { ServiceConfig } from "@/config/services";
import { createServiceImageLayer, type ServiceVisuals } from "@/lib/service-images";

type ServiceCTAProps = { service: ServiceConfig; visuals: ServiceVisuals };

export default function ServiceCTA({ service, visuals }: ServiceCTAProps) {
  const background = createServiceImageLayer(service, visuals.ambient ?? visuals.hero);

  return (
    <section className="relative isolate overflow-hidden bg-[#080807] py-28 sm:py-36 lg:py-44" id="service-contact">
      {background.image ? <BackgroundImageLayer background={background} /> : null}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(216,189,121,.16),transparent_38%),linear-gradient(180deg,#080807_0%,rgba(17,15,10,.86)_52%,#080807_100%)]" />
      <div className="pointer-events-none absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-[#ead7a3]/60 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[.52em] text-[#ead7a3] sm:text-xs sm:tracking-[.68em]">{service.cta.eyebrow}</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-.055em] text-white sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl">{service.cta.title}</h2>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-white/70 sm:text-lg sm:leading-8">{service.cta.description}</p>
        <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#d8bd79] px-8 text-[11px] font-bold uppercase tracking-[.16em] text-[#161209] shadow-[0_16px_40px_rgba(216,189,121,.2)] transition hover:-translate-y-0.5 hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transform-none" href="/#contact">Request an Estimate</Link>
          {business.phone.href ? <a className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/22 bg-black/20 px-8 text-[11px] font-bold uppercase tracking-[.16em] text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/48 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none" href={business.phone.href}>Call {business.name}</a> : <span className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/[.035] px-8 text-[11px] font-bold uppercase tracking-[.16em] text-white/45">Contact details coming soon</span>}
        </div>
      </div>
    </section>
  );
}
