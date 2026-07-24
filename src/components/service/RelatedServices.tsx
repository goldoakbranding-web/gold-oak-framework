import Link from "next/link";
import type { ServiceConfig } from "@/config/services";
import { serviceConfigs, servicesBySlug } from "@/config/services";

type RelatedServicesProps = { service: ServiceConfig };

export default function RelatedServices({ service }: RelatedServicesProps) {
  const currentIndex = serviceConfigs.findIndex((item) => item.slug === service.slug);
  const previous = serviceConfigs[(currentIndex - 1 + serviceConfigs.length) % serviceConfigs.length];
  const next = serviceConfigs[(currentIndex + 1) % serviceConfigs.length];

  return (
    <section className="relative overflow-hidden bg-[#0b0b0a] py-20 sm:py-24" id="related-services">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.48em] text-[#d8bd79] sm:text-xs sm:tracking-[.62em]">Explore the exterior</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.045em] text-white sm:text-4xl">Related services</h2>
          </div>
          <Link className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/55 transition hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]" href="/#services">View all services <span aria-hidden="true">→</span></Link>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {service.relatedServices.map((slug, index) => {
            const related = servicesBySlug[slug];
            return <Link className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[.025] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#d8bd79]/45 hover:bg-white/[.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transform-none" href={`/services/${related.slug}`} key={related.slug}>
              <span className="font-mono text-[10px] tracking-[.16em] text-[#d8bd79]">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-semibold tracking-[-.035em] text-white">{related.name}</h3>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/52">{related.heroDescription}</p>
              <span className="mt-7 inline-block text-[10px] font-bold uppercase tracking-[.16em] text-[#ead7a3] transition duration-300 group-hover:translate-x-1 motion-reduce:transform-none">Explore <span aria-hidden="true">→</span></span>
            </Link>;
          })}
        </div>
        <nav aria-label="Service navigation" className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] font-semibold uppercase tracking-[.16em] sm:flex-row">
          <Link className="text-white/52 transition hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]" href={`/services/${previous.slug}`}><span aria-hidden="true">← </span>Previous: {previous.name}</Link>
          <Link className="text-right text-white/52 transition hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]" href={`/services/${next.slug}`}>Next: {next.name}<span aria-hidden="true"> →</span></Link>
        </nav>
      </div>
    </section>
  );
}
