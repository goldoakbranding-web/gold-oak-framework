import Link from "next/link";
import { roofingPage } from "@/config/services/roofingPage";

export default function RoofingServiceArea() {
  const { serviceArea } = roofingPage;

  return (
    <section
      aria-labelledby="roofing-service-area-title"
      className="relative scroll-mt-24 overflow-hidden bg-[#e9e5dc] py-12 text-[#171714] md:scroll-mt-36 sm:py-16 lg:py-20"
      id="roofing-service-area"
    >
      <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-1 bg-[#d8bd79] sm:w-2 lg:left-[max(0px,calc((100vw-80rem)/2))]" />

      <div className="mx-auto grid max-w-7xl gap-9 px-5 sm:px-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end lg:gap-20">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#806c35] sm:text-xs">
            {serviceArea.eyebrow}
          </p>
          <h2
            className="mt-4 max-w-xl text-balance text-4xl leading-[.96] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl"
            id="roofing-service-area-title"
          >
            {serviceArea.title}
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-black/62 sm:text-base">
            {serviceArea.description}
          </p>
        </div>

        <div className="border-y border-black/20">
          <dl className="grid sm:grid-cols-2">
            {serviceArea.facts.map((fact, index) => (
              <div
                className={`py-5 sm:py-7 ${index === 0 ? "border-b border-black/20 sm:border-b-0 sm:border-r sm:pr-8" : "sm:pl-8"}`}
                key={fact.id}
              >
                <dt className="font-mono text-[9px] font-semibold uppercase tracking-[.2em] text-[#806c35]">{fact.label}</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-4 border-t border-black/20 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-6">
            <p className="max-w-md text-xs leading-5 text-black/52 sm:text-sm">
              {serviceArea.note}
            </p>
            <Link
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 bg-[#171714] px-6 text-[10px] font-bold uppercase tracking-[.16em] text-white transition-colors hover:bg-[#2a2924] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171714] sm:min-h-12"
              href={serviceArea.action.href}
            >
              {serviceArea.action.label}
              <span aria-hidden="true" className="text-[#d8bd79]">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
