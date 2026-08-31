import type { ServiceConfig } from "@/config/services";

type ServiceTrustProps = { service: ServiceConfig };

export default function ServiceTrust({ service }: ServiceTrustProps) {
  if (!service.trust) return null;

  return (
    <section className="scroll-mt-24 bg-[#e9e5dc] py-12 text-[#171714] sm:py-20 md:scroll-mt-36 lg:py-24" id="why-cm">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#806c35] sm:text-xs">
            {service.trust.eyebrow}
          </p>
          <h2 className="mt-4 max-w-lg text-balance text-4xl leading-[.98] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
            {service.trust.title}
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-black/62 sm:text-base">
            {service.trust.description}
          </p>
        </div>

        <ol className="grid grid-cols-2 border-l border-t border-black/20 sm:block sm:border-l-0">
          {service.trust.items.map((item, index) => (
            <li className="border-b border-r border-black/20 p-4 sm:grid sm:grid-cols-[3rem_.65fr_1.35fr] sm:items-start sm:gap-6 sm:border-r-0 sm:px-0 sm:py-6" key={item.id}>
              <span className="font-mono text-[10px] font-semibold tracking-[.16em] text-[#806c35]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-[-.02em] sm:mt-0 sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-xs leading-5 text-black/58 sm:mt-0 sm:text-sm sm:leading-6">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
