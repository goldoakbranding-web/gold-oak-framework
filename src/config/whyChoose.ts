export type WhyChooseIcon =
  | "system"
  | "craftsmanship"
  | "protection"
  | "insured"
  | "storm"
  | "communication";

export type WhyChooseVariant = "featured" | "primary" | "standard";

export type WhyChooseImageLayout = "top" | "bottom" | "corner";

export type WhyChooseFeaturedImage = {
  image: string;
  imageAlt: string;
  imagePosition?: string;
  caption: string;
};

export type WhyChooseItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  icon: WhyChooseIcon;
  variant: WhyChooseVariant;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  imageLayout?: WhyChooseImageLayout;
};

export const whyChooseFeaturedImage: WhyChooseFeaturedImage = {
  image: "/images/projects/large-project1.jpg",
  imageAlt: "Aerial view of a roofing crew installing protective underlayment on a residential roof",
  imagePosition: "center 52%",
  caption: "A complete system starts with the layers beneath the finish.",
};

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: "premium-systems",
    number: "01",
    title: "Premium Roofing Systems",
    description:
      "We specify complete roofing systems with proven materials designed to work together, rather than piecing together mismatched components.",
    detail: "Materials are considered as one system, from the deck up.",
    icon: "system",
    variant: "featured",
  },
  {
    id: "craftsmanship",
    number: "02",
    title: "Skilled Craftsmanship",
    description:
      "Careful installation brings precision to flashing, ventilation, cleanup, and the finishing details that protect the whole assembly.",
    detail: "The work homeowners see and the details they do not both matter.",
    icon: "craftsmanship",
    variant: "primary",
    image: "/images/projects/project-1.jpg",
    imageAlt: "Roofing crew working on an exposed residential roof deck",
    imagePosition: "center 58%",
    imageLayout: "bottom",
  },
  {
    id: "workmanship-protection",
    number: "03",
    title: "Strong Workmanship Protection",
    description:
      "Clear workmanship coverage gives homeowners a better understanding of what is protected after installation.",
    detail: "Confidence begins with expectations that are easy to understand.",
    icon: "protection",
    variant: "primary",
    image: "/images/projects/project-3.jpg",
    imageAlt: "Finished architectural shingles on a residential roof",
    imagePosition: "center 68%",
    imageLayout: "top",
  },
  {
    id: "licensed-insured",
    number: "04",
    title: "Licensed and Insured",
    description:
      "Professional protection for the homeowner, the property, and every project we are trusted to complete.",
    detail: "A professional project starts with responsible safeguards.",
    icon: "insured",
    variant: "standard",
  },
  {
    id: "storm-guidance",
    number: "05",
    title: "Storm and Insurance Guidance",
    description:
      "We help homeowners navigate storm damage, inspections, documentation, and the insurance process with greater clarity.",
    detail: "A more informed path from the first inspection forward.",
    icon: "storm",
    variant: "standard",
    image: "/images/projects/project-2.jpg",
    imageAlt: "Roofing crew removing storm-damaged shingles from a residence",
    imagePosition: "center 46%",
    imageLayout: "corner",
  },
  {
    id: "communication",
    number: "06",
    title: "Clear Communication",
    description:
      "Honest recommendations, dependable scheduling, project updates, and no confusing surprises along the way.",
    detail: "Straight answers make a better customer experience.",
    icon: "communication",
    variant: "standard",
  },
];
