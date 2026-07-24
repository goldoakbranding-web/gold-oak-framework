type TestimonialRatingProps = {
  rating: number;
  size?: "default" | "large";
};

export default function TestimonialRating({ rating, size = "default" }: TestimonialRatingProps) {
  const starClass = size === "large" ? "h-6 w-6 sm:h-7 sm:w-7" : "h-4 w-4";

  return (
    <div aria-label={`${rating} out of 5 stars`} className="flex items-center gap-1 text-[#d8bd79]">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          aria-hidden="true"
          className={`${starClass} ${index < rating ? "text-[#d8bd79]" : "text-white/15"}`}
          fill={index < rating ? "currentColor" : "none"}
          key={index}
          stroke="currentColor"
          strokeWidth="1.25"
          viewBox="0 0 24 24"
        >
          <path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1l-5.61 2.95 1.07-6.24L2.92 9.39l6.27-.91L12 2.8Z" />
        </svg>
      ))}
    </div>
  );
}
