"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import type { ServiceConfig } from "@/config/services";
import ServiceIcon from "./ServiceIcon";

type ServiceProcessProps = { service: ServiceConfig };

const layouts = {
  rail: "lg:grid-cols-4",
  steps: "lg:grid-cols-3",
  path: "lg:grid-cols-4",
} as const;

export default function ServiceProcess({ service }: ServiceProcessProps) {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.17 });
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#080807] py-28 sm:py-36 lg:py-44" id="service-process" ref={sectionRef}>
      <div className="pointer-events-none absolute left-0 top-[31%] h-[1px] w-full bg-gradient-to-r from-transparent via-[#d8bd79]/35 to-transparent" />
      <div className="pointer-events-none absolute -right-48 top-0 h-[640px] w-[640px] rounded-full bg-[#d8bd79]/[.075] blur-[180px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex max-w-3xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.48em] text-[#d8bd79] sm:text-xs sm:tracking-[.62em]">{service.process.eyebrow}</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-.05em] text-white sm:mt-7 sm:text-5xl md:text-6xl">{service.process.title}</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/54">{service.process.description}</p>
        </div>

        <div className={`relative mt-14 grid gap-3 sm:mt-16 sm:grid-cols-2 ${layouts[service.theme.processLayout]}`}>
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[#d8bd79]/45 to-transparent lg:block" />
          {service.process.steps.map((step, index) => {
            const selected = index === activeStep;
            return (
              <motion.button
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduceMotion ? 0 : 18 }}
                aria-pressed={selected}
                className={`group relative z-10 min-h-[250px] rounded-[22px] border p-6 text-left backdrop-blur-sm transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transform-none sm:p-7 ${selected ? "border-[#d8bd79]/55 bg-[#d8bd79]/[.09] shadow-[0_22px_65px_rgba(0,0,0,.28)]" : "border-white/[.1] bg-white/[.025] hover:-translate-y-1 hover:border-white/28 hover:bg-white/[.05]"}`}
                key={step.title}
                onClick={() => setActiveStep(index)}
                transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                type="button"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-[.16em] text-[#d8bd79]">{step.label}</span>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full border transition duration-500 ${selected ? "border-[#d8bd79]/55 bg-[#d8bd79]/[.12] text-[#ead7a3]" : "border-white/12 text-white/55 group-hover:text-[#ead7a3]"}`}><ServiceIcon name={step.icon} /></span>
                </div>
                <h3 className="mt-10 text-xl font-semibold tracking-[-.035em] text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/60">{step.description}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
