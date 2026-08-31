"use client";

import { useId, useState } from "react";
import type { ServiceConfig } from "@/config/services";

type ServiceFAQProps = { service: ServiceConfig };

export default function ServiceFAQ({ service }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const identifier = useId();

  if (service.faq.items.length === 0) return null;

  return (
    <section className="scroll-mt-24 bg-[#f1efe9] py-12 text-[#171714] sm:py-20 md:scroll-mt-36 lg:py-24" id="service-faq">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#806c35] sm:text-xs">
            {service.faq.eyebrow}
          </p>
          <h2 className="mt-4 max-w-md text-balance text-4xl leading-[.98] tracking-[-.035em] sm:text-5xl">
            {service.faq.title}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-black/62 sm:text-base">
            {service.faq.description}
          </p>
        </div>

        <div className="border-t border-black/15">
          {service.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${identifier}-panel-${index}`;
            const buttonId = `${identifier}-button-${index}`;

            return (
              <article className="border-b border-black/15" key={item.question}>
                <h3>
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold tracking-[-.015em] transition hover:text-[#806c35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#806c35] sm:min-h-20 sm:py-6 sm:text-lg"
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/20 text-lg font-normal transition duration-300 ${isOpen ? "rotate-45 border-[#806c35] bg-[#806c35] text-white" : ""}`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  aria-hidden={!isOpen}
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  id={panelId}
                  role="region"
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-12 text-sm leading-7 text-black/62 sm:pb-7 sm:text-[15px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
