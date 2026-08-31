import EstimateForm from "@/components/contact/EstimateForm";
import { business } from "@/config/business";
import { contactConfig } from "@/config/contact";
import type { ServiceConfig } from "@/config/services";

type ServiceEstimateProps = { service: ServiceConfig };

export default function ServiceEstimate({ service }: ServiceEstimateProps) {
  return (
    <section className="scroll-mt-24 bg-[#171714] py-12 sm:py-20 md:scroll-mt-36 lg:py-24" id="service-estimate">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">{service.estimate.eyebrow}</p>
          <h2 className="mt-4 max-w-lg text-balance text-4xl leading-[.98] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">{service.estimate.title}</h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/62 sm:text-base">{service.estimate.description}</p>
          {service.estimate.note ? <p className="mt-5 max-w-lg border-l border-[#d8bd79]/70 pl-4 text-xs leading-6 text-white/45">{service.estimate.note}</p> : null}

          <div className="mt-6 border-t border-white/14 pt-4 text-sm text-white/58">
            <p className="text-[9px] font-bold uppercase tracking-[.18em] text-white/35">Prefer to talk?</p>
            {business.phone.href && business.phone.value ? <a className="mt-2 inline-block text-lg font-semibold text-white transition hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]" href={business.phone.href}>{business.phone.value}</a> : null}
            {business.email.href && business.email.value ? <a className="mt-2 block w-fit text-sm text-white/58 transition hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]" href={business.email.href}>{business.email.value}</a> : null}
          </div>
        </div>

        <EstimateForm compact config={contactConfig} defaultService={service.estimate.defaultService} />
      </div>
    </section>
  );
}
