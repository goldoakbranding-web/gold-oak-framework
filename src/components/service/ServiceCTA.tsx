import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { business } from "@/config/business";
import type { ServiceConfig, ServiceImage } from "@/config/services";

type ServiceCTAProps = { service: ServiceConfig };

function focalPoint(image: ServiceImage) {
  return {
    "--image-position-mobile": image.mobileObjectPosition,
    "--image-position-desktop": image.objectPosition,
  } as CSSProperties;
}

export default function ServiceCTA({ service }: ServiceCTAProps) {
  const image = service.cta.image;
  const detailImage = image.presentation === "detail";

  return (
    <section className="relative isolate flex min-h-[460px] scroll-mt-24 items-end overflow-hidden bg-[#080807] py-12 sm:min-h-[560px] sm:py-20 md:scroll-mt-36 lg:min-h-[620px]" id="service-contact" style={focalPoint(image)}>
      <div className={detailImage ? "absolute inset-y-0 right-0 w-full lg:right-[6%] lg:w-[38%]" : "absolute inset-0"}>
        <Image alt={image.alt} className="object-cover [object-position:var(--image-position-mobile)] lg:[object-position:var(--image-position-desktop)]" fill sizes={detailImage ? "(max-width: 1023px) 100vw, 38vw" : "100vw"} src={image.src} />
      </div>
      <div className={`absolute inset-0 ${detailImage ? "bg-[linear-gradient(180deg,rgba(5,5,4,.15)_0%,rgba(5,5,4,.42)_28%,rgba(5,5,4,.96)_100%)] lg:bg-[linear-gradient(90deg,#080807_0%,rgba(8,8,7,.96)_48%,rgba(8,8,7,.2)_100%)]" : "bg-[linear-gradient(180deg,rgba(5,5,4,.18)_0%,rgba(5,5,4,.35)_28%,rgba(5,5,4,.94)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,5,4,.92)_0%,rgba(5,5,4,.64)_55%,rgba(5,5,4,.24)_100%)]"}`} />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className={`max-w-3xl ${detailImage ? "lg:max-w-[54%]" : ""}`}>
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#ead7a3] sm:text-xs">{service.cta.eyebrow}</p>
          <h2 className="mt-4 text-balance text-5xl leading-[.9] tracking-[-.02em] text-white [font-family:var(--font-bebas)] sm:text-6xl lg:text-7xl">{service.cta.title}</h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-lg sm:leading-8">{service.cta.description}</p>
          {image.caption ? <p className="mt-3 max-w-xl border-l border-[#d8bd79] pl-3 text-[9px] leading-4 tracking-[.04em] text-white/52">{image.caption}</p> : null}
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <Link className="inline-flex min-h-13 items-center justify-center bg-[#d8bd79] px-7 text-[10px] font-bold uppercase tracking-[.16em] text-[#17130a] transition hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] sm:min-h-14" href="#service-estimate">Start Your Estimate</Link>
            {business.phone.href ? <a className="inline-flex min-h-13 items-center justify-center border border-white/32 bg-black/30 px-7 text-[10px] font-bold uppercase tracking-[.16em] text-white backdrop-blur-sm transition hover:border-white/65 hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-14" href={business.phone.href}>Call {business.phone.value}</a> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
