import { serviceImageDirectories, type ServiceConfig } from "./types";

export const soffitFasciaService: ServiceConfig = {
  slug: "soffit-fascia", name: "Soffit & Fascia", eyebrow: "Roofline finishing", heroTitle: "The Details That Give the Roofline Its Finish.", heroDescription: "Soffit and fascia shape the quiet details beneath the roof edge—where protection, ventilation, and a refined exterior meet.", heroIndicators: ["Roofline details", "Ventilation context", "Exterior finish"],
  theme: { id: "craftsmanship", heroAlignment: "end", introLayout: "image-left", benefitsLayout: "editorial", processLayout: "steps", galleryLayout: "frames", accent: "#ead7a3" }, imageDirectories: serviceImageDirectories("soffit-fascia"),
  intro: { eyebrow: "A finished edge", title: "The roofline is a composition of small decisions.", description: "The underside of the roof edge and the board that frames it can carry both visual and functional importance. These details deserve attention in the broader exterior plan.", supporting: "When they are considered alongside roofing, siding, and gutters, the exterior reads as one coordinated whole." },
  benefits: { eyebrow: "Craft at the edge", title: "Quiet details, made more intentional.", description: "The most refined exterior work is often felt in the parts that do not demand attention.", items: [
    { id: "finish", icon: "finish", title: "Composed rooflines", description: "Review the edges that frame the home and the details that keep them visually consistent.", detail: "A cleaner transition from roof to wall." },
    { id: "ventilation", icon: "layers", title: "Ventilation context", description: "Discuss the soffit within the larger ventilation conversation for the roof assembly.", detail: "One part of a connected system." },
    { id: "coordination", icon: "detail", title: "Coordinated materials", description: "Consider fascia, gutters, siding, and roof edges together instead of as isolated finishes.", detail: "The line stays coherent from elevation to elevation." },
    { id: "inspection", icon: "measure", title: "Closer observation", description: "Use the planning phase to look at the existing roofline, transitions, and visible conditions.", detail: "A more informed start to the scope." },
  ] },
  process: { eyebrow: "Detail by detail", title: "A considered route to a more resolved roofline.", description: "The process keeps the finish details connected to the wider exterior conversation.", steps: [
    { id: "observe", label: "01", icon: "measure", title: "Inspect the edge", description: "Review the existing roofline, visible transitions, and areas that need attention." },
    { id: "connect", label: "02", icon: "layers", title: "Connect the systems", description: "Discuss the relationship between soffit, fascia, roofing, ventilation, and gutters." },
    { id: "select", label: "03", icon: "finish", title: "Refine the finish", description: "Consider colors, profiles, and detail choices in the context of the full elevation." },
    { id: "review", label: "04", icon: "detail", title: "Review the line", description: "Look at the finished roofline as a complete exterior composition." },
  ] },
  beforeAfter: { eyebrow: "Roofline detail", title: "A small change with a whole-home effect.", description: "Use approved close-detail and elevation photography to show how the finished edge refines the exterior.", beforeLabel: "Existing roofline", afterLabel: "Refined edge" },
  gallery: { eyebrow: "Detail gallery", title: "Space for the details that usually go unseen.", description: "Add soffit, fascia, vent, and finished roofline photography as projects are documented." },
  faq: { eyebrow: "Soffit & fascia questions", title: "A closer look at the roofline.", description: "The most useful answer depends on the existing exterior and how the roofline connects to nearby work.", items: [
    { id: "difference", question: "What is the difference between soffit and fascia?", answer: "Soffit is the finished underside at the roof edge, while fascia is the board or visible face at the roofline. Both are worth considering as part of the same exterior detail." },
    { id: "coordination", question: "Should this work be coordinated with gutters or roofing?", answer: "It can be helpful to review roofline elements together, especially where visible transitions and water-management details meet." },
    { id: "visual", question: "How do these details affect the exterior appearance?", answer: "They frame the roof edge and can influence how cleanly the roof, siding, trim, and gutters read together from the street." },
  ] },
  cta: { eyebrow: "Refine the edge", title: "Bring the roofline into the larger exterior plan.", description: "Share the details you are noticing so the first conversation can focus on the areas that matter most." }, relatedServices: ["gutters", "siding", "roofing"],
  seo: { title: "Soffit & Fascia Services", description: "Explore CM Roofing's soffit and fascia planning and roofline detail approach.", canonicalPath: "/services/soffit-fascia" },
};
