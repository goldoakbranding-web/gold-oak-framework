import type { ServiceConfig, ServiceImage } from "./types";

const sidingImage: ServiceImage = {
  src: "/images/services/siding.webp",
  alt: "Blue residential siding with white trim and stone accents",
  objectPosition: "52% 48%",
  mobileObjectPosition: "57% 48%",
};

export const sidingService: ServiceConfig = {
  slug: "siding",
  name: "Siding",
  theme: {
    id: "architectural",
    heroLayout: "editorial-right",
    heroAlignment: "end",
    introLayout: "text-only",
    optionsLayout: "columns",
    processLayout: "steps",
    galleryLayout: "panorama",
    accent: "#ead7a3",
  },
  hero: {
    eyebrow: "Residential & commercial siding",
    title: "Plan a Siding Update That Fits the Whole Property.",
    description:
      "CM Roofing installs vinyl and steel siding for replacement, upgrades, and new construction throughout Central Wisconsin.",
    indicators: ["Material direction", "Elevation planning", "Trim coordination"],
    image: sidingImage,
  },
  intro: {
    eyebrow: "An exterior system",
    title: "Choose the field material with the full home in view.",
    description:
      "The siding color gets attention first, but corners, openings, trim widths, transitions, and fixed materials shape the finished result. Reviewing each elevation helps those choices read as one design.",
    supporting:
      "Start with the roof, windows, masonry, and other fixed elements; they give the new siding palette useful boundaries.",
  },
  options: {
    eyebrow: "Siding services",
    title: "Installation, replacement, and upgrades for the exterior.",
    description: "Choose the material and project direction that fits the existing exterior, desired appearance, and planned scope.",
    items: [
      {
        id: "vinyl",
        title: "Vinyl Siding Installation",
        description: "Coordinate the siding profile, color, trim, openings, and transitions as part of the exterior plan.",
      },
      {
        id: "steel",
        title: "Steel Siding Installation",
        description: "Plan steel siding alongside the property's architecture, trim, openings, and adjacent exterior finishes.",
      },
      {
        id: "replacement",
        title: "Siding Replacement",
        description: "Review existing conditions and define the wall areas, removal, transitions, and finishing details included in the work.",
      },
      {
        id: "new-construction",
        title: "New Construction Siding",
        description: "Coordinate siding with openings, rooflines, trim, and the build schedule while the exterior is being planned.",
      },
      {
        id: "upgrades",
        title: "Siding Upgrades",
        description: "Update selected siding areas, trim, or exterior details within a clearly defined improvement scope.",
      },
    ],
  },
  trust: {
    eyebrow: "Why choose CM Roofing",
    title: "Keep design decisions connected to the installation scope.",
    description: "A focused process makes the visual choices and the work areas easier to understand before scheduling.",
    items: [
      { id: "elevations", title: "Elevation-by-elevation review", description: "Look beyond the front facade to the corners, openings, and transitions around the home." },
      { id: "palette", title: "Coordinated finish direction", description: "Consider siding, trim, roof, masonry, and other fixed elements in the same palette." },
      { id: "scope", title: "Defined work areas", description: "Clarify the elevations and exterior details included in the siding scope." },
      { id: "communication", title: "Project communication", description: "Keep material decisions and preparation details visible as the project moves toward installation." },
    ],
  },
  process: {
    eyebrow: "The siding process",
    title: "From existing elevations to a finished exterior.",
    description: "Five steps keep material choices, scope, preparation, and finishing details aligned.",
    steps: [
      { id: "review", label: "01", icon: "measure", title: "Review", description: "Walk the elevations and note existing materials, openings, transitions, and areas of concern." },
      { id: "select", label: "02", icon: "finish", title: "Select", description: "Compare material, profile, color, and trim directions with the whole exterior in view." },
      { id: "scope", label: "03", icon: "guide", title: "Define", description: "Confirm the wall areas, removal, preparation, and finishing details included in the project." },
      { id: "install", label: "04", icon: "layers", title: "Install", description: "Complete the agreed siding work and its coordinated corner, opening, and transition details." },
      { id: "walkthrough", label: "05", icon: "shield", title: "Walk through", description: "Review the completed elevations and the items included in the project scope." },
    ],
  },
  faq: {
    eyebrow: "Siding questions",
    title: "Plan the exterior with context.",
    description: "Material and design decisions are most useful when they are tied to the actual elevations and scope.",
    items: [
      { id: "materials", question: "Can I discuss both vinyl and steel siding?", answer: "Yes. The conversation can compare those material directions in the context of the home's design, existing exterior, desired finish, and project scope." },
      { id: "color", question: "How should siding and trim colors be selected?", answer: "Start with fixed elements such as the roof, masonry, and windows, then review how the field and trim colors work across each elevation and in changing light." },
      { id: "details", question: "Which details belong in a siding scope?", answer: "The wall areas, corners, openings, trim, material transitions, removal, preparation, and nearby roofline details are all useful items to clarify." },
      { id: "coordinate", question: "Can siding be planned with soffit, fascia, or gutters?", answer: "Yes. Reviewing related roofline elements together can reduce disconnected color, transition, and scheduling decisions." },
      { id: "warranties", question: "What siding warranties may apply?", answer: "CM Roofing provides a 5-year workmanship warranty. Many siding products include manufacturer-backed warranties of approximately 30 years, depending on the selected product, manufacturer terms, registration, and installation requirements. The workmanship and manufacturer warranties should be reviewed separately." },
    ],
  },
  estimate: {
    eyebrow: "Plan the elevations",
    title: "Request a siding estimate.",
    description: "Share which parts of the exterior you want to update and any material or color direction already in mind.",
    defaultService: "Siding",
  },
  cta: {
    eyebrow: "Shape the whole exterior",
    title: "Bring the elevations into one focused plan.",
    description: "Start with the materials, work areas, and design questions that matter to your home.",
    image: sidingImage,
  },
  relatedServices: ["soffit-fascia", "gutters", "roofing"],
  seo: {
    title: "Siding Installation & Replacement",
    description: "Explore vinyl and steel siding installation, siding replacement, upgrades, and new-construction siding throughout Central Wisconsin.",
    canonicalPath: "/services/siding",
    image: sidingImage,
  },
};
