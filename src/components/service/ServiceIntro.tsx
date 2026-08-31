import Image from "next/image";
import type { CSSProperties } from "react";
import type { ServiceConfig, ServiceImage } from "@/config/services";

type ServiceIntroProps = { service: ServiceConfig };

function focalPoint(image: ServiceImage) {
  return {
    "--image-position-mobile": image.mobileObjectPosition,
    "--image-position-desktop": image.objectPosition,
  } as CSSProperties;
}

export default function ServiceIntro({ service }: ServiceIntroProps) {
  const intro = service.intro;
  if (!intro) return null;

  const hasImage = Boolean(intro.image);
  const imageFirst = service.theme.introLayout === "image-left";

  return (
    <section className="bg-[#0d0d0c] py-12 sm:py-20 lg:py-24">
      <div className={`mx-auto max-w-7xl px-5 sm:px-8 ${hasImage ? "grid items-center gap-8 lg:grid-cols-2 lg:gap-20" : ""}`}>
        {intro.image ? (
          <figure
            className={`relative min-h-64 overflow-hidden bg-[#171714] sm:min-h-[430px] lg:min-h-[600px] ${imageFirst ? "lg:order-1" : "order-2 lg:order-2"}`}
            style={focalPoint(intro.image)}
          >
            <Image
              alt={intro.image.alt}
              className="object-cover [object-position:var(--image-position-mobile)] lg:[object-position:var(--image-position-desktop)]"
              fill
              sizes="(max-width: 1023px) calc(100vw - 2.5rem), 50vw"
              src={intro.image.src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            {intro.image.caption ? (
              <figcaption className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] border-l border-[#d8bd79] bg-black/55 px-3 py-2 text-[9px] font-semibold uppercase tracking-[.14em] text-white/80 backdrop-blur-sm sm:bottom-6 sm:left-6">
                {intro.image.caption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}

        <div className={`${hasImage ? (imageFirst ? "lg:order-2" : "order-1 lg:order-1") : "max-w-4xl"}`}>
          <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">{intro.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl leading-[.98] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
            {intro.title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/66 sm:text-lg sm:leading-8">{intro.description}</p>
          {intro.supporting ? (
            <p className="mt-6 max-w-xl border-l border-[#d8bd79]/70 pl-5 text-sm leading-6 text-white/48">{intro.supporting}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
