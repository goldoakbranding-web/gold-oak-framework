import Navbar from "@/components/layout/Navbar";
import type { ServiceConfig } from "@/config/services";
import { resolveServiceVisuals } from "@/lib/service-images";
import BeforeAfterShowcase from "./BeforeAfterShowcase";
import BenefitsGrid from "./BenefitsGrid";
import RelatedServices from "./RelatedServices";
import ServiceCTA from "./ServiceCTA";
import ServiceFAQ from "./ServiceFAQ";
import ServiceGallery from "./ServiceGallery";
import ServiceHero from "./ServiceHero";
import ServiceIntro from "./ServiceIntro";
import ServiceJsonLd from "./ServiceJsonLd";
import ServiceProcess from "./ServiceProcess";

type ServicePageProps = { service: ServiceConfig };

export default function ServicePage({ service }: ServicePageProps) {
  const visuals = resolveServiceVisuals(service);

  return (
    <>
      <Navbar />
      <main>
        <ServiceJsonLd service={service} />
        <ServiceHero service={service} visuals={visuals} />
        <ServiceIntro service={service} visuals={visuals} />
        <BenefitsGrid service={service} />
        <ServiceProcess service={service} />
        <BeforeAfterShowcase service={service} visuals={visuals} />
        <ServiceGallery service={service} visuals={visuals} />
        <ServiceFAQ service={service} />
        <ServiceCTA service={service} visuals={visuals} />
        <RelatedServices service={service} />
      </main>
    </>
  );
}
