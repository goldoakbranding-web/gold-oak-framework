import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import RoofSystem from "@/components/sections/RoofSystem";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustBar />

      <Services />

      <RoofSystem />

      <WhyChoose />

      <Testimonials />

      <Process />

      <FinalCTA />

      <Contact />
    </>
  );
}
