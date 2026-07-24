export const serviceSlugs = ["roofing", "siding", "gutters", "soffit-fascia", "storm-damage", "insurance-claims"] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];
export type ServiceIcon = "shield" | "layers" | "water" | "detail" | "storm" | "guide" | "measure" | "finish";

export type ServiceTheme = {
  id: "engineering" | "architectural" | "precision" | "craftsmanship" | "response" | "guidance";
  heroAlignment: "start" | "center" | "end";
  introLayout: "image-left" | "image-right";
  benefitsLayout: "feature-first" | "editorial" | "balanced";
  processLayout: "rail" | "steps" | "path";
  galleryLayout: "masonry" | "panorama" | "frames";
  accent: string;
};

export type ServiceImageDirectories = {
  root: string;
  hero: string;
  backgrounds: string;
  gallery: string;
  beforeAfter: string;
};

export type ServiceBenefit = {
  id: string;
  icon: ServiceIcon;
  title: string;
  description: string;
  detail: string;
};

export type ServiceProcessStep = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: ServiceIcon;
};

export type ServiceFaq = {
  id: string;
  question: string;
  answer: string;
};

export type ServiceConfig = {
  slug: ServiceSlug;
  name: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroIndicators: string[];
  theme: ServiceTheme;
  imageDirectories: ServiceImageDirectories;
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    supporting: string;
  };
  benefits: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceBenefit[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ServiceProcessStep[];
  };
  beforeAfter: {
    eyebrow: string;
    title: string;
    description: string;
    beforeLabel: string;
    afterLabel: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceFaq[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
  };
  relatedServices: ServiceSlug[];
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
  };
};

export function serviceImageDirectories(slug: ServiceSlug): ServiceImageDirectories {
  const root = `/images/services/${slug}`;

  return {
    root,
    hero: `${root}/hero`,
    backgrounds: `${root}/backgrounds`,
    gallery: `${root}/gallery`,
    beforeAfter: `${root}/before-after`,
  };
}
