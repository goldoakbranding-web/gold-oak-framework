import Link from "next/link";
import { business } from "@/config/business";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a09] px-5 py-20 sm:px-8 sm:py-24 lg:py-32" id="estimate">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-[#d8bd79]/[.065] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-[#11110f] px-6 py-12 shadow-[0_32px_90px_rgba(0,0,0,.34)] sm:rounded-[34px] sm:px-10 sm:py-16 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#d8bd79]/15" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#d8bd79]/10" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ead7a3]/75 to-transparent" />

        <div className="relative max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[.42em] text-[#d8bd79] sm:text-xs sm:tracking-[.55em]">
            Ready To Protect Your Home?
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-.052em] text-white sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl">
            Get Your Free Estimate Today
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Tell us what your home needs, and we’ll follow up to discuss the project and next steps.
          </p>
        </div>

        <div className="relative mt-9 flex w-full flex-col gap-3 sm:max-w-sm lg:mt-0 lg:w-[21rem]">
          <Link
            className="flex min-h-14 items-center justify-between rounded-full bg-[#d8b34f] px-6 text-[11px] font-bold uppercase tracking-[.13em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#e1bf68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transform-none motion-reduce:transition-none"
            href="#contact"
          >
            Get Free Estimate <span aria-hidden="true" className="text-lg font-normal">→</span>
          </Link>
          {business.phone.href && business.phone.value && (
            <a
              className="flex min-h-14 items-center justify-between rounded-full border border-white/25 bg-black/15 px-6 text-[11px] font-bold uppercase tracking-[.11em] text-white transition-colors duration-300 hover:border-[#d8bd79]/65 hover:bg-[#d8bd79]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8bd79]"
              href={business.phone.href}
            >
              Call {business.phone.value} <span aria-hidden="true" className="text-lg font-normal">→</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
