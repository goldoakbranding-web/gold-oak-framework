const rooflineParts = [
  {
    number: "01",
    name: "Soffit",
    description:
      "Soffit closes the underside of the eave. Where the roof design calls for intake ventilation, a vented profile can also provide an entry path for outside air.",
  },
  {
    number: "02",
    name: "Fascia",
    description:
      "Fascia finishes the visible face of the roof edge, helps cover compatible underlying wood, and creates a clean line beside the gutter system.",
  },
  {
    number: "03",
    name: "The complete edge",
    description:
      "Planning both components together helps coordinate ventilation, roof-edge protection, gutters, siding, trim, and the finished exterior appearance.",
  },
] as const;

export default function SoffitFasciaOverview() {
  return (
    <section className="border-y border-white/8 bg-[#151512] py-12 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-7 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">
              Why these parts matter
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-4xl leading-[.96] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
              Protection, Airflow, and a Finished Roofline.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-pretty text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
              Soffit and fascia occupy different parts of the eave, but they work beside the same roofing, gutter, siding, and ventilation details. Reviewing the entire edge helps define a cleaner project scope.
            </p>
            <a
              className="mt-6 inline-flex min-h-12 items-center justify-center border border-[#d8bd79]/55 px-5 text-[9px] font-bold uppercase tracking-[.16em] text-[#ead7a3] transition-colors hover:border-[#ead7a3] hover:bg-[#d8bd79]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] sm:text-[10px]"
              href="#gentek-profile-selector"
            >
              Explore Gentek Profiles
            </a>
          </div>
        </div>

        <ol className="mt-10 grid border-l border-t border-white/14 sm:grid-cols-3 lg:mt-14">
          {rooflineParts.map((part) => (
            <li className="min-w-0 border-b border-r border-white/14 p-5 sm:p-6 lg:p-8" key={part.number}>
              <span className="font-mono text-[9px] font-semibold tracking-[.16em] text-[#d8bd79]">{part.number}</span>
              <h3 className="mt-8 text-xl font-semibold tracking-[-.025em] sm:text-2xl">{part.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/52 sm:leading-7">{part.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
