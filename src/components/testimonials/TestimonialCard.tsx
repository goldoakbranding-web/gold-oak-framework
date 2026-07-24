import Image from "next/image";
import type { Testimonial } from "@/config/testimonials";
import TestimonialRating from "./TestimonialRating";

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
  revealed: boolean;
};

function Avatar({ testimonial }: { testimonial: Testimonial }) {
  const hasCustomerImage = Boolean(testimonial.customerImage && testimonial.customerImageAlt);

  if (hasCustomerImage && testimonial.customerImage && testimonial.customerImageAlt) {
    return (
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/5">
        <Image alt={testimonial.customerImageAlt} className="object-cover" fill sizes="40px" src={testimonial.customerImage} />
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d8bd79]/25 bg-[#d8bd79]/10 font-mono text-[10px] tracking-[.14em] text-[#ead7a3]">
      {testimonial.name.slice(-2)}
    </div>
  );
}

export default function TestimonialCard({ testimonial, index, revealed }: TestimonialCardProps) {
  const hasProjectImage = Boolean(testimonial.projectImage && testimonial.projectImageAlt);

  return (
    <article
      className={`group relative flex min-h-[290px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#11110f]/75 p-6 shadow-[0_20px_55px_rgba(0,0,0,.2)] backdrop-blur-sm transition-[transform,border-color,box-shadow,opacity] duration-700 ease-out hover:-translate-y-1 hover:border-[#d8bd79]/40 hover:shadow-[0_26px_70px_rgba(0,0,0,.32)] motion-reduce:transform-none motion-reduce:transition-none sm:rounded-[28px] sm:p-7 ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`}
      style={{ transitionDelay: revealed ? `${index * 75}ms` : "0ms" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(216,189,121,.09),transparent_28%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100 motion-reduce:transition-none" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      {hasProjectImage && testimonial.projectImage && testimonial.projectImageAlt && (
        <figure className="relative -mx-6 -mt-6 mb-6 h-32 overflow-hidden border-b border-white/10 sm:-mx-7 sm:-mt-7 sm:h-36">
          <Image
            alt={testimonial.projectImageAlt}
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
            fill
            sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1279px) calc(50vw - 2rem), 380px"
            src={testimonial.projectImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11110f]/75 via-transparent to-black/10" />
        </figure>
      )}

      <div className="relative flex items-center justify-between gap-4">
        <TestimonialRating rating={testimonial.rating} />
        {testimonial.isPlaceholder && (
          <span className="rounded-full border border-white/10 bg-white/[.035] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[.16em] text-white/43">
            Sample review
          </span>
        )}
      </div>

      <blockquote className="relative mt-6 text-[15px] leading-7 text-white/72">
        <span className="mr-1 font-serif text-2xl leading-none text-[#d8bd79]">&ldquo;</span>
        {testimonial.review}
        <span className="ml-1 font-serif text-2xl leading-none text-[#d8bd79]">&rdquo;</span>
      </blockquote>

      <footer className="relative mt-auto flex items-center gap-3 border-t border-white/10 pt-5">
        <Avatar testimonial={testimonial} />
        <div>
          <p className="text-sm font-medium text-white">{testimonial.name}</p>
          <p className="mt-0.5 text-[10px] uppercase tracking-[.14em] text-white/42">{testimonial.city}</p>
        </div>
      </footer>
    </article>
  );
}
