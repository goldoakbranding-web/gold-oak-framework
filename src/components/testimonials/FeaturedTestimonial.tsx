"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/config/testimonials";
import TestimonialRating from "./TestimonialRating";

type FeaturedTestimonialProps = {
  testimonial: Testimonial;
};

export default function FeaturedTestimonial({ testimonial }: FeaturedTestimonialProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      const frame = window.requestAnimationFrame(() => setHasRevealed(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const hasCustomerImage = Boolean(testimonial.customerImage && testimonial.customerImageAlt);
  const hasProjectImage = Boolean(testimonial.projectImage && testimonial.projectImageAlt);
  const initials = testimonial.name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2);

  return (
    <article
      className={`relative overflow-hidden rounded-[30px] border border-[#d8bd79]/25 bg-[#14130f]/82 p-6 shadow-[0_28px_80px_rgba(0,0,0,.34)] backdrop-blur-md transition-[transform,opacity] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none sm:rounded-[36px] sm:p-9 lg:p-11 ${
        hasRevealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      ref={cardRef}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#d8bd79]/[.1] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[82%] w-[52%] opacity-35 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:linear-gradient(to_top_left,black,transparent_80%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ead7a3]/80 to-transparent" />

      <div className="relative flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#d8bd79]">Featured perspective</span>
          {testimonial.isPlaceholder && (
            <span className="rounded-full border border-white/10 bg-white/[.035] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[.16em] text-white/48">
              Sample review
            </span>
          )}
        </div>
        <span className="font-mono text-[10px] tracking-[.18em] text-white/34">01 / 01</span>
      </div>

      {hasProjectImage && testimonial.projectImage && testimonial.projectImageAlt && (
        <figure className="relative mt-7 h-44 overflow-hidden rounded-2xl border border-white/10 sm:h-52">
          <Image
            alt={testimonial.projectImageAlt}
            className="object-cover"
            fill
            sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1279px) calc(100vw - 4rem), 1200px"
            src={testimonial.projectImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14130f]/70 via-transparent to-black/10" />
        </figure>
      )}

      <div className={`relative ${hasProjectImage ? "mt-8 sm:mt-10" : "mt-10 sm:mt-14"}`}>
        <TestimonialRating rating={testimonial.rating} size="large" />
        <blockquote className="mt-7 max-w-4xl text-balance text-2xl font-medium leading-[1.2] tracking-[-.038em] text-white sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="text-[#d8bd79]">&ldquo;</span>
          {testimonial.review}
          <span className="text-[#d8bd79]">&rdquo;</span>
        </blockquote>
      </div>

      <footer className="relative mt-10 flex items-center gap-3 border-t border-white/10 pt-6 sm:mt-12">
        {hasCustomerImage && testimonial.customerImage && testimonial.customerImageAlt ? (
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/15 bg-white/5">
            <Image alt={testimonial.customerImageAlt} className="object-cover" fill sizes="44px" src={testimonial.customerImage} />
          </div>
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8bd79]/25 bg-[#d8bd79]/10 font-mono text-[10px] tracking-[.14em] text-[#ead7a3]">
            {initials}
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-white">{testimonial.name}</p>
          <p className="mt-0.5 text-[10px] uppercase tracking-[.15em] text-white/43">{testimonial.city}</p>
        </div>
      </footer>
    </article>
  );
}
