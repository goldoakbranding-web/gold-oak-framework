import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { ServiceConfig, ServiceImage } from "@/config/services";
import { servicesBySlug } from "@/config/services";

type RelatedServicesProps = { service: ServiceConfig };

function focalPoint(image: ServiceImage) {
  return {
    "--image-position-mobile": image.mobileObjectPosition,
    "--image-position-desktop": image.objectPosition,
  } as CSSProperties;
}

export default function RelatedServices({ service }: RelatedServicesProps) {
  return (
    <section className="scroll-mt-24 bg-[#0d0d0c] py-9 sm:py-18 md:scroll-mt-36 lg:py-20" id="related-services">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79]">Plan the exterior</p>
            <h2 className="mt-3 text-3xl leading-none tracking-[-.02em] text-white [font-family:var(--font-bebas)] sm:text-4xl">Related services</h2>
          </div>
          <Link className="hidden text-[9px] font-bold uppercase tracking-[.17em] text-white/52 transition hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] sm:inline" href="/#services">View all services <span aria-hidden="true">→</span></Link>
        </div>

        <div className="-mx-5 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:mt-8 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
          {service.relatedServices.map((slug) => {
            const related = servicesBySlug[slug];
            const image = related.hero.image;
            return (
              <Link
                className="group relative min-h-52 min-w-[82%] snap-start overflow-hidden bg-[#191916] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] sm:min-h-64 sm:min-w-0"
                href={`/services/${related.slug}`}
                key={related.slug}
                style={focalPoint(image)}
              >
                <Image alt={image.alt} className="object-cover brightness-[.72] transition duration-700 group-hover:scale-[1.025] group-hover:brightness-[.86] motion-reduce:transform-none [object-position:var(--image-position-mobile)] lg:[object-position:var(--image-position-desktop)]" fill sizes="(max-width: 639px) 82vw, 33vw" src={image.src} />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
                <span className="absolute inset-x-5 bottom-5">
                  <span className="block text-[9px] font-bold uppercase tracking-[.16em] text-[#ead7a3]">{image.caption ? "Context image" : "Exterior service"}</span>
                  <span className="mt-2 flex items-end justify-between gap-4 text-xl font-semibold tracking-[-.025em] text-white">
                    {related.name}
                    <span aria-hidden="true" className="transition group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                  </span>
                  {image.caption ? <span className="mt-2 block max-w-sm text-[8px] leading-4 tracking-[.02em] text-white/62 sm:text-[9px]">{image.caption}</span> : null}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
