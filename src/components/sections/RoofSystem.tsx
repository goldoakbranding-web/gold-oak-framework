import RoofViewer from "../roof-system/RoofViewer";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { resolveHomepageBackground } from "@/lib/backgrounds";

export default function RoofSystem() {
  const background = resolveHomepageBackground("roofSystem");

  return (
    <section className="relative overflow-hidden bg-[#080807] py-28 sm:py-36 lg:py-44" id="roof-system">
      <div className="pointer-events-none absolute inset-0 opacity-[.34] [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[720px] w-[900px] -translate-x-1/2 rounded-full bg-[#d8bd79]/[.045] blur-[180px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/60 to-transparent" />
      <SectionAtmosphere background={background} variant="roof" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[.48em] text-[#d8bd79] sm:text-xs sm:tracking-[.62em]">
            Complete Roof System
          </p>
          <h2 className="text-balance text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Protection, engineered in layers.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-white/62 sm:mt-8 sm:text-lg sm:leading-8">
            Explore the precision beneath a beautiful roof - seven components designed to work as one resilient system.
          </p>
        </div>

        <RoofViewer />
      </div>
    </section>
  );
}
