"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import type { ServiceConfig } from "@/config/services";

type ServiceFAQProps = { service: ServiceConfig };

export default function ServiceFAQ({ service }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const identifier = useId();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0b0b0a] py-28 sm:py-36 lg:py-44" id="service-faq">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(216,189,121,.085),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.48em] text-[#d8bd79] sm:text-xs sm:tracking-[.62em]">{service.faq.eyebrow}</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-.05em] text-white sm:mt-7 sm:text-5xl">{service.faq.title}</h2>
          <p className="mt-6 max-w-md text-base leading-7 text-white/58">{service.faq.description}</p>
        </div>
        <div className="divide-y divide-white/10 rounded-[24px] border border-white/10 bg-white/[.025] px-5 shadow-[0_24px_70px_rgba(0,0,0,.18)] backdrop-blur-sm sm:rounded-[28px] sm:px-7">
          {service.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${identifier}-${index}`;
            return (
              <article key={item.question}>
                <h3>
                  <button aria-controls={panelId} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium tracking-[-.02em] text-white transition hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] sm:py-7 sm:text-lg" onClick={() => setOpenIndex(isOpen ? -1 : index)} type="button">
                    {item.question}
                    <span aria-hidden="true" className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/16 text-base text-[#ead7a3] transition duration-300 ${isOpen ? "rotate-45 border-[#d8bd79]/55 bg-[#d8bd79]/[.1]" : ""}`}>+</span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? <motion.div animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} id={panelId} initial={{ height: 0, opacity: 0 }} role="region" transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}><p className="max-w-2xl pb-7 text-sm leading-7 text-white/60 sm:pb-8">{item.answer}</p></motion.div> : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
