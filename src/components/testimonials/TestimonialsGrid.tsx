"use client";

import { useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/config/testimonials";
import TestimonialCard from "./TestimonialCard";

type TestimonialsGridProps = {
  testimonials: Testimonial[];
};

export default function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      const frame = window.requestAnimationFrame(() => setHasRevealed(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const element = gridRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3" ref={gridRef}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard index={index} key={testimonial.id} revealed={hasRevealed} testimonial={testimonial} />
      ))}
    </div>
  );
}
