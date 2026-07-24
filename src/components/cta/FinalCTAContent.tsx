"use client";

import type { MouseEvent } from "react";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { BusinessConfig } from "@/config/business";
import type { ResolvedHomepageBackground } from "@/config/backgrounds";
import type { FinalCtaConfig } from "@/config/finalCTA";
import BackgroundImageLayer from "@/components/ui/BackgroundImageLayer";
import FinalCTATrustItems from "./FinalCTATrustItems";

type FinalCTAContentProps = {
  background: ResolvedHomepageBackground;
  business: BusinessConfig;
  config: FinalCtaConfig;
};

export default function FinalCTAContent({ background, business, config }: FinalCTAContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const inView = useInView(contentRef, { amount: 0.28, margin: "0px 0px -8%", once: true });
  const shouldReduceMotion = useReducedMotion();
  const revealed = inView || shouldReduceMotion;
  const callHref = business.phone.href;

  function scrollToContact(event: MouseEvent<HTMLAnchorElement>) {
    const contact = document.querySelector(config.primaryCta.href);
    if (!contact) return;

    event.preventDefault();
    contact.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
  }

  return (
    <div className="relative isolate overflow-hidden border-y border-white/10 bg-[#090908]" ref={contentRef}>
      {background.image ? (
        <BackgroundImageLayer background={background} />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(216,189,121,.22),transparent_31%),linear-gradient(120deg,#080807_0%,#18150e_54%,#080807_100%)]" />
      )}
      <div className="absolute inset-0 bg-[#070706]/56" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,6,.95)_0%,rgba(7,7,6,.68)_48%,rgba(7,7,6,.78)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_38%_45%,rgba(216,189,121,.14),transparent_30%),radial-gradient(ellipse_at_82%_14%,rgba(255,255,255,.07),transparent_26%)]" />
      <div className="pointer-events-none absolute -inset-x-1/3 inset-y-0 bg-[linear-gradient(117deg,transparent_26%,rgba(255,255,255,.05)_48%,transparent_69%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[.18] [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-[#d8bd79]/[.16] blur-[150px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ead7a3]/75 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#080807]/45 to-[#080807] sm:h-52" />
      <div className="pointer-events-none absolute inset-x-[10%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#ead7a3]/38 to-transparent" />
      <div aria-hidden="true" className="atmosphere-grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36 lg:py-44">
        <motion.div
          animate={revealed ? "visible" : "hidden"}
          className="max-w-4xl"
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: shouldReduceMotion ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[.48em] text-[#ead7a3] sm:text-xs sm:tracking-[.62em]">{config.eyebrow}</p>
          <h2 className="mt-5 max-w-4xl text-balance text-5xl font-semibold tracking-[-.06em] text-white sm:mt-7 sm:text-6xl md:text-7xl lg:text-8xl">
            {config.headline}
          </h2>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-white/75 sm:mt-8 sm:text-lg sm:leading-8">{config.description}</p>

          <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center">
            <motion.a
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#d8bd79] px-7 text-center text-[11px] font-bold uppercase tracking-[.16em] text-[#16130b] shadow-[0_14px_36px_rgba(216,189,121,.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]"
              href={config.primaryCta.href}
              onClick={scrollToContact}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.015 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            >
              {config.primaryCta.label}
            </motion.a>
            {callHref ? (
              <motion.a
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/28 bg-black/20 px-7 text-center text-[11px] font-bold uppercase tracking-[.16em] text-white backdrop-blur-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                href={callHref}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                whileHover={shouldReduceMotion ? undefined : { y: -3, borderColor: "rgba(234,215,163,.82)" }}
              >
                {config.secondaryCta.label}
              </motion.a>
            ) : (
              <button
                aria-disabled="true"
                className="inline-flex min-h-14 cursor-not-allowed items-center justify-center rounded-full border border-white/18 bg-black/15 px-7 text-center text-[11px] font-bold uppercase tracking-[.16em] text-white/52"
                title={config.secondaryCta.unavailableLabel}
                type="button"
              >
                {config.secondaryCta.label}
              </button>
            )}
          </div>

          <FinalCTATrustItems items={config.trustItems} />
          <p className="mt-5 text-[9px] leading-5 tracking-[.06em] text-white/48">{config.verificationNote}</p>
        </motion.div>
      </div>
    </div>
  );
}
