import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import ServiceArea from "@/components/sections/ServiceArea";
import Process from "@/components/sections/Process";
import RoofSystem from "@/components/sections/RoofSystem";
import RecentProjects from "@/components/sections/RecentProjects";
import FacebookUpdates from "@/components/sections/FacebookUpdates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustBar />

      <Services />

      <ServiceArea />

      <Process />

      <RoofSystem />

      <RecentProjects />

      <FacebookUpdates />

      <Contact />

      <Footer />
    </>
  );
}
