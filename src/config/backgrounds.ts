export const backgroundFileExtensions = ["avif", "webp", "jpg", "jpeg", "png"] as const;

export type HomepageBackgroundKey =
  | "hero"
  | "services"
  | "gallery"
  | "roofSystem"
  | "whyChoose"
  | "testimonials"
  | "process"
  | "finalCTA"
  | "contact";

export type BackgroundContentAlignment = "start" | "center" | "end";

export type BackgroundImageReference = {
  /** Folder where a future `background.<format>` file is discovered automatically. */
  directory: string;
  alt: string;
};

export type BackgroundFallbackImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export type HomepageBackgroundConfig = {
  image: BackgroundImageReference;
  fallbackImage?: BackgroundFallbackImage;
  overlayOpacity: number;
  blurPx: number;
  brightness: number;
  gradientOverlay: string;
  parallaxEnabled: boolean;
  contentAlignment: BackgroundContentAlignment;
  objectPosition?: string;
  preload?: boolean;
};

export type ResolvedHomepageBackground = Omit<HomepageBackgroundConfig, "image" | "fallbackImage"> & {
  image?: BackgroundFallbackImage;
  source: "custom" | "fallback" | "none";
};

/**
 * Keep future background art in the matching `public/images/backgrounds/<section>/`
 * directory. The resolver discovers `background.avif`, `.webp`, `.jpg`, `.jpeg`, or
 * `.png` without a component or configuration change.
 */
export const homepageBackgrounds: Record<HomepageBackgroundKey, HomepageBackgroundConfig> = {
  hero: {
    image: { directory: "/images/backgrounds/hero", alt: "" },
    fallbackImage: {
      src: "/images/services/roofing/projects/completed-roof-replacement-drone-front.jpg",
      alt: "",
      objectPosition: "center",
    },
    overlayOpacity: 0.1,
    blurPx: 0,
    brightness: 0.78,
    gradientOverlay: "linear-gradient(118deg, rgba(0, 0, 0, .28), transparent 48%, rgba(0, 0, 0, .18))",
    parallaxEnabled: true,
    contentAlignment: "center",
    objectPosition: "center",
    preload: true,
  },
  services: {
    image: { directory: "/images/backgrounds/services", alt: "" },
    overlayOpacity: 0.68,
    blurPx: 0,
    brightness: 0.7,
    gradientOverlay: "linear-gradient(128deg, rgba(8, 8, 7, .62), rgba(8, 8, 7, .2) 55%, rgba(8, 8, 7, .66))",
    parallaxEnabled: false,
    contentAlignment: "center",
    objectPosition: "center",
  },
  gallery: {
    image: { directory: "/images/backgrounds/gallery", alt: "" },
    overlayOpacity: 0.72,
    blurPx: 0,
    brightness: 0.64,
    gradientOverlay: "radial-gradient(ellipse at 50% 30%, transparent, rgba(8, 8, 7, .74))",
    parallaxEnabled: true,
    contentAlignment: "center",
    objectPosition: "center",
  },
  roofSystem: {
    image: { directory: "/images/backgrounds/roof-system", alt: "" },
    overlayOpacity: 0.7,
    blurPx: 0,
    brightness: 0.68,
    gradientOverlay: "linear-gradient(90deg, rgba(8, 8, 7, .66), rgba(8, 8, 7, .24) 50%, rgba(8, 8, 7, .66))",
    parallaxEnabled: true,
    contentAlignment: "center",
    objectPosition: "center",
  },
  whyChoose: {
    image: { directory: "/images/backgrounds/why-choose", alt: "" },
    overlayOpacity: 0.7,
    blurPx: 0,
    brightness: 0.7,
    gradientOverlay: "linear-gradient(105deg, rgba(9, 9, 8, .76), rgba(9, 9, 8, .22) 64%, rgba(9, 9, 8, .58))",
    parallaxEnabled: true,
    contentAlignment: "start",
    objectPosition: "center",
  },
  testimonials: {
    image: { directory: "/images/backgrounds/testimonials", alt: "" },
    overlayOpacity: 0.74,
    blurPx: 0,
    brightness: 0.66,
    gradientOverlay: "radial-gradient(ellipse at 50% 20%, rgba(8, 8, 7, .2), rgba(8, 8, 7, .8) 74%)",
    parallaxEnabled: true,
    contentAlignment: "center",
    objectPosition: "center",
  },
  process: {
    image: { directory: "/images/backgrounds/process", alt: "" },
    overlayOpacity: 0.72,
    blurPx: 0,
    brightness: 0.66,
    gradientOverlay: "linear-gradient(101deg, rgba(9, 9, 8, .72), rgba(9, 9, 8, .24) 52%, rgba(9, 9, 8, .68))",
    parallaxEnabled: false,
    contentAlignment: "center",
    objectPosition: "center",
  },
  finalCTA: {
    image: { directory: "/images/backgrounds/final-cta", alt: "" },
    fallbackImage: { src: "/images/projects/large-project5.jpg", alt: "", objectPosition: "center 53%" },
    overlayOpacity: 0.12,
    blurPx: 0,
    brightness: 0.66,
    gradientOverlay: "linear-gradient(90deg, rgba(7, 7, 6, .38), transparent 52%, rgba(7, 7, 6, .18))",
    parallaxEnabled: true,
    contentAlignment: "start",
    objectPosition: "center 53%",
  },
  contact: {
    image: { directory: "/images/backgrounds/contact", alt: "" },
    overlayOpacity: 0.76,
    blurPx: 0,
    brightness: 0.65,
    gradientOverlay: "linear-gradient(118deg, rgba(8, 8, 7, .74), rgba(8, 8, 7, .26) 60%, rgba(8, 8, 7, .68))",
    parallaxEnabled: false,
    contentAlignment: "start",
    objectPosition: "center",
  },
};
