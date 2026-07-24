"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ProcessIcon, ProcessStep } from "@/config/process";

type ProcessCardProps = {
  step: ProcessStep;
};

function ProcessIconGraphic({ icon }: { icon: ProcessIcon }) {
  const className = "h-6 w-6 fill-none stroke-current stroke-[1.45]";

  switch (icon) {
    case "inspection":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="M3.5 17.5 12 9l8.5 8.5" />
          <path d="M6.5 14.5v5.25h11v-5.25" />
          <circle cx="14.4" cy="12.4" r="2.5" />
          <path d="m16.25 14.25 2.2 2.2" />
        </svg>
      );
    case "estimate":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="M6 3.5h9l3 3v14H6v-17Z" />
          <path d="M15 3.5v3h3" />
          <path d="M9 11h6" />
          <path d="M9 14.5h6" />
          <path d="M9 18h3.5" />
        </svg>
      );
    case "materials":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="m4 7.4 8-4.1 8 4.1L12 11.5 4 7.4Z" />
          <path d="m4 12.1 8 4.1 8-4.1" />
          <path d="m4 16.8 8 4.1 8-4.1" />
        </svg>
      );
    case "installation":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="m14.8 4.2 5 5" />
          <path d="m4 20 3.3-7.1L15.7 4.5l3.8 3.8-8.4 8.4L4 20Z" />
          <path d="m6.7 17.3 1.6 1.6" />
        </svg>
      );
    case "walkthrough":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="M12 3.25 19 6v5.2c0 4.3-2.85 7.78-7 9.55-4.15-1.77-7-5.25-7-9.55V6l7-2.75Z" />
          <path d="m8.8 11.9 2.1 2.1 4.35-4.35" />
        </svg>
      );
  }
}

export default function ProcessCard({ step }: ProcessCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group relative min-h-[172px] rounded-[22px] border border-white/10 bg-[#11110f]/72 px-5 py-6 pl-[5.75rem] shadow-[0_20px_55px_rgba(0,0,0,.18)] backdrop-blur-sm transition-colors duration-500 hover:border-[#d8bd79]/45 motion-reduce:transition-none sm:rounded-[26px] sm:px-6 sm:py-7 sm:pl-[6.5rem] lg:min-h-[300px] lg:rounded-[28px] lg:p-6 lg:pt-0 lg:text-center"
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
    >
      <motion.div
        className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#d8bd79]/35 bg-[#15130e] text-[#ead7a3] shadow-[0_10px_26px_rgba(0,0,0,.34)] sm:h-16 sm:w-16 lg:relative lg:mx-auto lg:-mt-8 lg:h-16 lg:w-16"
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
        whileHover={shouldReduceMotion ? undefined : { rotate: -4, scale: 1.06 }}
      >
        <span className="absolute font-mono text-2xl tracking-[-.12em] text-[#d8bd79]/22">{step.number}</span>
        <span className="relative text-[#ead7a3]">
          <ProcessIconGraphic icon={step.icon} />
        </span>
      </motion.div>

      <div className="relative lg:mt-8">
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[.18em] text-[#d8bd79]">Step {step.number}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-.035em] text-white sm:text-2xl">{step.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/62">{step.description}</p>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-[#d8bd79] transition-all duration-700 group-hover:w-full motion-reduce:transition-none" />
    </motion.article>
  );
}
