import { business } from "@/config/business";

function toJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

/** A single site-wide local business schema sourced only from verified business configuration. */
export default function BusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: business.name,
    description: business.category,
    telephone: business.phone.value,
    email: business.email.value,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: "WI",
      addressCountry: "US",
    },
  };

  return <script dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} type="application/ld+json" />;
}
