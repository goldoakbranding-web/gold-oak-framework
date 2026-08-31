import Image from "next/image";
import type { CSSProperties } from "react";
import type { ServiceConfig, ServiceImage } from "@/config/services";
import BeforeAfterShowcase from "./BeforeAfterShowcase";

type ServiceProjectStoryProps = { service: ServiceConfig };

function focalPoint(image: ServiceImage) {
  return {
    "--image-position-mobile": image.mobileObjectPosition,
    "--image-position-desktop": image.objectPosition,
  } as CSSProperties;
}

export default function ServiceProjectStory({ service }: ServiceProjectStoryProps) {
  const evidence = service.projectEvidence;
  if (!evidence) return null;

  if (evidence.kind === "comparison") {
    return <BeforeAfterShowcase evidence={evidence} />;
  }

  if (evidence.kind === "feature") {
    return (
      <section className="scroll-mt-24 bg-[#11110f] py-12 sm:py-20 md:scroll-mt-36 lg:py-24" id="service-project">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">{evidence.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl leading-[.98] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">{evidence.title}</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/62 sm:text-base">{evidence.description}</p>
          </div>
          <figure className="relative min-h-[340px] overflow-hidden bg-[#1a1a17] sm:min-h-[480px]" style={focalPoint(evidence.image)}>
            <Image alt={evidence.image.alt} className="object-cover [object-position:var(--image-position-mobile)] lg:[object-position:var(--image-position-desktop)]" fill sizes="(max-width: 1023px) calc(100vw - 2.5rem), 62vw" src={evidence.image.src} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {evidence.caption || evidence.image.caption ? <figcaption className="absolute bottom-5 left-5 right-5 text-xs leading-5 text-white/72 sm:bottom-7 sm:left-7">{evidence.caption ?? evidence.image.caption}</figcaption> : null}
          </figure>
        </div>
      </section>
    );
  }

  const stageCount = evidence.stages.length;

  return (
    <section className="scroll-mt-24 bg-[#11110f] py-12 sm:py-20 md:scroll-mt-36 lg:py-24" id="service-project">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_.7fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">{evidence.eyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl leading-[.98] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">{evidence.title}</h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-white/62 sm:text-base">{evidence.description}</p>
            {evidence.note ? <p className="mt-3 text-xs leading-5 text-white/40">{evidence.note}</p> : null}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-14 lg:grid-cols-12">
          {evidence.stages.map((stage, index) => {
            const largeFirst = stageCount > 2 && index === 0;
            const desktopSpan = stageCount === 2 ? "lg:col-span-6" : largeFirst ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-4";
            return (
              <article className={`${largeFirst ? "col-span-2" : "col-span-1"} ${desktopSpan}`} key={stage.id}>
                <figure className={`relative overflow-hidden bg-[#1a1a17] ${largeFirst ? "aspect-[16/10]" : "aspect-[4/5] sm:aspect-square lg:aspect-[4/3]"}`} style={focalPoint(stage.image)}>
                  <Image alt={stage.image.alt} className="object-cover transition-transform duration-700 hover:scale-[1.02] motion-reduce:transform-none [object-position:var(--image-position-mobile)] lg:[object-position:var(--image-position-desktop)]" fill sizes={largeFirst ? "(max-width: 1023px) calc(100vw - 2.5rem), 58vw" : "(max-width: 1023px) calc(50vw - 1.75rem), 34vw"} src={stage.image.src} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-black/60 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[.14em] text-[#ead7a3] backdrop-blur-sm sm:bottom-4 sm:left-4">{stage.label}</span>
                </figure>
                <h3 className="mt-4 text-base font-semibold tracking-[-.02em] text-white sm:text-lg">{stage.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/50 sm:text-sm sm:leading-6">{stage.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
