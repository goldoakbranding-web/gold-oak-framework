import type { MetadataRoute } from "next";
import { business, getAbsoluteSiteUrl } from "@/config/business";
import { serviceConfigs } from "@/config/services";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!business.siteUrl) return [];

  const paths = ["/", ...serviceConfigs.map((service) => service.seo.canonicalPath), "/why-choose-cm-roofing"];

  return paths.flatMap((path) => {
    const url = getAbsoluteSiteUrl(path);

    return url ? [{ url }] : [];
  });
}
