import Link from "next/link";
import BackgroundImageLayer from "@/components/ui/BackgroundImageLayer";
import type { ServiceConfig } from "@/config/services";
import { createServiceImageLayer, type ServiceVisuals } from "@/lib/service-images";

type ServiceHeroProps = {
  service: ServiceConfig;
  visuals: ServiceVisuals;
};

export default function ServiceHero({ service, visuals }: ServiceHeroProps) {
  const background = createServiceImageLayer(service, visuals.hero ?? visuals.ambient);
  const alignment = {
    start: "items-start text-left",
    center: "items-center text-center",
    end: "items-end text-right",
  }[service.theme.heroAlignment];

  return (
    <section className="relative isolate flex min-h-[760px] items-end overflow-hidden bg-[#080807] pb-16 pt-36 sm:min-h-[820px] sm:pb-20 sm:pt-40 lg:min-h-[900px] lg:pb-28" id="service-top">
      {background.image ? <BackgroundImageLayer background={background} preload /> : <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_16%,rgba(216,189,121,.16),transparent_35%),linear-gradient(135deg,#080807_0%,#17140d_52%,#080807_100%)]" />}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:96px_96px] opacity-35 [mask-image:linear-gradient(to_bottom,transparent,black_36%,transparent_85%)]" />
      <div className="pointer-events-none absolute -right-40 top-20 h-[620px] w-[620px] rounded-full bg-[#d8bd79]/[.11] blur-[170px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-transparent via-[#080807]/60 to-[#080807]" />
      <div className="pointer-events-none absolute inset-x-[10%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#ead7a3]/45 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className={`flex max-w-4xl flex-col ${alignment}`}>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white/52">
            <Link className="transition hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]" href="/">Home</Link>
            <span aria-hidden="true" className="text-[#d8bd79]">/</span>
            <Link className="transition hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]" href="/#services">Services</Link>
            <span aria-hidden="true" className="text-[#d8bd79]">/</span>
            <span aria-current="page" className="text-white/78">{service.name}</span>
          </nav>
          <p className="mt-8 text-[10px] font-semibold uppercase tracking-[.5em] text-[#ead7a3] sm:text-xs sm:tracking-[.62em]">{service.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[.95] tracking-[-.065em] text-white sm:mt-7 sm:text-6xl md:text-7xl lg:text-8xl">{service.heroTitle}</h1>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-white/74 sm:text-lg sm:leading-8">{service.heroDescription}</p>
          <div className="mt-10 flex w-full flex-col gap-3 sm:mt-12 sm:w-auto sm:flex-row">
            <Link className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#d8bd79] px-7 text-[11px] font-bold uppercase tracking-[.16em] text-[#17130a] shadow-[0_14px_36px_rgba(216,189,121,.18)] transition hover:-translate-y-0.5 hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transform-none" href="/#contact">Request an Estimate</Link>
            <a className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/22 bg-black/20 px-7 text-[11px] font-bold uppercase tracking-[.16em] text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/48 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none" href="#service-process">Explore the Process</a>
          </div>
        </div>

        <div className="mt-14 grid max-w-3xl grid-cols-1 divide-y divide-white/10 rounded-[22px] border border-white/10 bg-black/20 backdrop-blur-md sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:rounded-full">
          {service.heroIndicators.map((indicator, index) => <div className="flex items-center gap-3 px-5 py-4 text-[10px] font-semibold uppercase tracking-[.16em] text-white/70" key={indicator}><span className="font-mono text-[#d8bd79]">0{index + 1}</span>{indicator}</div>)}
        </div>
      </div>
    </section>
  );
}
