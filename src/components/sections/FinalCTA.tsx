import FinalCTAContent from "@/components/cta/FinalCTAContent";
import { business } from "@/config/business";
import { finalCtaConfig } from "@/config/finalCTA";
import { resolveHomepageBackground } from "@/lib/backgrounds";

export default function FinalCTA() {
  const background = resolveHomepageBackground("finalCTA");

  return <section id="estimate"><FinalCTAContent background={background} business={business} config={finalCtaConfig} /></section>;
}
