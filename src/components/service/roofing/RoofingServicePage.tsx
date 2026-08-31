import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import ServiceEstimate from "@/components/service/ServiceEstimate";
import ServiceGallery from "@/components/service/ServiceGallery";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceJsonLd from "@/components/service/ServiceJsonLd";
import { roofingService } from "@/config/services/roofing";
import RoofingFAQ from "./RoofingFAQ";
import RoofingIntroTrust from "./RoofingIntroTrust";
import RoofingProcess from "./RoofingProcess";
import RoofingServiceArea from "./RoofingServiceArea";
import RoofingShingleSelector from "./RoofingShingleSelector";
import RoofingServiceTypes from "./RoofingServiceTypes";
import RoofingTransformation from "./RoofingTransformation";

export default function RoofingServicePage() {
  return (
    <>
      <Navbar estimateHref="#service-estimate" />
      <ServiceJsonLd service={roofingService} />
      <main className="overflow-clip bg-[#0a0a09] [font-family:var(--font-inter)]">
        <ServiceHero service={roofingService} />
        <RoofingIntroTrust />
        <RoofingServiceArea />
        <RoofingServiceTypes />
        <RoofingShingleSelector />
        <RoofingProcess />
        <RoofingTransformation />
        <ServiceGallery service={roofingService} />
        <RoofingFAQ />
        <ServiceEstimate service={roofingService} />
      </main>
      <Footer />
    </>
  );
}
