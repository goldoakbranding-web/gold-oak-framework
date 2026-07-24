import ContactDetails from "@/components/contact/ContactDetails";
import EstimateForm from "@/components/contact/EstimateForm";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { business } from "@/config/business";
import { contactConfig } from "@/config/contact";
import { resolveHomepageBackground } from "@/lib/backgrounds";

export default function Contact() {
  const background = resolveHomepageBackground("contact");

  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-[#080807] py-28 sm:py-36 lg:py-44" id="contact">
      <div className="pointer-events-none absolute inset-0 opacity-[.28] [background-image:linear-gradient(rgba(255,255,255,.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.032)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute -left-64 top-1/4 h-[620px] w-[620px] rounded-full bg-[#d8bd79]/[.05] blur-[180px]" />
      <div className="pointer-events-none absolute -right-64 bottom-0 h-[700px] w-[700px] rounded-full bg-white/[.025] blur-[180px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/50 to-transparent" />
      <SectionAtmosphere background={background} variant="contact" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,.9fr)_minmax(430px,.88fr)] lg:gap-20 xl:gap-28">
          <ContactDetails business={business} config={contactConfig} />
          <EstimateForm config={contactConfig} />
        </div>
      </div>
    </section>
  );
}
