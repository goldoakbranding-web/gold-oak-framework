import type { ServiceConfig } from "@/config/services";
import ServiceIcon from "./ServiceIcon";

type ServiceProcessProps = { service: ServiceConfig };

export default function ServiceProcess({ service }: ServiceProcessProps) {
  const layout = service.theme.processLayout;
  const listClass = layout === "steps" ? "lg:grid-cols-2" : "lg:grid-cols-5";

  return (
    <section className="scroll-mt-24 bg-[#11110f] py-12 sm:py-20 md:scroll-mt-36 lg:py-24" id="service-process">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_.62fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">{service.process.eyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl leading-[.98] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">{service.process.title}</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/58 sm:text-base">{service.process.description}</p>
        </div>

        <div className={`relative mt-8 lg:mt-14 ${layout === "path" ? "lg:pb-8" : ""}`}>
          {layout === "rail" ? <div aria-hidden="true" className="absolute left-0 right-0 top-[18px] hidden h-px bg-white/14 lg:block" /> : null}
          <ol className={`border-t border-white/12 lg:grid lg:border-t-0 ${listClass} ${layout === "path" ? "lg:gap-3" : ""}`}>
            {service.process.steps.map((step, index) => {
              const railClass = "lg:block lg:border-b-0 lg:px-3 lg:py-0 first:lg:pl-0 last:lg:pr-0";
              const stepsClass = `lg:grid lg:grid-cols-[2.5rem_1fr] lg:gap-4 lg:border-b lg:border-r lg:border-white/10 lg:p-6 ${index === service.process.steps.length - 1 ? "lg:col-span-2" : ""}`;
              const pathClass = `lg:block lg:border-b-0 lg:border-l lg:border-[#d8bd79]/30 lg:bg-white/[.02] lg:px-5 lg:py-5 ${index % 2 === 1 ? "lg:translate-y-8 motion-reduce:transform-none" : ""}`;
              const desktopClass = layout === "steps" ? stepsClass : layout === "path" ? pathClass : railClass;

              return (
                <li className={`relative grid grid-cols-[2.25rem_1fr] gap-3 border-b border-white/10 py-4 ${desktopClass}`} key={step.id}>
                  <div className={`relative z-10 flex h-9 w-9 items-center justify-center border border-[#d8bd79]/45 bg-[#11110f] text-[#ead7a3] ${layout === "path" ? "rounded-none" : layout === "steps" ? "rounded-lg" : "rounded-full"}`}>
                    <ServiceIcon className="h-4 w-4" icon={step.icon} />
                  </div>
                  <div className={layout === "steps" ? "lg:mt-0" : "lg:mt-6"}>
                    <div className={`flex items-baseline gap-2 ${layout === "steps" ? "" : "lg:block"}`}>
                      <p className="font-mono text-[8px] font-semibold uppercase tracking-[.16em] text-[#d8bd79]">{step.label || `0${index + 1}`}</p>
                      <h3 className={`text-base font-semibold tracking-[-.025em] text-white lg:text-lg ${layout === "steps" ? "" : "lg:mt-2"}`}>{step.title}</h3>
                    </div>
                    <p className="mt-1.5 text-xs leading-5 text-white/54 lg:mt-3 lg:text-sm lg:leading-6">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
