import { soffitFasciaProductContent } from "@/config/services/soffitFasciaProducts";

export default function SoffitFasciaPerformance() {
  const { performance, tensile } = soffitFasciaProductContent;

  return (
    <section className="bg-[#0d0d0c] py-14 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[.76fr_1.24fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">{performance.eyebrow}</p>
            <h2 className="mt-4 max-w-xl text-balance text-4xl leading-[.96] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
              {performance.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8">{performance.description}</p>
          </div>

          <ol className="grid border-l border-t border-white/12 sm:grid-cols-2">
            {performance.details.map((detail, index) => (
              <li className="min-w-0 border-b border-r border-white/12 p-5 sm:p-6" key={detail.title}>
                <span className="font-mono text-[9px] tracking-[.16em] text-[#d8bd79]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-lg font-semibold tracking-[-.025em] sm:text-xl">{detail.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50 sm:leading-7">{detail.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 border-t border-white/14 pt-10 sm:mt-20 sm:pt-14">
          <div className="grid gap-8 lg:grid-cols-[.76fr_1.24fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">{tensile.eyebrow}</p>
              <h2 className="mt-4 max-w-xl text-balance text-4xl leading-[.96] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
                {tensile.title}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/58 sm:text-base sm:leading-8">{tensile.description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {tensile.comparisons.map((comparison, index) => (
                <article className="relative overflow-hidden border border-[#d8bd79]/28 bg-[#141411] p-5 sm:p-7" key={comparison.label}>
                  <span aria-hidden="true" className="absolute right-4 top-3 font-mono text-4xl text-white/[.035]">0{index + 1}</span>
                  <p className="relative text-[9px] font-bold uppercase tracking-[.17em] text-[#d8bd79]">{comparison.label}</p>
                  <p className="relative mt-8 text-sm leading-7 text-white/58">{comparison.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
