import ProcessTimeline from "@/components/process/ProcessTimeline";
import { processSteps } from "@/config/process";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { resolveHomepageBackground } from "@/lib/backgrounds";

export default function Process() {
  const background = resolveHomepageBackground("process");

  return (
    <section className="relative overflow-hidden bg-[#090908] py-28 sm:py-36 lg:py-44" id="process">
      <div className="pointer-events-none absolute inset-0 opacity-[.3] [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute -left-48 top-1/3 h-[560px] w-[560px] rounded-full bg-[#d8bd79]/[.05] blur-[170px]" />
      <div className="pointer-events-none absolute -right-64 bottom-0 h-[620px] w-[620px] rounded-full bg-white/[.03] blur-[180px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/50 to-transparent" />
      <SectionAtmosphere background={background} variant="process" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(300px,.68fr)] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.48em] text-[#d8bd79] sm:text-xs sm:tracking-[.62em]">Our Process</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-.05em] text-white sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl">Our Process</h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/62 sm:mt-8 sm:text-lg sm:leading-8">
              We believe great results start with a clear plan. From your first call to the final walkthrough, we make every step simple, transparent, and professional.
            </p>
          </div>

          <aside className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,.24)] backdrop-blur-md sm:rounded-[30px] sm:p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bd79]/80 to-transparent" />
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d8bd79]/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/42">A clear path</span>
                <span className="font-mono text-[10px] tracking-[.18em] text-[#d8bd79]">01 - 05</span>
              </div>
              <p className="mt-7 text-2xl font-medium leading-tight tracking-[-.035em] text-white sm:text-3xl">Thoughtful from the first conversation.</p>
              <p className="mt-4 text-sm leading-6 text-white/62">A focused process gives every decision its place and makes it easier to move forward with confidence.</p>
            </div>
          </aside>
        </div>

        <div className="mt-16 lg:mt-24">
          <ProcessTimeline steps={processSteps} />
        </div>
      </div>
    </section>
  );
}
