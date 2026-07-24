import type { Metadata } from "next";
import { business } from "@/config/business";
import type { ServiceConfig } from "@/config/services";
import { resolveServiceVisuals } from "./service-images";

/** Creates route metadata without assuming an unverified production domain. */
export function createServiceMetadata(service: ServiceConfig): Metadata {
  const title = `${service.seo.title} | ${business.name}`;
  const visuals = resolveServiceVisuals(service);
  const socialImage = visuals.hero ?? visuals.ambient;

  return {
    title,
    description: service.seo.description,
    alternates: { canonical: service.seo.canonicalPath },
    openGraph: {
      type: "website",
      title,
      description: service.seo.description,
      url: service.seo.canonicalPath,
      siteName: business.name,
      images: socialImage ? [{ url: socialImage.src, alt: socialImage.alt }] : undefined,
    },
    twitter: {
      card: socialImage ? "summary_large_image" : "summary",
      title,
      description: service.seo.description,
      images: socialImage ? [socialImage.src] : undefined,
    },
  };
}
