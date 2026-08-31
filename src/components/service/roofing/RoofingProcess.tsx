"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ServiceImage } from "@/config/services";
import { roofingPage } from "@/config/services/roofingPage";

function focalPoint(image: ServiceImage) {
  return {
    "--roofing-process-position-mobile": image.mobileObjectPosition,
    "--roofing-process-position-desktop": image.objectPosition,
  } as CSSProperties;
}

export default function RoofingProcess() {
  const { process } = roofingPage;
  const timelineRef = useRef<HTMLOListElement>(null);
  const isInView = useInView(timelineRef, { amount: 0.16, margin: "0px 0px -8%", once: true });
  const shouldReduceMotion = Boolean(useReducedMotion());
  const hasEntered = isInView || shouldReduceMotion;
  const processImage = process.image;

  return (
    <section
      aria-labelledby="roofing-process-title"
      className="scroll-mt-24 overflow-hidden bg-[#10100e] py-14 md:scroll-mt-36 sm:py-20 lg:py-24"
      id="service-process"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className={`grid gap-8 ${processImage ? "lg:grid-cols-[1.08fr_.52fr] lg:items-end lg:gap-16" : "lg:grid-cols-[1fr_.62fr] lg:items-end lg:gap-16"}`}>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#d8bd79] sm:text-xs">
              {process.eyebrow}
            </p>
            <h2
              className="mt-4 max-w-3xl text-balance text-4xl leading-[.96] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl"
              id="roofing-process-title"
            >
              {process.title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base sm:leading-8">{process.description}</p>
          </div>

          {processImage ? (
            <figure
              className="relative aspect-[5/4] overflow-hidden border border-white/10 bg-[#171714] sm:aspect-[16/9] lg:aspect-[4/5]"
              style={focalPoint(processImage)}
            >
              <Image
                alt={processImage.alt}
                className="object-cover [object-position:var(--roofing-process-position-mobile)] lg:[object-position:var(--roofing-process-position-desktop)]"
                fill
                sizes="(max-width: 1023px) calc(100vw - 2.5rem), 34vw"
                src={processImage.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
              {processImage.caption ? (
                <figcaption className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] border-l border-[#d8bd79] bg-black/58 px-3 py-2 text-[9px] font-semibold uppercase leading-4 tracking-[.12em] text-white/76 backdrop-blur-sm">
                  {processImage.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>

        <div className="relative mt-10 sm:mt-14 lg:mt-20">
          <div aria-hidden="true" className="absolute bottom-5 left-[21.5px] top-5 w-px overflow-hidden bg-white/12 lg:hidden">
            <motion.div
              animate={{ scaleY: hasEntered ? 1 : 0 }}
              className="h-full w-full origin-top bg-gradient-to-b from-[#d8bd79] via-[#d8bd79]/75 to-[#d8bd79]/30"
              initial={false}
              transition={{ duration: shouldReduceMotion ? 0 : 1.15, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-[21.5px] hidden h-px overflow-hidden bg-white/12 lg:block">
            <motion.div
              animate={{ scaleX: hasEntered ? 1 : 0 }}
              className="h-full w-full origin-left bg-gradient-to-r from-[#d8bd79] via-[#d8bd79]/75 to-[#d8bd79]/30"
              initial={false}
              transition={{ duration: shouldReduceMotion ? 0 : 1.25, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <motion.ol
            animate={hasEntered ? "visible" : "hidden"}
            className="relative grid gap-0 lg:grid-cols-5 lg:gap-5"
            initial={false}
            ref={timelineRef}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: shouldReduceMotion ? 0 : 0.08,
                  staggerChildren: shouldReduceMotion ? 0 : 0.1,
                },
              },
            }}
          >
            {process.steps.map((step, index) => (
              <motion.li
                className="relative grid grid-cols-[2.75rem_1fr] gap-4 pb-7 last:pb-0 lg:block lg:pb-0"
                key={step.id}
                transition={{ duration: shouldReduceMotion ? 0 : 0.68, ease: [0.16, 1, 0.3, 1] }}
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#d8bd79]/55 bg-[#10100e] font-mono text-[9px] font-bold tracking-[.12em] text-[#ead7a3] shadow-[0_0_0_5px_#10100e] lg:mx-auto">
                  {step.label || String(index + 1).padStart(2, "0")}
                </div>

                <div className={`border-t border-white/12 pt-4 lg:border-t-0 lg:text-center ${index % 2 === 1 ? "lg:mt-12" : "lg:mt-7"}`}>
                  <h3 className="text-lg font-semibold tracking-[-.03em] text-white sm:text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/52 lg:mx-auto lg:max-w-[13rem]">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
