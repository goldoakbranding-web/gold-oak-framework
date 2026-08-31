import { roofingPage } from "@/config/services/roofingPage";

export default function RoofingIntroTrust() {
  const { intro } = roofingPage;

  return (
    <section
      aria-labelledby="roofing-introduction-title"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-[#0d0d0c] py-14 md:scroll-mt-36 sm:py-20 lg:py-24"
      id="why-cm"
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bd79]/70 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 border-b border-white/12 pb-10 sm:pb-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:pb-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#d8bd79] sm:text-xs">
              {intro.eyebrow}
            </p>
            <h2
              className="mt-4 max-w-xl text-balance text-4xl leading-[.96] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl"
              id="roofing-introduction-title"
            >
              {intro.title}
            </h2>
          </div>

          <div className="lg:pt-7">
            <p className="max-w-2xl text-pretty text-lg leading-8 tracking-[-.02em] text-white/84 sm:text-xl sm:leading-9">
              {intro.description}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/56 sm:text-base sm:leading-8">
              {intro.supporting}
            </p>
          </div>
        </div>

        <div className="grid gap-7 pt-9 sm:pt-12 lg:grid-cols-[0.32fr_1.68fr] lg:gap-14">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[.26em] text-[#d8bd79]">{intro.trust.eyebrow}</p>
            <p className="mt-3 max-w-[15rem] text-sm leading-6 text-white/58">
              {intro.trust.title}
            </p>
          </div>

          <ol className="border-t border-white/14 lg:grid lg:grid-cols-2">
            {intro.trust.items.map((point, index) => (
              <li
                className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-white/14 py-5 lg:min-h-40 lg:grid-cols-[2.5rem_1fr] lg:px-6 lg:py-6 lg:odd:border-r lg:odd:pl-0"
                key={point.id}
              >
                <span className="pt-0.5 font-mono text-[9px] font-semibold tracking-[.16em] text-[#d8bd79]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-.025em] text-white sm:text-xl">{point.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/52">{point.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
