import type { Metadata } from "next";
import WhyChoosePage from "@/components/why-choose/WhyChoosePage";
import { business, getAbsoluteSiteUrl } from "@/config/business";
import { whyChoosePage } from "@/config/whyChoosePage";

const canonicalUrl = getAbsoluteSiteUrl(whyChoosePage.seo.canonicalPath);
const socialImageUrl = getAbsoluteSiteUrl(whyChoosePage.hero.image.src);

export const metadata: Metadata = {
  title: whyChoosePage.seo.title,
  description: whyChoosePage.seo.description,
  ...(canonicalUrl ? { alternates: { canonical: canonicalUrl } } : {}),
  openGraph: {
    type: "website",
    title: whyChoosePage.seo.title,
    description: whyChoosePage.seo.description,
    siteName: business.name,
    ...(canonicalUrl ? { url: canonicalUrl } : {}),
    ...(socialImageUrl
      ? {
          images: [
            {
              url: socialImageUrl,
              alt: whyChoosePage.hero.image.alt,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: socialImageUrl ? "summary_large_image" : "summary",
    title: whyChoosePage.seo.title,
    description: whyChoosePage.seo.description,
    ...(socialImageUrl ? { images: [socialImageUrl] } : {}),
  },
};

export default function WhyChooseCMRoofingRoute() {
  return <WhyChoosePage />;
}
