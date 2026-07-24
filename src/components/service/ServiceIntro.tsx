import Image from "next/image";
import type { ServiceConfig } from "@/config/services";
import type { ServiceVisuals } from "@/lib/service-images";

type ServiceIntroProps = { service: ServiceConfig; visuals: ServiceVisuals };

export default function ServiceIntro({ service, visuals }: ServiceIntroProps) {
  const image = visuals.gallery[0] ?? visuals.ambient;
  const imageOrder = service.theme.introLayout === "image-left" ? "lg:order-1" : "lg:order-2";
  const contentOrder = service.theme.introLayout === "image-left" ? "lg:order-2" : "lg:order-1";

  return (
    <section className="relative overflow-hidden bg-[#090908] py-28 sm:py-36 lg:py-44">
      <div className="pointer-events-none absolute -left-52 top-1/3 h-[540px] w-[540px] rounded-full bg-[#d8bd79]/[.055] blur-[170px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <figure className={`group relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-[#11110f] shadow-[0_30px_85px_rgba(0,0,0,.38)] sm:rounded-[34px] ${imageOrder}`}>
          {image ? <Image alt={image.alt} className="object-cover brightness-[.76] transition-transform duration-[1600ms] group-hover:scale-[1.035] motion-reduce:transform-none" fill sizes="(max-width: 1023px) calc(100vw - 2.5rem), 50vw" src={image.src} /> : <><div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(216,189,121,.15),transparent_42%),linear-gradient(45deg,#12110e,#080807_68%)]" /><div className="absolute inset-6 border border-white/10 [clip-path:polygon(0_18%,75%_0,100%_60%,22%_100%)]" /><div className="absolute bottom-7 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#d8bd79]/70 to-transparent" /></>}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
          <figcaption className="absolute bottom-5 left-6 text-[9px] font-semibold uppercase tracking-[.18em] text-white/66">{image ? "Approved project imagery" : "Project imagery placeholder"}</figcaption>
        </figure>
        <div className={contentOrder}>
          <p className="text-[10px] font-semibold uppercase tracking-[.48em] text-[#d8bd79] sm:text-xs sm:tracking-[.62em]">{service.intro.eyebrow}</p>
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-semibold tracking-[-.05em] text-white sm:mt-7 sm:text-5xl md:text-6xl">{service.intro.title}</h2>
          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-white/66 sm:mt-8 sm:text-lg sm:leading-8">{service.intro.description}</p>
          <p className="mt-6 max-w-lg border-l border-[#d8bd79]/55 pl-5 text-sm leading-6 text-white/52">{service.intro.supporting}</p>
        </div>
      </div>
    </section>
  );
}
