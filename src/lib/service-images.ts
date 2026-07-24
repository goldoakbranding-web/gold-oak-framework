import "server-only";

import { existsSync } from "node:fs";
import { resolve, sep } from "node:path";
import {
  backgroundFileExtensions,
  type BackgroundFallbackImage,
  type ResolvedHomepageBackground,
} from "@/config/backgrounds";
import type { ServiceConfig } from "@/config/services";

export type ServiceVisuals = {
  hero?: BackgroundFallbackImage;
  ambient?: BackgroundFallbackImage;
  before?: BackgroundFallbackImage;
  after?: BackgroundFallbackImage;
  gallery: BackgroundFallbackImage[];
};

function publicImageExists(src: string) {
  const publicDirectory = resolve(process.cwd(), "public");
  const imagePath = resolve(publicDirectory, src.replace(/^\/+/, ""));

  return imagePath.startsWith(`${publicDirectory}${sep}`) && existsSync(imagePath);
}

function findImage(directory: string, name: string, alt: string): BackgroundFallbackImage | undefined {
  for (const extension of backgroundFileExtensions) {
    const src = `${directory}/${name}.${extension}`;
    if (publicImageExists(src)) return { src, alt };
  }

  return undefined;
}

/** Resolves only existing service images, leaving the components on their CSS fallback otherwise. */
export function resolveServiceVisuals(service: ServiceConfig): ServiceVisuals {
  const { imageDirectories } = service;
  const gallery = Array.from({ length: 6 }, (_, index) =>
    findImage(imageDirectories.gallery, `project-${index + 1}`, `${service.name} project photograph ${index + 1}`),
  ).filter((image): image is BackgroundFallbackImage => Boolean(image));

  return {
    hero: findImage(imageDirectories.hero, "background", `${service.name} service background`),
    ambient: findImage(imageDirectories.backgrounds, "background", ""),
    before: findImage(imageDirectories.beforeAfter, "before", `${service.name} project before work`),
    after: findImage(imageDirectories.beforeAfter, "after", `${service.name} project after work`),
    gallery,
  };
}

export function createServiceImageLayer(
  service: ServiceConfig,
  image: BackgroundFallbackImage | undefined,
): ResolvedHomepageBackground {
  return {
    image,
    source: image ? "custom" : "none",
    overlayOpacity: service.theme.id === "response" ? 0.67 : 0.62,
    blurPx: 0,
    brightness: service.theme.id === "guidance" ? 0.7 : 0.66,
    gradientOverlay:
      service.theme.heroAlignment === "start"
        ? "linear-gradient(90deg, rgba(8, 8, 7, .76), rgba(8, 8, 7, .2) 66%, rgba(8, 8, 7, .48))"
        : service.theme.heroAlignment === "end"
          ? "linear-gradient(270deg, rgba(8, 8, 7, .76), rgba(8, 8, 7, .2) 66%, rgba(8, 8, 7, .48))"
          : "radial-gradient(ellipse at 50% 42%, rgba(8, 8, 7, .18), rgba(8, 8, 7, .78) 78%)",
    parallaxEnabled: true,
    contentAlignment: service.theme.heroAlignment,
    objectPosition: "center",
  };
}
