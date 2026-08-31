import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import type { ServiceConfig } from "@/config/services";
import type { ReactNode } from "react";
import RelatedServices from "./RelatedServices";
import ServiceEstimate from "./ServiceEstimate";
import ServiceFAQ from "./ServiceFAQ";
import ServiceGallery from "./ServiceGallery";
import ServiceHero from "./ServiceHero";
import ServiceIntro from "./ServiceIntro";
import ServiceJsonLd from "./ServiceJsonLd";
import ServiceOptions from "./ServiceOptions";
import ServiceProcess from "./ServiceProcess";
import ServiceProjectStory from "./ServiceProjectStory";
import ServiceTrust from "./ServiceTrust";

type ServicePageProps = {
  service: ServiceConfig;
  afterOptions?: ReactNode;
};

export default function ServicePage({ service, afterOptions }: ServicePageProps) {
  return (
    <>
      <Navbar estimateHref="#service-estimate" />
      <ServiceJsonLd service={service} />
      <main className="overflow-clip bg-[#0a0a09] [font-family:var(--font-inter)]">
        <ServiceHero service={service} />
        <ServiceIntro service={service} />
        <ServiceOptions service={service} />
        {afterOptions}
        <ServiceProjectStory service={service} />
        <ServiceTrust service={service} />
        <ServiceProcess service={service} />
        <ServiceGallery service={service} />
        <ServiceFAQ service={service} />
        <RelatedServices service={service} />
        <ServiceEstimate service={service} />
      </main>
      <Footer />
    </>
  );
}
