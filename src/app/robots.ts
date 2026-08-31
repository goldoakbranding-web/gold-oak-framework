import type { MetadataRoute } from "next";
import { getAbsoluteSiteUrl } from "@/config/business";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = getAbsoluteSiteUrl("/sitemap.xml");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(sitemapUrl ? { sitemap: sitemapUrl } : {}),
  };
}
