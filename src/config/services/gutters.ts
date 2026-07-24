import { serviceImageDirectories, type ServiceConfig } from "./types";

export const guttersService: ServiceConfig = {
  slug: "gutters", name: "Gutters", eyebrow: "Water management", heroTitle: "Water, Given a Clearer Path.", heroDescription: "Gutters are a precise edge system—quietly directing water where it needs to go while keeping the roofline composed.", heroIndicators: ["Roofline review", "Drainage planning", "Clean transitions"],
  theme: { id: "precision", heroAlignment: "start", introLayout: "image-right", benefitsLayout: "balanced", processLayout: "path", galleryLayout: "frames", accent: "#d8bd79" }, imageDirectories: serviceImageDirectories("gutters"),
  intro: { eyebrow: "The roofline in motion", title: "A simple system with an exacting role.", description: "Gutter planning is about more than the visible channel. Roof edges, downspout routes, transitions, and drainage direction all deserve a deliberate look.", supporting: "The goal is a clean, coordinated path that works with the property rather than against it." },
  benefits: { eyebrow: "Precision at the edge", title: "The details direct the flow.", description: "A careful look at rooflines and paths helps shape a more informed gutter plan.", items: [
    { id: "roofline", icon: "detail", title: "Roofline coordination", description: "Review the gutter direction with the fascia, roof edges, and surrounding exterior details.", detail: "The visible line should feel intentional." },
    { id: "routing", icon: "water", title: "Thoughtful routing", description: "Consider where water will travel after it leaves each roof area.", detail: "A clearer path from edge to ground." },
    { id: "scale", icon: "measure", title: "Proportional detail", description: "Evaluate profiles, downspout placement, and transitions in the context of the elevation.", detail: "Utility and appearance in the same view." },
    { id: "finish", icon: "finish", title: "Clean finishing", description: "Use the final details to keep the roofline composed and visually quiet.", detail: "A more resolved exterior edge." },
  ] },
  process: { eyebrow: "Follow the water", title: "A practical route from roof edge to drainage plan.", description: "The sequence stays focused on direction, connection, and the details that make the system feel integrated.", steps: [
    { id: "map", label: "01", icon: "measure", title: "Map the roofline", description: "Identify the roof edges, changes in direction, and exterior conditions that shape the plan." },
    { id: "route", label: "02", icon: "water", title: "Review the route", description: "Discuss downspout direction and the practical path for each collection area." },
    { id: "coordinate", label: "03", icon: "detail", title: "Coordinate details", description: "Align the visible components with fascia, siding, and other roofline elements." },
    { id: "finish", label: "04", icon: "finish", title: "Confirm the finish", description: "Review the completed lines, transitions, and overall composition." },
  ] },
  beforeAfter: { eyebrow: "Roofline refinement", title: "A cleaner line with a clearer purpose.", description: "Add approved comparison images to show the difference in roofline composition and water routing.", beforeLabel: "Existing edge", afterLabel: "Finished route" },
  gallery: { eyebrow: "Gutter details", title: "Project photography for edges, corners, and finished lines.", description: "This gallery is ready for wide elevations and close-up transition photography." },
  faq: { eyebrow: "Gutter questions", title: "The edge details are worth discussing.", description: "A review of the roofline and property conditions helps make the plan more specific.", items: [
    { id: "placement", question: "What affects downspout placement?", answer: "Roof geometry, collection areas, the exterior elevation, and the desired drainage path are useful factors to review together." },
    { id: "coordination", question: "Can gutters be planned alongside other exterior work?", answer: "Yes. Coordinating the roofline elements can make the final exterior feel more intentional and reduce disconnected decisions." },
    { id: "scope", question: "What should a gutter conversation include?", answer: "A helpful scope considers roof edges, direction changes, downspout routes, visible finish details, and the conditions around the property." },
  ] },
  cta: { eyebrow: "Clarify the route", title: "Start with the roofline and the paths that matter.", description: "Tell us about the exterior conditions or drainage questions you would like to discuss." }, relatedServices: ["roofing", "soffit-fascia", "siding"],
  seo: { title: "Gutter Services", description: "Explore CM Roofing's gutter planning and roofline coordination approach.", canonicalPath: "/services/gutters" },
};
