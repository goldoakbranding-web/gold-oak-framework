import Image from "next/image";
import type { CSSProperties } from "react";
import type { ServiceImage } from "@/config/services";
import { roofingPage } from "@/config/services/roofingPage";

function focalPoint(image: ServiceImage) {
  return {
    "--roofing-type-position-mobile": image.mobileObjectPosition,
    "--roofing-type-position-desktop": image.objectPosition,
  } as CSSProperties;
}

function imageContext(id: string, image: ServiceImage) {
  if (image.caption) return image.caption;
  if (id.toLowerCase().includes("repair")) return "Existing roof condition shown for assessment context";
  return "Residential roof installation in progress";
}

export default function RoofingServiceTypes() {
  const { serviceTypes } = roofingPage;

  return (
    <section
      aria-labelledby="roofing-service-types-title"
      className="scroll-mt-24 overflow-hidden border-t border-black/10 bg-[#f4f1ea] py-14 text-[#171714] md:scroll-mt-36 sm:py-20 lg:py-24"
      id="roofing-service-types"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#806c35] sm:text-xs">
              {serviceTypes.eyebrow}
            </p>
            <h2
              className="mt-4 max-w-2xl text-balance text-4xl leading-[.96] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl"
              id="roofing-service-types-title"
            >
              {serviceTypes.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-black/62 sm:text-base sm:leading-8">{serviceTypes.description}</p>
        </div>

        <ul className="mt-8 grid grid-cols-2 border-l border-t border-black/20 sm:grid-cols-3 lg:mt-12">
          {serviceTypes.offerings.map((offering, index) => (
            <li
              className={`flex min-h-16 items-center border-b border-r border-black/20 px-3 py-3 text-[10px] font-bold uppercase leading-4 tracking-[.1em] text-black/66 sm:min-h-20 sm:px-4 sm:text-xs ${index === serviceTypes.offerings.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
              key={offering.id}
            >
              {offering.label}
            </li>
          ))}
        </ul>

        <ol className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-12 lg:gap-6 [&::-webkit-scrollbar]:hidden">
          {serviceTypes.items.map((item, index) => {
            const itemClass = index % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5 lg:mt-16";
            const figureClass = index % 2 === 0 ? "lg:aspect-[5/4]" : "lg:aspect-[4/5]";

            return (
              <li className={`group min-w-[84vw] max-w-[25rem] snap-center sm:min-w-0 sm:max-w-none ${itemClass}`} key={item.id}>
                {item.image ? (
                  <figure
                    className={`relative aspect-[4/5] overflow-hidden bg-[#181815] sm:aspect-[4/3] ${figureClass}`}
                    style={focalPoint(item.image)}
                  >
                    <Image
                      alt={item.image.alt}
                      className="object-cover [object-position:var(--roofing-type-position-mobile)] transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none lg:[object-position:var(--roofing-type-position-desktop)]"
                      fill
                      sizes={index % 2 === 0
                        ? "(max-width: 639px) 84vw, (max-width: 1023px) 50vw, 58vw"
                        : "(max-width: 639px) 84vw, (max-width: 1023px) 50vw, 40vw"}
                      src={item.image.src}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-black/5" />
                    <figcaption className="absolute bottom-4 left-4 right-4 border-l border-[#d8bd79] bg-black/58 px-3 py-2 text-[9px] font-semibold uppercase leading-4 tracking-[.12em] text-white/76 backdrop-blur-sm sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm">
                      {imageContext(item.id, item.image)}
                    </figcaption>
                  </figure>
                ) : null}

                <div className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-black/20 py-5 sm:grid-cols-[3rem_1fr] sm:py-7">
                  <span className="font-mono text-[9px] font-semibold tracking-[.16em] text-[#806c35]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-.035em] sm:text-3xl">{item.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-black/62 sm:leading-7">{item.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
