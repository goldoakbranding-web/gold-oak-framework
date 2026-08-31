import type { ServiceConfig, ServiceImage } from "./types";

const rooflineImage: ServiceImage = {
  src: "/images/services/soffit-fascia.jpg",
  alt: "Light-colored soffit and fascia details beneath intersecting residential rooflines",
  objectPosition: "50% 52%",
  mobileObjectPosition: "54% 51%",
  presentation: "detail",
};

export const soffitFasciaService: ServiceConfig = {
  slug: "soffit-fascia",
  name: "Soffit & Fascia",
  theme: {
    id: "craftsmanship",
    heroLayout: "editorial-left",
    heroAlignment: "start",
    introLayout: "text-only",
    optionsLayout: "list",
    processLayout: "path",
    galleryLayout: "frames",
    accent: "#ead7a3",
  },
  hero: {
    eyebrow: "Soffit & fascia installation",
    title: "Soffit & Fascia Built to Protect Your Home.",
    description:
      "Protect your roofline, improve ventilation, and give your exterior a clean finished look with professional aluminum soffit and fascia installation.",
    indicators: ["Ventilation planning", "Protected roof edges", "Coordinated exterior"],
    image: rooflineImage,
  },
  intro: {
    eyebrow: "Soffit & fascia",
    title: "The Details Beneath and Along Your Roof Edge Matter.",
    description:
      "Soffit finishes the underside of the eave and can provide intake ventilation. Fascia creates the visible face along the roof edge. Together, they help complete, protect, and visually coordinate the exterior.",
    supporting:
      "CM Roofing reviews both components with the surrounding roofing, gutters, siding, trim, and ventilation plan in view.",
  },
  options: {
    eyebrow: "Roofline services",
    title: "Installation, repair, replacement, and ventilation at the roof edge.",
    description: "The scope can focus on one condition or coordinate soffit and fascia with related exterior work.",
    items: [
      { id: "installation", title: "New Installation", description: "Plan new soffit and fascia with the roof edge, exterior finish, gutters, siding, and ventilation details in view." },
      { id: "repairs", title: "Repairs", description: "Review affected soffit, fascia, and adjoining roofline conditions before defining a focused repair." },
      { id: "replacement", title: "Replacement", description: "Replace defined soffit and fascia areas while coordinating transitions, gutters, siding, and trim." },
      { id: "ventilation", title: "Ventilation Improvements", description: "Review soffit intake details within the broader roof-ventilation plan before defining improvements." },
    ],
  },
  trust: {
    eyebrow: "Why choose CM Roofing",
    title: "A Strong Product Still Depends on Correct Installation.",
    description: "CM Roofing connects the product choice to the measurements, airflow, transitions, and finish details that shape the completed roofline.",
    items: [
      { id: "measure", title: "Proper measurements", description: "Define the eaves, fascia depths, transitions, and adjoining components before material planning begins." },
      { id: "ventilation", title: "Ventilation strategy", description: "Match soffit intake direction to the existing roof, eave construction, and available exhaust path." },
      { id: "details", title: "Roofline details", description: "Coordinate fascia, gutters, trim, and water-management transitions within the agreed scope." },
      { id: "finish", title: "Coordinated appearance", description: "Review profile and color direction with the home’s roofing, siding, trim, and fixed exterior materials." },
    ],
  },
  process: {
    eyebrow: "The soffit & fascia process",
    title: "Five steps to a more resolved roof edge.",
    description: "The sequence stays focused on condition, coordination, finish, installation, and review.",
    steps: [
      { id: "inspect", label: "01", icon: "measure", title: "Inspect", description: "Review the existing soffit, fascia, transitions, and nearby roofline components." },
      { id: "connect", label: "02", icon: "layers", title: "Connect", description: "Identify where ventilation, roofing, gutters, siding, or trim affect the scope." },
      { id: "select", label: "03", icon: "finish", title: "Select", description: "Confirm the material and finish direction for the visible roofline." },
      { id: "complete", label: "04", icon: "detail", title: "Complete", description: "Carry out the agreed soffit, fascia, and coordinated transition work." },
      { id: "review", label: "05", icon: "shield", title: "Review", description: "Look over the completed edges and the areas included in the project scope." },
    ],
  },
  faq: {
    eyebrow: "Soffit & fascia questions",
    title: "Plan the Product, Airflow, and Finish With Confidence.",
    description: "A few clear answers make it easier to compare profiles and understand how the roof-edge system works.",
    items: [
      { id: "difference", question: "What is the difference between soffit and fascia?", answer: "Soffit is the finished underside beneath the eave. Fascia is the visible face along the roof edge, often beside the gutter. They meet at the same roofline but serve different positions." },
      { id: "ventilation", question: "How does vented soffit support roof ventilation?", answer: "Vented soffit can provide an intake path for outside air at the eaves. That air can move through the attic or rafter space toward roof exhaust ventilation as part of a balanced system." },
      { id: "profiles", question: "How much ventilation do the Gentek profiles provide?", answer: "The supplied profile information lists 3.9 square inches per lineal foot for 12-inch T4 Center Vented, 11.6 for 12-inch T4 Fully Vented, and 7.8 for 16-inch Quad 4 Center Vented. The appropriate profile depends on the complete roof and ventilation plan." },
      { id: "colors", question: "Are all 18 colors available for every profile?", answer: "The swatches are coordination references. Product and color availability can vary by profile and project, so confirm the final combination with CM Roofing and a physical product sample before ordering." },
      { id: "upkeep", question: "What routine upkeep does aluminum soffit and fascia need?", answer: "Gentek aluminum soffit and fascia are designed for low routine maintenance. Most airborne dust and dirt can generally be removed with a simple garden-hose rinse." },
      { id: "warranty", question: "What does the Gentek warranty cover?", answer: "Gentek describes Hi-Tensile aluminum soffit and Deluxe fascia as backed by a lifetime limited, non-prorated, transferable manufacturer warranty. Eligibility, exclusions, transfer requirements, and all legal terms are governed by Gentek's official warranty documentation." },
    ],
  },
  estimate: {
    eyebrow: "Upgrade your roofline",
    title: "Plan a Durable, Coordinated Soffit & Fascia System.",
    description: "Whether you are replacing damaged soffit and fascia or completing a larger exterior renovation, CM Roofing can help you compare profiles, ventilation needs, and color direction for your home.",
    defaultService: "Soffit & Fascia",
    note: "Final product, profile, ventilation, and color availability is confirmed for the specific project before ordering.",
  },
  cta: {
    eyebrow: "Resolve the roofline",
    title: "Connect the underside, face, and adjoining exterior details.",
    description: "Start with the roof edges you are noticing and the work you want to coordinate.",
    image: rooflineImage,
  },
  relatedServices: ["gutters", "siding", "roofing"],
  seo: {
    title: "Soffit & Fascia Installation in Central Wisconsin",
    description: "Explore Gentek aluminum soffit and fascia installation, vented soffit profiles, roofline protection, colors, and replacement options from CM Roofing in Central Wisconsin.",
    canonicalPath: "/services/soffit-fascia",
    image: rooflineImage,
  },
};
