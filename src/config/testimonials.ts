export type Testimonial = {
  id: string;
  name: string;
  city: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
  featured?: boolean;
  isPlaceholder: boolean;
  customerImage?: string;
  customerImageAlt?: string;
  projectImage?: string;
  projectImageAlt?: string;
};

export type TestimonialsCta = {
  label: string;
  href?: string;
  pendingLabel: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "sample-featured-review",
    name: "Sample Homeowner",
    city: "City to be confirmed",
    rating: 5,
    review:
      "Sample review placeholder. This featured space is reserved for an approved homeowner account of the project experience, from the first conversation through the final walkthrough.",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: "sample-materials-review",
    name: "Sample Homeowner 01",
    city: "City to be confirmed",
    rating: 5,
    review:
      "Sample review placeholder for an approved homeowner perspective on material selection and the overall roofing process.",
    isPlaceholder: true,
  },
  {
    id: "sample-craftsmanship-review",
    name: "Sample Homeowner 02",
    city: "City to be confirmed",
    rating: 5,
    review:
      "Sample review placeholder for approved feedback about installation details, the jobsite experience, and the final result.",
    isPlaceholder: true,
  },
  {
    id: "sample-communication-review",
    name: "Sample Homeowner 03",
    city: "City to be confirmed",
    rating: 5,
    review:
      "Sample review placeholder for an approved homeowner account of scheduling, project updates, and clear communication.",
    isPlaceholder: true,
  },
  {
    id: "sample-guidance-review",
    name: "Sample Homeowner 04",
    city: "City to be confirmed",
    rating: 5,
    review:
      "Sample review placeholder for approved feedback about the inspection, documentation, and storm-damage guidance process.",
    isPlaceholder: true,
  },
  {
    id: "sample-follow-through-review",
    name: "Sample Homeowner 05",
    city: "City to be confirmed",
    rating: 5,
    review:
      "Sample review placeholder for an approved homeowner perspective on care, cleanup, and confidence after the project is complete.",
    isPlaceholder: true,
  },
];

export const testimonialsCta: TestimonialsCta = {
  label: "Read More Reviews",
  pendingLabel: "Google Reviews link pending",
};
