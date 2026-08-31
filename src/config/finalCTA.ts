export type FinalCtaTrustItem = {
  id: string;
  label: string;
  isVerified: boolean;
};

export type FinalCtaConfig = {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: {
    label: string;
    href: "#contact";
  };
  secondaryCta: {
    label: string;
    unavailableLabel: string;
  };
  trustItems: FinalCtaTrustItem[];
  verificationNote: string;
};

export const finalCtaConfig: FinalCtaConfig = {
  eyebrow: "Ready to get started?",
  headline: "Ready to Protect Your Home?",
  description:
    `Whether you need a roof replacement, storm damage inspection, or expert guidance, ${business.name} is ready to help. Request your free estimate and take the first step toward lasting protection.`,
  primaryCta: {
    label: "Get My Free Estimate",
    href: "#contact",
  },
  secondaryCta: {
    label: "Call Now",
    unavailableLabel: "Call option pending verified phone number",
  },
  trustItems: [
    { id: "free-estimates", label: "Free Estimates", isVerified: true },
    { id: "licensed-insured", label: "Fully Licensed & Insured", isVerified: true },
    { id: "workmanship-warranty", label: "5-Year Workmanship Warranty", isVerified: true },
  ],
  verificationNote: "Manufacturer warranty terms vary by selected product and manufacturer requirements.",
};
import { business } from "./business";
