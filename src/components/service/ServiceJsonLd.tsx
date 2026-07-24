import { business } from "@/config/business";
import type { ServiceConfig } from "@/config/services";

type ServiceJsonLdProps = {
  service: ServiceConfig;
};

function toJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

/** Schema is intentionally limited to configured service content and avoids unverified business facts. */
export default function ServiceJsonLd({ service }: ServiceJsonLdProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: service.name, item: service.seo.canonicalPath },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.seo.description,
    provider: {
      "@type": "Organization",
      name: business.name,
      telephone: business.phone.value,
      email: business.email.value,
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} type="application/ld+json" />
      <script dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }} type="application/ld+json" />
      <script dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} type="application/ld+json" />
    </>
  );
}
