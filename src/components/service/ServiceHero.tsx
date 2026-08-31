import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { business } from "@/config/business";
import type { ServiceConfig, ServiceImage } from "@/config/services";

type ServiceHeroProps = { service: ServiceConfig };

function focalPoint(image: ServiceImage) {
  return {
    "--image-position-mobile": image.mobileObjectPosition,
    "--image-position-desktop": image.objectPosition,
  } as CSSProperties;
}

function HeroCopy({ service, immersive = false }: { service: ServiceConfig; immersive?: boolean }) {
  return (
    <div className={immersive ? "max-w-4xl" : "max-w-2xl"}>
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[9px] font-bold uppercase tracking-[.18em] text-white/58 sm:text-[10px]">
        <Link className="transition hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]" href="/">Home</Link>
        <span aria-hidden="true" className="text-[#d8bd79]">/</span>
        <Link className="transition hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]" href="/#services">Services</Link>
        <span aria-hidden="true" className="text-[#d8bd79]">/</span>
        <span aria-current="page" className="text-white/82">{service.name}</span>
      </nav>

      <p className="mt-5 text-[10px] font-bold uppercase tracking-[.3em] text-[#ead7a3] sm:mt-6 sm:text-xs">{service.hero.eyebrow}</p>
      <h1 className={`mt-3 text-balance leading-[.88] tracking-[-.02em] text-white [font-family:var(--font-bebas)] sm:mt-4 ${immersive ? "text-[3.25rem] sm:text-7xl lg:text-8xl" : "text-[2.75rem] sm:text-6xl lg:text-7xl"}`}>
        {service.hero.title}
      </h1>
      <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">{service.hero.description}</p>

      <div className="mt-5 grid gap-3 sm:mt-7 sm:flex sm:flex-wrap">
        <Link className="inline-flex min-h-13 items-center justify-center bg-[#d8bd79] px-6 text-[10px] font-bold uppercase tracking-[.16em] text-[#17130a] transition hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] sm:min-h-14 sm:px-8" href="#service-estimate">
          Request a Free Estimate
        </Link>
        {business.phone.href ? (
          <a className="inline-flex min-h-13 items-center justify-center border border-white/30 bg-black/25 px-6 text-[10px] font-bold uppercase tracking-[.16em] text-white backdrop-blur-sm transition hover:border-white/65 hover:bg-black/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-14 sm:px-8" href={business.phone.href}>
            Call {business.phone.value}
          </a>
        ) : null}
      </div>

      {service.hero.indicators.length > 0 ? (
        <ul className={`${service.slug === "roofing" ? "hidden md:grid" : "grid"} mt-5 grid-cols-3 border-y border-white/16 sm:mt-9 sm:max-w-3xl`}>
          {service.hero.indicators.map((indicator, index) => (
            <li className="border-r border-white/16 px-2 py-3 text-[9px] font-bold uppercase leading-4 tracking-[.1em] text-white/68 first:pl-0 last:border-r-0 sm:px-4 sm:tracking-[.12em]" key={indicator}>
              <span className="mr-1.5 text-[#d8bd79]">0{index + 1}</span>{indicator}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const image = service.hero.image;

  if (service.theme.heroLayout === "immersive") {
    return (
      <section className="relative isolate flex min-h-[680px] items-end overflow-hidden bg-[#090908] pb-10 pt-28 sm:min-h-[760px] sm:pb-16 sm:pt-32 lg:min-h-[820px] lg:pb-20" id="service-top" style={focalPoint(image)}>
        <Image
          alt={image.alt}
          className="object-cover [object-position:var(--image-position-mobile)] lg:[object-position:var(--image-position-desktop)]"
          fill
          preload
          sizes="100vw"
          src={image.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,4,.25)_0%,rgba(5,5,4,.38)_28%,rgba(5,5,4,.92)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,5,4,.92)_0%,rgba(5,5,4,.7)_46%,rgba(5,5,4,.2)_82%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
          <HeroCopy immersive service={service} />
        </div>
      </section>
    );
  }

  const imageFirst = service.theme.heroLayout === "editorial-right";
  const contentAlignment = service.theme.heroAlignment === "end" ? "lg:ml-auto" : service.theme.heroAlignment === "center" ? "lg:mx-auto lg:text-center" : "";

  return (
    <section className="overflow-hidden bg-[#090908] pt-20 sm:pt-28 lg:pt-0" id="service-top">
      <div className="mx-auto grid max-w-[1600px] lg:min-h-[760px] lg:grid-cols-2">
        <div className={`relative order-2 min-h-[200px] bg-[#171714] sm:min-h-[340px] lg:min-h-full ${imageFirst ? "lg:order-1" : "lg:order-2"}`} style={focalPoint(image)}>
          <div className={`absolute ${image.presentation === "detail" ? "inset-0 lg:inset-x-12 lg:inset-y-20 lg:ring-1 lg:ring-white/10 xl:inset-x-24 xl:inset-y-28" : "inset-0"}`}>
            <Image
              alt={image.alt}
              className="object-cover [object-position:var(--image-position-mobile)] lg:[object-position:var(--image-position-desktop)]"
              fill
              preload
              sizes={image.presentation === "detail" ? "(max-width: 1023px) 100vw, 38vw" : "(max-width: 1023px) 100vw, 50vw"}
              src={image.src}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-black/15 lg:to-transparent" />
          {image.caption ? <p className="absolute bottom-3 left-3 right-3 max-w-xl border-l border-[#d8bd79] bg-black/65 px-3 py-2 text-[8px] font-semibold leading-4 tracking-[.08em] text-white/78 backdrop-blur-sm sm:bottom-5 sm:left-5 sm:right-auto sm:text-[9px]">{image.caption}</p> : null}
        </div>
        <div className={`order-1 flex items-center px-5 pb-8 pt-6 sm:px-8 sm:pb-14 sm:pt-10 lg:px-14 lg:py-32 xl:px-20 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
          <div className={`w-full ${contentAlignment}`}>
            <HeroCopy service={service} />
          </div>
        </div>
      </div>
    </section>
  );
}
