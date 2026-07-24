import Image from "next/image";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import WhyChooseGrid from "@/components/why-choose/WhyChooseGrid";
import { whyChooseFeaturedImage, whyChooseItems } from "@/config/whyChoose";
import { resolveHomepageBackground } from "@/lib/backgrounds";

export default function WhyChoose() {
  const background = resolveHomepageBackground("whyChoose");

  return (
    <section className="relative overflow-hidden bg-[#090908] py-28 sm:py-36 lg:py-44" id="why-choose">
      <div className="pointer-events-none absolute inset-0 opacity-[.3] [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute -left-52 top-28 h-[560px] w-[560px] rounded-full bg-[#d8bd79]/[.045] blur-[150px]" />
      <div className="pointer-events-none absolute -right-64 bottom-0 h-[680px] w-[680px] rounded-full bg-white/[.035] blur-[180px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/45 to-transparent" />
      <SectionAtmosphere background={background} variant="warm" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,.72fr)] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.48em] text-[#d8bd79] sm:text-xs sm:tracking-[.62em]">
              Why Choose CM Roofing
            </p>
            <h2 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-.05em] text-white sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl">
              Built Differently. Backed by Better Standards.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/62 sm:mt-8 sm:text-lg sm:leading-8">
              From the materials we specify to the details most homeowners never see, every part of our process is designed to deliver lasting protection and a better customer experience.
            </p>
          </div>

          <aside className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,.24)] backdrop-blur-md sm:rounded-[30px] sm:p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bd79]/80 to-transparent" />
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d8bd79]/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/42">The standard</span>
                <span className="font-mono text-[10px] tracking-[.18em] text-[#d8bd79]">01 / 01</span>
              </div>
              <p className="mt-8 max-w-sm text-2xl font-medium leading-tight tracking-[-.035em] text-white sm:text-3xl">
                The details are the difference.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/62">
                A better roof is not one decision. It is the way each material, transition, and conversation is considered together.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-[9px] font-semibold uppercase tracking-[.15em] text-white/42">
                <span>Materials</span>
                <span className="text-[#d8bd79]">+</span>
                <span>Installation</span>
                <span className="text-[#d8bd79]">+</span>
                <span>Communication</span>
              </div>
            </div>
          </aside>
        </div>

        <figure className="group relative mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_90px_rgba(0,0,0,.42)] sm:mt-16 sm:rounded-[34px]">
          <div className="relative aspect-[4/3] sm:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              alt={whyChooseFeaturedImage.imageAlt}
              className="object-cover brightness-[.78] transition-transform duration-[1600ms] ease-out group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1280px) calc(100vw - 4rem), 1200px"
              src={whyChooseFeaturedImage.image}
              style={{ objectPosition: whyChooseFeaturedImage.imagePosition }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090908]/78 via-[#090908]/22 to-black/18" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-black/10" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ead7a3]/70 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 sm:p-7 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-lg font-medium leading-snug tracking-[-.02em] text-white sm:text-xl">
                {whyChooseFeaturedImage.caption}
              </p>
              <span className="text-[9px] font-semibold uppercase tracking-[.18em] text-white/58">Residential roofing in progress</span>
            </figcaption>
          </div>
        </figure>

        <div className="mt-14 sm:mt-20 lg:mt-24">
          <WhyChooseGrid items={whyChooseItems} />
        </div>
      </div>
    </section>
  );
}
