import FeaturedTestimonial from "@/components/testimonials/FeaturedTestimonial";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";
import { testimonials, testimonialsCta } from "@/config/testimonials";

export default function Testimonials() {
  const verifiedTestimonials = testimonials.filter((testimonial) => !testimonial.isPlaceholder);
  const featuredTestimonial =
    verifiedTestimonials.find((testimonial) => testimonial.featured) ?? verifiedTestimonials[0];
  const supportingTestimonials = featuredTestimonial
    ? verifiedTestimonials.filter((testimonial) => testimonial.id !== featuredTestimonial.id)
    : [];
  const hasVerifiedTestimonials = Boolean(featuredTestimonial);

  return (
    <section className="relative overflow-hidden bg-[#0d0d0b] py-20 sm:py-28 lg:py-32" id="testimonials">
      <div className="pointer-events-none absolute inset-0 opacity-[.18] [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bd79]/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,.58fr)] lg:gap-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.32em] text-[#d8bd79] sm:text-xs sm:tracking-[.42em]">
              What Our Customers Say
            </p>
            <h2 className="mt-4 max-w-4xl text-balance text-4xl leading-[.96] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl">
              {hasVerifiedTestimonials
                ? "Trusted by Homeowners Across Wisconsin"
                : "Customer Feedback, Published With Care"}
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
              {hasVerifiedTestimonials
                ? "Read approved homeowner feedback about the CM Roofing project experience."
                : "Approved customer reviews have not been added to the website yet. Sample names, ratings, and quotes are not shown as real feedback."}
            </p>
            {testimonialsCta.href ? (
              <a
                className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-[#d8bd79]/55 pb-1 text-[10px] font-bold uppercase tracking-[.18em] text-[#ead7a3] transition-colors hover:border-[#ead7a3] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]"
                href={testimonialsCta.href}
              >
                {testimonialsCta.label}
                <span aria-hidden="true">→</span>
              </a>
            ) : null}
          </div>
        </div>

        {featuredTestimonial ? (
          <>
            <div className="mt-12 sm:mt-16">
              <FeaturedTestimonial testimonial={featuredTestimonial} />
            </div>
            {supportingTestimonials.length > 0 ? (
              <div className="mt-4 sm:mt-5">
                <TestimonialsGrid testimonials={supportingTestimonials} />
              </div>
            ) : null}
          </>
        ) : (
          <div className="relative mt-10 overflow-hidden rounded-[26px] border border-[#d8bd79]/20 bg-[#14130f]/82 p-6 shadow-[0_22px_65px_rgba(0,0,0,.28)] sm:mt-12 sm:rounded-[30px] sm:p-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center lg:gap-8 lg:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8bd79]/30 bg-[#d8bd79]/10 text-3xl leading-none text-[#ead7a3] sm:h-16 sm:w-16 sm:text-4xl" aria-hidden="true">
              &ldquo;
            </div>
            <div className="mt-6 lg:mt-0">
              <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#d8bd79]">
                Reviews pending approval
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-.035em] text-white sm:text-3xl">
                Verified customer reviews will appear here.
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
                CM Roofing will publish customer feedback after the review text and attribution are approved for use.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
