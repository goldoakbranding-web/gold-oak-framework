"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { ProcessStep } from "@/config/process";
import ProcessCard from "./ProcessCard";

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { amount: 0.18, margin: "0px 0px -8%", once: true });
  const shouldReduceMotion = useReducedMotion();
  const hasEntered = isInView || shouldReduceMotion;

  return (
    <div className="relative" ref={timelineRef}>
      <div className="pointer-events-none absolute bottom-7 left-7 top-7 w-px overflow-hidden bg-white/10 lg:bottom-auto lg:left-[10%] lg:right-[10%] lg:top-0 lg:h-px lg:w-auto">
        <motion.div
          animate={{ scaleY: hasEntered ? 1 : 0, scaleX: hasEntered ? 1 : 0 }}
          className="h-full w-full origin-top bg-gradient-to-b from-transparent via-[#d8bd79]/80 to-transparent lg:origin-left lg:bg-gradient-to-r"
          initial={false}
          transition={{ duration: shouldReduceMotion ? 0 : 1.25, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <motion.div
        animate={hasEntered ? "visible" : "hidden"}
        className="relative grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-4"
        initial="hidden"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: shouldReduceMotion ? 0 : 0.12,
              staggerChildren: shouldReduceMotion ? 0 : 0.11,
            },
          },
        }}
      >
        {steps.map((step) => (
          <ProcessCard key={step.id} step={step} />
        ))}
      </motion.div>
    </div>
  );
}
