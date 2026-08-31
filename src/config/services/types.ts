import type { ServiceOption } from "@/config/contact";

export const serviceSlugs = ["roofing", "siding", "gutters", "soffit-fascia", "storm-damage", "insurance-claims"] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type ServiceIcon =
  | "shield"
  | "layers"
  | "water"
  | "detail"
  | "storm"
  | "guide"
  | "measure"
  | "finish";

/** A real, explicitly selected image. Object positions are CSS object-position values. */
export type ServiceImage = {
  src: string;
  alt: string;
  objectPosition: string;
  mobileObjectPosition: string;
  caption?: string;
  presentation?: "cover" | "detail";
};

export type ServiceTheme = {
  id: "engineering" | "architectural" | "precision" | "craftsmanship" | "response" | "guidance";
  heroLayout: "editorial-left" | "editorial-right" | "immersive";
  heroAlignment: "start" | "center" | "end";
  introLayout: "image-left" | "image-right" | "text-only";
  optionsLayout: "cards" | "list" | "columns";
  processLayout: "rail" | "steps" | "path";
  galleryLayout: "masonry" | "panorama" | "frames";
  accent: string;
};

export type ServiceHero = {
  eyebrow: string;
  title: string;
  description: string;
  indicators: string[];
  image: ServiceImage;
};

export type ServiceIntro = {
  eyebrow: string;
  title: string;
  description: string;
  supporting?: string;
  image?: ServiceImage;
};

export type ServiceOptionItem = {
  id: string;
  title: string;
  description: string;
  detail?: string;
};

export type ServiceOptions = {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceOptionItem[];
};

export type ServiceTrustItem = {
  id: string;
  title: string;
  description: string;
};

export type ServiceTrust = {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceTrustItem[];
};

export type ServiceProcessStep = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: ServiceIcon;
};

type ServiceProjectEvidenceBase = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ServiceProjectComparison = ServiceProjectEvidenceBase & {
  kind: "comparison";
  before: { label: string; image: ServiceImage };
  after: { label: string; image: ServiceImage };
};

export type ServiceProjectStory = ServiceProjectEvidenceBase & {
  kind: "story";
  note?: string;
  stages: Array<{
    id: string;
    label: string;
    title: string;
    description: string;
    image: ServiceImage;
  }>;
};

export type ServiceProjectFeature = ServiceProjectEvidenceBase & {
  kind: "feature";
  image: ServiceImage;
  caption?: string;
};

export type ServiceProjectEvidence = ServiceProjectComparison | ServiceProjectStory | ServiceProjectFeature;

export type ServiceGallery = {
  eyebrow: string;
  title: string;
  description: string;
  images: ServiceImage[];
};

export type ServiceFaq = {
  id: string;
  question: string;
  answer: string;
};

export type ServiceEstimate = {
  eyebrow: string;
  title: string;
  description: string;
  defaultService: ServiceOption;
  note?: string;
};

export type ServiceCta = {
  eyebrow: string;
  title: string;
  description: string;
  image: ServiceImage;
};

export type ServiceSeo = {
  title: string;
  description: string;
  canonicalPath: `/services/${ServiceSlug}`;
  image?: ServiceImage;
};

export type ServiceConfig = {
  slug: ServiceSlug;
  name: string;
  theme: ServiceTheme;
  hero: ServiceHero;
  intro?: ServiceIntro;
  options?: ServiceOptions;
  projectEvidence?: ServiceProjectEvidence;
  trust?: ServiceTrust;
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ServiceProcessStep[];
  };
  gallery?: ServiceGallery;
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceFaq[];
  };
  estimate: ServiceEstimate;
  cta: ServiceCta;
  relatedServices: ServiceSlug[];
  seo: ServiceSeo;
};
