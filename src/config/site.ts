import { business } from "./business";

/** @deprecated Prefer the typed `business` configuration for all new UI and server code. */
export const siteConfig = {
  company: {
    name: business.name,
    tagline: "Roofing Built To Last",
    description:
      `${business.category} based in ${business.city}, ${business.state}.`,

    phone: business.phone.value,
    email: business.email.value,

    address: business.address.value,

    website: business.siteUrl,

    facebook: business.socialLinks.find((link) => link.label === "Facebook")?.href,
  },

  hero: {
    title: "Roofing Built To Last",

    subtitle:
      "Roofing, siding, gutters, soffit, and fascia services for homes and businesses throughout Central Wisconsin.",

    primaryButton: "Get Free Estimate",

    secondaryButton: "View Projects",
  },

  services: [
    "Roof Replacement",
    "Roof Repair",
    "Commercial Roofing",
    "New Construction Roofing",
    "Storm Damage",
    "Asphalt Roofing",
    "Metal Roofing",
    "Siding",
    "Gutters",
    "Soffit & Fascia",
  ],

  stats: {
    projects: "150+",
    credentials: "Licensed & Insured",
    estimates: "Free",
    warranty: "5-Year Workmanship",
  },
};
