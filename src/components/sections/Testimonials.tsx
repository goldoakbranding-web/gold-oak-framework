import FeaturedTestimonial from "@/components/testimonials/FeaturedTestimonial";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { testimonials, testimonialsCta } from "@/config/testimonials";
import { resolveHomepageBackground } from "@/lib/backgrounds";

export default function Testimonials() {
  const background = resolveHomepageBackground("testimonials");
  const featuredTestimonial = testimonials.find((testimonial) => testimonial.featured);
  const supportingTestimonials = testimonials.filter((testimonial) => !testimonial.featured);

  return (
    <section className="relative overflow-hidden bg-[#080807] py-28 sm:py-36 lg:py-44" id="testimonials">
      <div className="pointer-events-none absolute inset-0 opacity-[.28] [background-image:linear-gradient(rgba(255,255,255,.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.032)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute left-1/2 top-32 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-[#d8bd79]/[.045] blur-[170px]" />
      <div className="pointer-events-none absolute -left-64 bottom-0 h-[620px] w-[620px] rounded-full bg-white/[.025] blur-[180px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/55 to-transparent" />
      <SectionAtmosphere background={background} variant="editorial" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(300px,.68fr)] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.48em] text-[#d8bd79] sm:text-xs sm:tracking-[.62em]">
              Customer Testimonials
            </p>
            <h2 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-.05em] text-white sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl">
              The Experience Matters, Too.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/62 sm:mt-8 sm:text-lg sm:leading-8">
              The best perspective on a roofing project comes from the homeowner. Published customer feedback will be added here with permission to share it.
            </p>
          </div>

          <aside className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,.24)] backdrop-blur-md sm:rounded-[30px] sm:p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bd79]/80 to-transparent" />
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d8bd79]/10 blur-3xl" />
            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/42">Review standard</p>
              <p className="mt-6 text-2xl font-medium leading-tight tracking-[-.035em] text-white sm:text-3xl">
                Real feedback, published with care.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/62">
                Every review in this section is currently a clearly labeled layout placeholder until approved customer feedback is available.
              </p>
            </div>
          </aside>
        </div>

        {featuredTestimonial && <div className="mt-14 sm:mt-20"><FeaturedTestimonial testimonial={featuredTestimonial} /></div>}

        <div className="mt-4 sm:mt-5">
          <TestimonialsGrid testimonials={supportingTestimonials} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:mt-12 sm:flex-row sm:pt-10">
          <p className="max-w-xl text-center text-sm leading-6 text-white/48 sm:text-left">
            Replace sample reviews and the pending link in the testimonial configuration once customer permission and the Google Reviews destination are confirmed.
          </p>
          {testimonialsCta.href ? (
            <a className="rounded-full border border-[#d8bd79]/45 bg-[#d8bd79]/10 px-6 py-3 text-[10px] font-semibold uppercase tracking-[.16em] text-[#ead7a3] transition duration-300 hover:-translate-y-0.5 hover:border-[#ead7a3] hover:bg-[#d8bd79]/20 motion-reduce:transform-none motion-reduce:transition-none" href={testimonialsCta.href}>
              {testimonialsCta.label}
            </a>
          ) : (
            <button aria-disabled="true" className="rounded-full border border-white/15 bg-white/[.035] px-6 py-3 text-[10px] font-semibold uppercase tracking-[.16em] text-white/55" title={testimonialsCta.pendingLabel} type="button">
              {testimonialsCta.label}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
