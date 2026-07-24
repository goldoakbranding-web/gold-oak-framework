import { serviceImageDirectories, type ServiceConfig } from "./types";

export const sidingService: ServiceConfig = {
  slug: "siding",
  name: "Siding",
  eyebrow: "Exterior cladding",
  heroTitle: "A Cleaner Envelope, Considered From Every Angle.",
  heroDescription: "Siding shapes the way a home reads from the street while helping define how its exterior layers are planned together.",
  heroIndicators: ["Elevation planning", "Color direction", "Trim details"],
  theme: { id: "architectural", heroAlignment: "end", introLayout: "image-left", benefitsLayout: "editorial", processLayout: "steps", galleryLayout: "panorama", accent: "#ead7a3" },
  imageDirectories: serviceImageDirectories("siding"),
  intro: { eyebrow: "An exterior composition", title: "The finish is part of the architecture.", description: "Siding choices influence proportion, shadow lines, color relationships, and the details around openings and rooflines.", supporting: "A focused plan makes it easier to see how materials and details work as one exterior composition." },
  benefits: {
    eyebrow: "Designed to work together", title: "Better curb appeal starts with better coordination.", description: "The strongest exterior updates consider the field, trim, transitions, and surrounding details together.",
    items: [
      { id: "elevations", icon: "measure", title: "Elevation awareness", description: "Review the home from multiple viewpoints before committing to a direction.", detail: "A broader view of proportion and rhythm." },
      { id: "palette", icon: "finish", title: "Color relationships", description: "Consider siding, trim, roof, and accent colors as a coordinated palette.", detail: "A clear exterior language." },
      { id: "transitions", icon: "detail", title: "Purposeful transitions", description: "Give corners, openings, and material changes the same attention as large wall planes.", detail: "The edge details carry the composition." },
      { id: "envelope", icon: "layers", title: "Layered exterior thinking", description: "Discuss the visible finish in the context of the exterior assembly behind it.", detail: "A plan that sees beyond the surface." },
    ],
  },
  process: { eyebrow: "A visual path", title: "Move from elevation to finish with intent.", description: "The process balances the architectural questions first, then refines the visible details.", steps: [
    { id: "observe", label: "01", icon: "measure", title: "Read the elevations", description: "Look at proportion, existing elements, and the parts of the exterior that frame the home." },
    { id: "compose", label: "02", icon: "finish", title: "Build a palette", description: "Compare field, trim, and accent directions in the context of the full exterior." },
    { id: "detail", label: "03", icon: "detail", title: "Refine the edges", description: "Review corners, openings, roofline transitions, and the details that finish the composition." },
    { id: "review", label: "04", icon: "shield", title: "Review the plan", description: "Confirm the project direction before moving into installation scheduling and preparation." },
  ] },
  beforeAfter: { eyebrow: "Exterior transformation", title: "A new exterior, seen as a whole.", description: "Reserve this comparison for approved views that show how finish, trim, and proportion come together.", beforeLabel: "Existing elevation", afterLabel: "Refined exterior" },
  gallery: { eyebrow: "Siding work", title: "Space for the full elevation and the fine details.", description: "Add approved exterior, trim, and close-detail photography as projects are documented." },
  faq: { eyebrow: "Siding questions", title: "Make the visual decisions with context.", description: "A useful conversation should connect style preferences with the home's existing architecture.", items: [
    { id: "color", question: "How should I approach siding and trim color selection?", answer: "Begin with the home's fixed elements and the way each elevation receives light. Comparing the palette together provides more useful context than choosing a field color in isolation." },
    { id: "scope", question: "What exterior details should be part of the discussion?", answer: "Openings, corners, rooflines, trim transitions, and any adjacent materials are all worth reviewing as part of the overall composition." },
    { id: "planning", question: "Can the project be planned around a specific design direction?", answer: "Yes. The desired character of the exterior can guide the conversation while practical material and detail choices are considered." },
  ] },
  cta: { eyebrow: "Shape the exterior", title: "Bring a clearer design direction to the first conversation.", description: "Share the elevations, materials, or visual questions that matter most to your project." },
  relatedServices: ["soffit-fascia", "gutters", "roofing"],
  seo: { title: "Siding Services", description: "Explore CM Roofing's exterior siding planning and design approach.", canonicalPath: "/services/siding" },
};
