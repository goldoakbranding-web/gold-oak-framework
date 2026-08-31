import type { ServiceConfig, ServiceImage } from "./types";

const projectContextImage: ServiceImage = {
  src: "/images/projects/project-2.jpg",
  alt: "Residential roofing crew working during a shingle tear-off",
  objectPosition: "50% 44%",
  mobileObjectPosition: "47% 48%",
  caption: "Roofing project context; the photograph is not presented as evidence of a particular insurance claim.",
};

const documentationImage: ServiceImage = {
  src: "/images/projects/project-4.jpg",
  alt: "Overhead view documenting a residential roof stripped to the wood deck",
  objectPosition: "50% 50%",
  mobileObjectPosition: "51% 50%",
  caption: "Roofing project context; the photograph is not presented as evidence from a particular insurance claim.",
};

export const insuranceClaimsService: ServiceConfig = {
  slug: "insurance-claims",
  name: "Insurance Claim Assistance",
  theme: {
    id: "guidance",
    heroLayout: "editorial-right",
    heroAlignment: "center",
    introLayout: "text-only",
    optionsLayout: "list",
    processLayout: "rail",
    galleryLayout: "panorama",
    accent: "#ead7a3",
  },
  hero: {
    eyebrow: "Insurance claim assistance",
    title: "Clear Roofing Documentation When Insurance Is Involved.",
    description:
      "CM Roofing helps Central Wisconsin property owners organize visible conditions and a defined roofing or exterior work scope while the insurer determines coverage.",
    indicators: ["Condition record", "Project scope", "Completion documentation"],
    image: projectContextImage,
  },
  intro: {
    eyebrow: "Project facts in their proper place",
    title: "Separate construction decisions from policy decisions.",
    description:
      "CM Roofing can discuss visible exterior conditions, project photographs, proposed work, materials, and completion details. Your insurer determines coverage and claim outcomes, and qualified advisors should handle policy, legal, and financial questions.",
    supporting:
      "The photographs on this page document roofing work generally. They are not presented as evidence from a particular insurance claim.",
  },
  options: {
    eyebrow: "Project-side assistance",
    title: "Organize the exterior work without overstepping the policy.",
    description: "The service remains centered on the property condition and the construction scope.",
    items: [
      { id: "condition", title: "Condition documentation", description: "Record the visible roof or exterior areas under discussion with clear notes and relevant project photographs." },
      { id: "scope", title: "Exterior project scope", description: "Define the proposed work, materials, work areas, and project decisions in construction terms." },
      { id: "completion", title: "Completion record", description: "Keep a clear record of the agreed project work and the completed exterior scope." },
    ],
  },
  trust: {
    eyebrow: "Why choose CM Roofing",
    title: "A construction-focused record with clear boundaries.",
    description: "Keeping each question with the right party makes the project easier to understand.",
    items: [
      { id: "facts", title: "Property-specific observations", description: "Anchor the project conversation to the visible conditions and work areas under review." },
      { id: "record", title: "Organized documentation", description: "Keep relevant project notes, photographs, and scope details in a clearer record." },
      { id: "scope", title: "Construction scope clarity", description: "Describe proposed exterior work without interpreting coverage or predicting a claim decision." },
      { id: "boundaries", title: "Appropriate boundaries", description: "Direct policy, coverage, legal, and financial questions to the insurer or another qualified advisor." },
    ],
  },
  process: {
    eyebrow: "The project-documentation process",
    title: "Five steps that stay on the construction side.",
    description: "Condition, records, scope, work, and completion each have a distinct place.",
    steps: [
      { id: "review", label: "01", icon: "measure", title: "Review", description: "Identify the roof or exterior conditions and areas included in the project conversation." },
      { id: "record", label: "02", icon: "guide", title: "Record", description: "Organize relevant observations and project photographs as a factual reference." },
      { id: "scope", label: "03", icon: "layers", title: "Define", description: "Clarify the proposed exterior work, materials, work areas, and project decisions." },
      { id: "complete", label: "04", icon: "shield", title: "Complete", description: "Carry out the exterior work that is authorized and included in the agreed project scope." },
      { id: "document", label: "05", icon: "finish", title: "Document", description: "Review the completed work and retain the relevant project-side completion record." },
    ],
  },
  faq: {
    eyebrow: "Insurance-related questions",
    title: "Keep project facts and policy guidance distinct.",
    description: "These answers explain CM Roofing's construction role and do not interpret coverage.",
    items: [
      { id: "coverage", question: "Can CM Roofing tell me what my policy covers?", answer: "No. Coverage, policy interpretation, claim decisions, and payment questions should be discussed with your insurer or an appropriately qualified insurance, legal, or financial advisor." },
      { id: "decision", question: "Does a roofing assessment approve an insurance claim?", answer: "No. A roofing assessment can document visible property conditions and help define proposed construction work. The insurer is responsible for its own claim and coverage decisions." },
      { id: "records", question: "What project information can be organized?", answer: "Visible condition notes, relevant project photographs, work areas, proposed materials, scope details, and completion information can be kept together as a construction record." },
      { id: "questions", question: "Who should answer policy or legal questions?", answer: "Direct policy and coverage questions to the insurer. Legal, financial, or insurance advice should come from an appropriately qualified professional." },
    ],
  },
  estimate: {
    eyebrow: "Clarify the construction questions",
    title: "Request insurance claim assistance.",
    description: "Share the affected exterior areas and the construction information you want to organize.",
    defaultService: "Insurance Claim Assistance",
    note: "CM Roofing does not determine coverage, represent your insurer, or provide legal, financial, or insurance advice.",
  },
  cta: {
    eyebrow: "Keep a clearer project record",
    title: "Define the exterior work one factual step at a time.",
    description: "Start with the visible conditions and construction questions that need to be organized.",
    image: documentationImage,
  },
  relatedServices: ["storm-damage", "roofing", "siding"],
  seo: {
    title: "Insurance Claim Assistance",
    description: "Organize exterior condition documentation, construction scopes, and completion records throughout Central Wisconsin while the insurer determines coverage.",
    canonicalPath: "/services/insurance-claims",
    image: projectContextImage,
  },
};
