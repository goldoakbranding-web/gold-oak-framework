import Image from "next/image";
import { business } from "@/config/business";
import { gentekProfiles, soffitFasciaProductContent } from "@/config/services/soffitFasciaProducts";

const fasciaProfiles = gentekProfiles.filter((profile) => profile.kind === "fascia");

export default function SoffitFasciaProtection() {
  const { fascia, upkeep, warranty } = soffitFasciaProductContent;

  return (
    <section className="bg-[#10100e] py-14 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-9 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">{fascia.eyebrow}</p>
            <h2 className="mt-4 max-w-xl text-balance text-4xl leading-[.96] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
              {fascia.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">{fascia.description}</p>

            <ul className="mt-8 border-t border-white/14">
              {fascia.functions.map((item, index) => (
                <li className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-white/14 py-4 text-sm leading-6 text-white/58" key={item}>
                  <span className="font-mono text-[9px] font-bold tracking-[.14em] text-[#d8bd79]">0{index + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {fasciaProfiles.map((profile) => (
              <figure className="overflow-hidden border border-white/12 bg-[#ece9e0]" key={profile.id}>
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    alt={profile.alt}
                    className="object-contain"
                    fill
                    loading="lazy"
                    sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) 46vw, 28vw"
                    src={profile.image}
                  />
                </div>
                <figcaption className="border-t border-black/10 bg-[#f1efe9] p-4 text-[#171714]">
                  <p className="text-[8px] font-bold uppercase tracking-[.16em] text-[#806c35]">Deluxe fascia</p>
                  <p className="mt-2 text-lg font-semibold tracking-[-.02em]">{profile.name}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-14 grid border-l border-t border-white/14 sm:mt-20 lg:grid-cols-2">
          <article className="border-b border-r border-white/14 p-5 sm:p-8 lg:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[.26em] text-[#d8bd79]">{upkeep.eyebrow}</p>
            <h2 className="mt-4 max-w-lg text-balance text-3xl leading-[.98] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-4xl lg:text-5xl">
              {upkeep.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/56 sm:text-base">{upkeep.description}</p>
          </article>

          <article className="relative overflow-hidden border-b border-r border-white/14 p-5 sm:p-8 lg:p-10">
            <div aria-hidden="true" className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#d8bd79]/[.07] blur-3xl" />
            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[.26em] text-[#d8bd79]">{warranty.eyebrow}</p>
              <h2 className="mt-4 max-w-lg text-balance text-3xl leading-[.98] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-4xl lg:text-5xl">
                {warranty.title}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/62 sm:text-base">{warranty.description}</p>
              <p className="mt-5 max-w-xl border-l border-[#d8bd79]/65 pl-4 text-xs leading-6 text-white/60">{warranty.disclaimer}</p>
              <p className="mt-3 max-w-xl text-xs leading-6 text-white/60">
                CM Roofing&apos;s {business.verifiedFacts.workmanshipWarrantyYears}-year workmanship warranty is separate from Gentek&apos;s manufacturer warranty.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
