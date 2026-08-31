"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { roofingService } from "@/config/services/roofing";

export default function RoofingFAQ() {
  const faq = roofingService.faq;
  const identifier = useId();
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faq.items.length === 0) return null;

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown") {
      nextIndex = (index + 1) % faq.items.length;
    } else if (event.key === "ArrowUp") {
      nextIndex = (index - 1 + faq.items.length) % faq.items.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = faq.items.length - 1;
    }

    if (nextIndex === null) return;

    event.preventDefault();
    buttonRefs.current[nextIndex]?.focus();
  }

  return (
    <section
      className="scroll-mt-24 bg-[#f4f2ed] py-14 text-[#171714] sm:py-20 md:scroll-mt-36 lg:py-28"
      id="service-faq"
    >
      <div className="mx-auto grid max-w-7xl gap-9 px-5 sm:px-8 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#806c35] sm:text-xs">
            {faq.eyebrow}
          </p>
          <h2 className="mt-4 max-w-lg text-balance text-4xl leading-[.92] tracking-[-.02em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
            {faq.title}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
            {faq.description}
          </p>
          <p className="mt-7 hidden border-t border-black/12 pt-4 text-[9px] font-bold uppercase tracking-[.22em] text-black/38 lg:block">
            Use arrow keys to move between questions
          </p>
        </div>

        <div className="border-t border-black/15">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${identifier}-roofing-panel-${index}`;
            const buttonId = `${identifier}-roofing-button-${index}`;

            return (
              <article
                className={`border-b border-l-2 border-b-black/15 transition-[background-color,border-color] duration-300 motion-reduce:transition-none ${
                  isOpen
                    ? "border-l-[#9a7b36] bg-white/75"
                    : "border-l-transparent bg-transparent hover:bg-white/40"
                }`}
                key={item.id}
              >
                <h3>
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="group flex min-h-16 w-full items-center gap-4 px-4 py-5 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#806c35] motion-reduce:transition-none sm:min-h-20 sm:gap-6 sm:px-6 sm:py-6"
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    ref={(node) => {
                      buttonRefs.current[index] = node;
                    }}
                    type="button"
                  >
                    <span
                      aria-hidden="true"
                      className={`w-7 shrink-0 text-[9px] font-bold tracking-[.18em] transition-colors duration-300 motion-reduce:transition-none ${
                        isOpen ? "text-[#806c35]" : "text-black/32"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 text-base font-semibold leading-snug tracking-[-.015em] transition-colors duration-300 motion-reduce:transition-none sm:text-lg ${
                        isOpen ? "text-[#6f5a29]" : "text-[#171714] group-hover:text-[#6f5a29]"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,transform] duration-300 motion-reduce:transition-none sm:h-10 sm:w-10 ${
                        isOpen
                          ? "rotate-180 border-[#806c35] bg-[#806c35]"
                          : "border-black/20 bg-transparent group-hover:border-[#806c35]/60"
                      }`}
                    >
                      <span
                        className={`absolute h-px w-3.5 transition-colors duration-300 motion-reduce:transition-none ${
                          isOpen ? "bg-white" : "bg-black/65"
                        }`}
                      />
                      <span
                        className={`absolute h-3.5 w-px transition-[background-color,transform,opacity] duration-300 motion-reduce:transition-none ${
                          isOpen ? "rotate-90 bg-white opacity-0" : "bg-black/65 opacity-100"
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  aria-hidden={!isOpen}
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                  id={panelId}
                  role="region"
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pl-15 pr-5 text-sm leading-7 text-black/62 sm:pb-8 sm:pl-[4.75rem] sm:pr-20 sm:text-[15px] sm:leading-7">
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
