import { business, getAbsoluteSiteUrl } from "@/config/business";

function toJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

/** A single site-wide local business schema sourced only from verified business configuration. */
export default function BusinessJsonLd() {
  const homeUrl = getAbsoluteSiteUrl("/");
  const businessId = getAbsoluteSiteUrl("/#business");
  const socialUrls = business.socialLinks.map((link) => link.href);
  const serviceCommunities = business.serviceAreas?.communities ?? [];
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    ...(businessId ? { "@id": businessId } : {}),
    ...(homeUrl ? { url: homeUrl } : {}),
    name: business.name,
    description: business.category,
    telephone: business.phone.value,
    email: business.email.value,
    ...(socialUrls.length ? { sameAs: socialUrls } : {}),
    ...(serviceCommunities.length
      ? {
          areaServed: serviceCommunities.map((community) => ({
            "@type": "City",
            name: `${community}, Wisconsin`,
          })),
        }
      : {}),
    hasCredential: business.verifiedFacts.licenseNames.map((licenseName) => ({
      "@type": "EducationalOccupationalCredential",
      name: licenseName,
      credentialCategory: "license",
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: "WI",
      addressCountry: "US",
    },
  };

  return <script dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} type="application/ld+json" />;
}
