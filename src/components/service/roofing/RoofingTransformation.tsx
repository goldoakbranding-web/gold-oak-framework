import Image from "next/image";
import type { CSSProperties } from "react";
import { roofingPage } from "@/config/services/roofingPage";

type FocalImage = {
  objectPosition: string;
  mobileObjectPosition: string;
};

const stageLayouts = [
  "lg:col-span-7",
  "lg:col-span-5 lg:mt-24",
  "lg:col-span-5 lg:col-start-2",
  "lg:col-span-7 lg:mt-24",
] as const;

const imageLayouts = [
  "aspect-[4/5] sm:aspect-[3/2] lg:aspect-[7/5]",
  "aspect-[16/10] lg:aspect-[5/4]",
  "aspect-[4/5] sm:aspect-[3/2] lg:aspect-[5/6]",
  "aspect-[16/10] sm:aspect-[16/9] lg:aspect-[7/5]",
] as const;

function focalPoint(image: FocalImage) {
  return {
    "--roofing-stage-position-mobile": image.mobileObjectPosition,
    "--roofing-stage-position-desktop": image.objectPosition,
  } as CSSProperties;
}

export default function RoofingTransformation() {
  const transformation = roofingPage.transformation;

  return (
    <section
      className="scroll-mt-24 bg-[#efede7] py-14 text-[#171714] sm:py-20 md:scroll-mt-36 lg:py-28"
      id="roofing-transformation"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-7 border-t border-black/15 pt-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:pt-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#806c35] sm:text-xs">
              {transformation.eyebrow}
            </p>
            <p className="mt-5 hidden text-[10px] font-bold uppercase tracking-[.22em] text-black/35 lg:block">
              Multiple real projects
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-balance text-4xl leading-[.92] tracking-[-.02em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-7xl">
              {transformation.title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-black/62 sm:text-base sm:leading-8">
              {transformation.description}
            </p>
            <p className="mt-6 max-w-2xl border-l-2 border-[#a88a45] pl-4 text-xs leading-6 text-black/55 sm:text-sm">
              {transformation.note}
            </p>
          </div>
        </div>

        <ol className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-12 lg:gap-6">
          {transformation.stages.map((stage, index) => {
            const isEndpoint = index === transformation.stages.length - 1;
            const layout = stageLayouts[index] ?? "lg:col-span-6";
            const imageLayout = imageLayouts[index] ?? "aspect-[4/3]";

            return (
              <li className={layout} key={stage.id}>
                <article
                  className={`group h-full overflow-hidden border shadow-[0_18px_55px_rgba(23,23,20,.08)] ${
                    isEndpoint
                      ? "border-white/10 bg-[#11110f] text-white"
                      : "border-black/10 bg-[#f8f7f3]"
                  }`}
                >
                  <figure>
                    <div
                      className={`relative overflow-hidden bg-[#d8d4ca] ${imageLayout}`}
                      style={focalPoint(stage.image)}
                    >
                      <Image
                        alt={stage.image.alt}
                        className="object-cover [object-position:var(--roofing-stage-position-mobile)] transition-transform duration-700 ease-out motion-reduce:transition-none sm:group-hover:scale-[1.015] lg:[object-position:var(--roofing-stage-position-desktop)]"
                        fill
                        loading="lazy"
                        sizes={
                          index === 0 || index === 3
                            ? "(max-width: 1023px) 100vw, 58vw"
                            : "(max-width: 1023px) 100vw, 42vw"
                        }
                        src={stage.image.src}
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent"
                      />
                      <p className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[.24em] text-white/90 sm:bottom-5 sm:left-5">
                        Project stage example
                      </p>
                    </div>

                    <figcaption className="grid gap-4 p-5 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-7">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border text-[10px] font-bold tracking-[.12em] ${
                          isEndpoint
                            ? "border-[#d8bd79]/60 text-[#ead7a3]"
                            : "border-[#806c35]/45 text-[#806c35]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <p
                          className={`text-[9px] font-bold uppercase tracking-[.25em] sm:text-[10px] ${
                            isEndpoint ? "text-[#d8bd79]" : "text-[#806c35]"
                          }`}
                        >
                          {stage.label}
                        </p>
                        <h3 className="mt-2 text-balance text-2xl leading-none tracking-[-.01em] [font-family:var(--font-bebas)] sm:text-3xl">
                          {stage.title}
                        </h3>
                        <p
                          className={`mt-3 text-sm leading-6 ${
                            isEndpoint ? "text-white/62" : "text-black/58"
                          }`}
                        >
                          {stage.description}
                        </p>
                        {stage.image.caption ? (
                          <p
                            className={`mt-4 border-t pt-3 text-[9px] leading-4 tracking-[.04em] ${
                              isEndpoint
                                ? "border-white/12 text-white/42"
                                : "border-black/10 text-black/40"
                            }`}
                          >
                            {stage.image.caption}
                          </p>
                        ) : null}
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
