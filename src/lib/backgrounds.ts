import "server-only";

import { existsSync } from "node:fs";
import { resolve, sep } from "node:path";
import {
  backgroundFileExtensions,
  homepageBackgrounds,
  type BackgroundFallbackImage,
  type HomepageBackgroundKey,
  type ResolvedHomepageBackground,
} from "@/config/backgrounds";

function publicImageExists(src: string) {
  const publicDirectory = resolve(process.cwd(), "public");
  const imagePath = resolve(publicDirectory, src.replace(/^\/+/, ""));

  return imagePath.startsWith(`${publicDirectory}${sep}`) && existsSync(imagePath);
}

function findCustomImage(key: HomepageBackgroundKey): BackgroundFallbackImage | undefined {
  const image = homepageBackgrounds[key].image;

  for (const extension of backgroundFileExtensions) {
    const src = `${image.directory}/background.${extension}`;
    if (publicImageExists(src)) return { src, alt: image.alt };
  }

  return undefined;
}

/**
 * Resolves a file-backed background without rendering a missing `next/image` source.
 * A new `background.<format>` file is picked up automatically on the next render/build.
 */
export function resolveHomepageBackground(key: HomepageBackgroundKey): ResolvedHomepageBackground {
  const config = homepageBackgrounds[key];
  const visualOptions = {
    overlayOpacity: config.overlayOpacity,
    blurPx: config.blurPx,
    brightness: config.brightness,
    gradientOverlay: config.gradientOverlay,
    parallaxEnabled: config.parallaxEnabled,
    contentAlignment: config.contentAlignment,
    objectPosition: config.objectPosition,
    preload: config.preload,
  };
  const customImage = findCustomImage(key);

  if (customImage) return { ...visualOptions, image: customImage, source: "custom" };
  if (config.fallbackImage && publicImageExists(config.fallbackImage.src)) return { ...visualOptions, image: config.fallbackImage, source: "fallback" };

  return { ...visualOptions, source: "none" };
}
