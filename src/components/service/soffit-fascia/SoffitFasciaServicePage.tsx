import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import ServiceEstimate from "@/components/service/ServiceEstimate";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceIntro from "@/components/service/ServiceIntro";
import ServiceJsonLd from "@/components/service/ServiceJsonLd";
import ServiceTrust from "@/components/service/ServiceTrust";
import { soffitFasciaService } from "@/config/services/soffitFascia";
import SoffitFasciaOverview from "./SoffitFasciaOverview";
import SoffitFasciaPerformance from "./SoffitFasciaPerformance";
import SoffitFasciaProductSelector from "./SoffitFasciaProductSelector";
import SoffitFasciaProtection from "./SoffitFasciaProtection";
import SoffitVentilation from "./SoffitVentilation";

export default function SoffitFasciaServicePage() {
  return (
    <>
      <Navbar estimateHref="#service-estimate" />
      <ServiceJsonLd service={soffitFasciaService} />
      <main className="overflow-clip bg-[#0a0a09] [font-family:var(--font-inter)]">
        <ServiceHero service={soffitFasciaService} />
        <ServiceIntro service={soffitFasciaService} />
        <SoffitFasciaOverview />
        <SoffitFasciaProductSelector />
        <SoffitFasciaPerformance />
        <SoffitVentilation />
        <SoffitFasciaProtection />
        <ServiceTrust service={soffitFasciaService} />
        <ServiceFAQ service={soffitFasciaService} />
        <ServiceEstimate service={soffitFasciaService} />
      </main>
      <Footer />
    </>
  );
}
