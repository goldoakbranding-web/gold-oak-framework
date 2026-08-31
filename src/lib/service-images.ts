import type { BackgroundFallbackImage, ResolvedHomepageBackground } from "@/config/backgrounds";
import type { ServiceConfig, ServiceImage } from "@/config/services";

export type ServiceVisuals = {
  hero: ServiceImage;
  intro?: ServiceImage;
  ambient: ServiceImage;
  before?: ServiceImage;
  after?: ServiceImage;
  project: ServiceImage[];
  gallery: ServiceImage[];
  cta: ServiceImage;
};

/**
 * Returns only images explicitly assigned in the service configuration. There is
 * no directory probing, synthetic slot count, or placeholder fallback.
 */
export function resolveServiceVisuals(service: ServiceConfig): ServiceVisuals {
  const evidence = service.projectEvidence;

  return {
    hero: service.hero.image,
    intro: service.intro?.image,
    ambient: service.cta.image,
    before: evidence?.kind === "comparison" ? evidence.before.image : undefined,
    after: evidence?.kind === "comparison" ? evidence.after.image : undefined,
    project:
      evidence?.kind === "story"
        ? evidence.stages.map((stage) => stage.image)
        : evidence?.kind === "feature"
          ? [evidence.image]
          : evidence?.kind === "comparison"
            ? [evidence.before.image, evidence.after.image]
            : [],
    gallery: service.gallery?.images ?? [],
    cta: service.cta.image,
  };
}

/** Compatibility adapter for service sections that still use BackgroundImageLayer. */
export function createServiceImageLayer(
  service: ServiceConfig,
  image: ServiceImage | BackgroundFallbackImage | undefined,
): ResolvedHomepageBackground {
  return {
    image,
    source: image ? "custom" : "none",
    overlayOpacity: service.theme.id === "response" ? 0.66 : 0.6,
    blurPx: 0,
    brightness: service.theme.id === "guidance" ? 0.72 : 0.68,
    gradientOverlay:
      service.theme.heroAlignment === "start"
        ? "linear-gradient(90deg, rgba(8, 8, 7, .78), rgba(8, 8, 7, .22) 68%, rgba(8, 8, 7, .5))"
        : service.theme.heroAlignment === "end"
          ? "linear-gradient(270deg, rgba(8, 8, 7, .78), rgba(8, 8, 7, .22) 68%, rgba(8, 8, 7, .5))"
          : "radial-gradient(ellipse at 50% 42%, rgba(8, 8, 7, .18), rgba(8, 8, 7, .8) 80%)",
    parallaxEnabled: false,
    contentAlignment: service.theme.heroAlignment,
    objectPosition: image?.objectPosition ?? "center",
  };
}
