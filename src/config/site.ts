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

    website: "https://cmroofing.com",

    facebook: "https://facebook.com/cmroofing",
  },

  hero: {
    title: "Roofing Built To Last",

    subtitle:
      "Premium roofing, siding, gutters, soffit & fascia installations built to protect Wisconsin homes for decades.",

    primaryButton: "Get Free Estimate",

    secondaryButton: "View Projects",
  },

  services: [
    "Roof Replacement",
    "Roof Repair",
    "Storm Damage",
    "Asphalt Roofing",
    "Metal Roofing",
    "Siding",
    "Gutters",
    "Soffit & Fascia",
  ],

  stats: {
    roofs: "1000+",
    experience: "20+",
    reviews: "5★",
    warranty: "Lifetime",
  },
};
