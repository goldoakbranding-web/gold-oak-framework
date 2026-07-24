"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { ServiceConfig } from "@/config/services";
import ServiceIcon from "./ServiceIcon";

type BenefitsGridProps = { service: ServiceConfig };

const layoutClasses = {
  "feature-first": "md:grid-cols-2 lg:grid-cols-12",
  editorial: "md:grid-cols-2 lg:grid-cols-6",
  balanced: "md:grid-cols-2 lg:grid-cols-4",
} as const;

function getCardClass(service: ServiceConfig, index: number) {
  if (service.theme.benefitsLayout === "feature-first") {
    return index === 0 ? "md:col-span-2 lg:col-span-7" : "lg:col-span-5";
  }

  if (service.theme.benefitsLayout === "editorial") {
    return index === 0 || index === 3 ? "lg:col-span-4" : "lg:col-span-2";
  }

  return "";
}

export default function BenefitsGrid({ service }: BenefitsGridProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.18 });
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0b0b0a] py-28 sm:py-36 lg:py-44" id="service-benefits" ref={sectionRef}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_18%,rgba(216,189,121,.09),transparent_32%),linear-gradient(115deg,transparent_0%,rgba(255,255,255,.018)_48%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[.48em] text-[#d8bd79] sm:text-xs sm:tracking-[.62em]">{service.benefits.eyebrow}</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-.05em] text-white sm:mt-7 sm:text-5xl md:text-6xl">{service.benefits.title}</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/58">{service.benefits.description}</p>
        </div>

        <div className={`mt-14 grid gap-4 sm:mt-16 ${layoutClasses[service.theme.benefitsLayout]}`}>
          {service.benefits.items.map((benefit, index) => (
            <motion.article
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduceMotion ? 0 : 24 }}
              className={`group relative overflow-hidden rounded-[24px] border border-white/[.11] bg-white/[.035] p-6 shadow-[0_24px_70px_rgba(0,0,0,.2)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-[#d8bd79]/45 hover:bg-white/[.055] motion-reduce:transform-none sm:rounded-[28px] sm:p-8 ${getCardClass(service, index)}`}
              key={benefit.title}
              transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : index * 0.075, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#d8bd79]/0 blur-3xl transition duration-500 group-hover:bg-[#d8bd79]/[.12]" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d8bd79]/25 bg-[#d8bd79]/[.07] text-[#ead7a3] transition duration-500 group-hover:-translate-y-0.5 group-hover:border-[#d8bd79]/55 motion-reduce:transform-none">
                <ServiceIcon name={benefit.icon} />
              </div>
              <h3 className="relative mt-8 text-xl font-semibold tracking-[-.035em] text-white sm:text-2xl">{benefit.title}</h3>
              <p className="relative mt-4 max-w-xl text-sm leading-6 text-white/62 sm:text-[15px]">{benefit.description}</p>
              <div className="relative mt-8 h-px w-12 bg-gradient-to-r from-[#d8bd79]/75 to-transparent transition-all duration-500 group-hover:w-20" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
