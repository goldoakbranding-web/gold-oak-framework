import RoofViewer from "../roof-system/RoofViewer";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { resolveHomepageBackground } from "@/lib/backgrounds";

export default function RoofSystem() {
  const background = resolveHomepageBackground("roofSystem");

  return (
    <section className="relative overflow-clip bg-[#080807] py-28 sm:py-36 lg:py-44" id="roof-system">
      <div className="pointer-events-none absolute inset-0 opacity-[.34] [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[720px] w-[900px] -translate-x-1/2 rounded-full bg-[#d8bd79]/[.045] blur-[180px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/60 to-transparent" />
      <SectionAtmosphere background={background} variant="roof" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[.48em] text-[#d8bd79] sm:text-xs sm:tracking-[.62em]">
            ROOFING SYSTEM
          </p>
          <h2 className="text-balance text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Built On More Than Just Shingles
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-white/62 sm:mt-8 sm:text-lg sm:leading-8">
            A residential roof can bring several connected materials and details together. Explore a common assembly from the finished surface to the interior side.
          </p>
          <p className="mx-auto mt-5 max-w-2xl border-l border-[#d8bd79]/65 pl-4 text-left text-xs leading-6 text-white/45 sm:text-sm">
            This interactive view is educational. Actual materials, ventilation, insulation, code requirements, and layer sequence vary by home and project scope.
          </p>
        </div>

        <RoofViewer />

        <div className="mt-12 grid border-y border-white/12 sm:mt-16 sm:grid-cols-3 lg:mt-20">
          <div className="flex items-start gap-4 border-b border-white/12 px-1 py-6 sm:border-b-0 sm:border-r sm:px-6 lg:px-8">
            <svg aria-hidden="true" className="mt-0.5 size-7 shrink-0 text-[#d8bd79]" fill="none" viewBox="0 0 32 32">
              <path d="M16 3.5 26 7v7.6c0 6.2-4.1 11.7-10 13.9-5.9-2.2-10-7.7-10-13.9V7l10-3.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="m11.5 16 3 3 6.5-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[.16em] text-white">Layered Assembly</h3>
              <p className="mt-2 text-sm leading-6 text-white/52">Components are considered as a connected system.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-white/12 px-1 py-6 sm:border-b-0 sm:border-r sm:px-6 lg:px-8">
            <svg aria-hidden="true" className="mt-0.5 size-7 shrink-0 text-[#d8bd79]" fill="none" viewBox="0 0 32 32">
              <path d="M5 23.5h22M7.5 20l8.5-9 8.5 9M11 20v-3.8M21 20v-3.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M16 4v3M9.2 6.5l2 2M22.8 6.5l-2 2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[.16em] text-white">Weather Management</h3>
              <p className="mt-2 text-sm leading-6 text-white/52">The right details depend on the roof and project.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 px-1 py-6 sm:px-6 lg:px-8">
            <svg aria-hidden="true" className="mt-0.5 size-7 shrink-0 text-[#d8bd79]" fill="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="11.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 9.5V16l4.5 3M12.5 3.5h7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[.16em] text-white">Project-Specific Design</h3>
              <p className="mt-2 text-sm leading-6 text-white/52">The final assembly follows the home and agreed scope.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:justify-center">
          <a
            className="inline-flex min-h-14 items-center justify-center bg-[#d8bd79] px-7 text-center text-[10px] font-bold uppercase tracking-[.16em] text-[#17130a] transition-colors hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transition-none sm:px-8"
            href="#contact"
          >
            Get Your Free Estimate <span aria-hidden="true" className="ml-3 text-base leading-none">→</span>
          </a>
          <a
            className="inline-flex min-h-14 items-center justify-center border border-white/28 px-7 text-center text-[10px] font-bold uppercase tracking-[.16em] text-white transition-colors hover:border-[#d8bd79]/70 hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none sm:px-8"
            href="#projects"
          >
            View Our Work <span aria-hidden="true" className="ml-3 text-base leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
