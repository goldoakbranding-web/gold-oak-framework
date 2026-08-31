import { business } from "@/config/business";

export default function ServiceArea() {
  const serviceArea = business.serviceAreas;

  if (!serviceArea) return null;

  return (
    <section
      className="relative overflow-hidden border-y border-black/10 bg-[#e9e5dc] py-14 text-[#171714] sm:py-18 lg:py-20"
      id="service-area"
    >
      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-[#806c35]/10" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,.8fr)_minmax(420px,1.2fr)] lg:items-end lg:gap-20">
        <div className="relative">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-8 bg-[#806c35]" />
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#806c35] sm:text-xs">
              Central Wisconsin Service Area
            </p>
          </div>
          <h2 className="mt-5 max-w-2xl text-balance text-4xl leading-[.96] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
            Local Service, Based in {business.city}.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-black/62 sm:text-base">
            Serving homes and businesses across Central Wisconsin from {business.city}, {business.state}.
          </p>
          <p className="mt-3 max-w-xl text-xs leading-6 text-black/48 sm:text-sm">
            {serviceArea.availabilityNote}
          </p>
          <a
            className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-[#806c35]/55 pb-1 text-[10px] font-bold uppercase tracking-[.17em] text-[#6f5a29] transition-colors hover:border-[#171714] hover:text-[#171714] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#806c35]"
            href="#contact"
          >
            Confirm Your Location
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="relative border-t border-black/20">
          <ul className="grid grid-cols-2" aria-label="Primary Central Wisconsin service communities">
            {serviceArea.communities.map((community, index) => (
              <li
                className={`flex min-h-14 items-center gap-3 border-b border-black/20 py-3 text-sm font-semibold sm:min-h-16 sm:text-base ${
                  index % 2 === 0 ? "pr-4" : "border-l pl-4 sm:pl-6"
                }`}
                key={community}
              >
                <span className="font-mono text-[9px] tracking-[.16em] text-[#806c35]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{community}</span>
              </li>
            ))}
          </ul>
          <p className="border-b border-black/20 py-4 text-xs font-bold uppercase leading-5 tracking-[.12em] text-black/48 sm:text-sm">
            Plus surrounding Central Wisconsin communities
          </p>
        </div>
      </div>
    </section>
  );
}
