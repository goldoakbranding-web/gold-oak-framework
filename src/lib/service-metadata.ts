import type { Metadata } from "next";
import { business, getAbsoluteSiteUrl } from "@/config/business";
import type { ServiceConfig } from "@/config/services";

/** Creates route metadata without assuming an unverified production domain. */
export function createServiceMetadata(service: ServiceConfig): Metadata {
  const title = `${service.seo.title} | ${business.name}`;
  const socialImage = service.seo.image ?? service.hero.image;
  const canonicalUrl = getAbsoluteSiteUrl(service.seo.canonicalPath);
  const socialImageUrl = socialImage ? getAbsoluteSiteUrl(socialImage.src) : undefined;

  return {
    title,
    description: service.seo.description,
    ...(canonicalUrl ? { alternates: { canonical: canonicalUrl } } : {}),
    openGraph: {
      type: "website",
      title,
      description: service.seo.description,
      siteName: business.name,
      ...(canonicalUrl ? { url: canonicalUrl } : {}),
      ...(socialImage && socialImageUrl
        ? { images: [{ url: socialImageUrl, alt: socialImage.alt }] }
        : {}),
    },
    twitter: {
      card: socialImageUrl ? "summary_large_image" : "summary",
      title,
      description: service.seo.description,
      ...(socialImageUrl ? { images: [socialImageUrl] } : {}),
    },
  };
}
