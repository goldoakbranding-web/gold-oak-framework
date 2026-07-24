import { serviceImageDirectories, type ServiceConfig } from "./types";

export const insuranceClaimsService: ServiceConfig = {
  slug: "insurance-claims", name: "Insurance Claims", eyebrow: "Claim guidance", heroTitle: "A More Grounded Way Through the Process.", heroDescription: "When an insurance conversation is part of an exterior project, clear documentation and a well-defined scope can make the process easier to follow.", heroIndicators: ["Project documentation", "Scope clarity", "Guidance context"],
  theme: { id: "guidance", heroAlignment: "center", introLayout: "image-left", benefitsLayout: "feature-first", processLayout: "rail", galleryLayout: "panorama", accent: "#ead7a3" }, imageDirectories: serviceImageDirectories("insurance-claims"),
  intro: { eyebrow: "Guidance with context", title: "Keep the project conversation clear.", description: "Insurance-related projects can introduce unfamiliar terminology and separate conversations. A clear record of the visible condition and proposed scope helps keep the project side understandable.", supporting: "This page is educational and is not insurance, legal, or financial advice. Policy questions should be directed to the appropriate insurer or qualified advisor." },
  benefits: { eyebrow: "A clearer project record", title: "Keep the details easier to follow.", description: "The goal is to create better context around the exterior work—not to replace the guidance of an insurer or advisor.", items: [
    { id: "observations", icon: "measure", title: "Specific observations", description: "Keep the discussion anchored to the visible exterior condition and areas under consideration.", detail: "A useful starting point for the project scope." },
    { id: "documentation", icon: "guide", title: "Organized documentation", description: "Use clear project records and approved imagery to make the work easier to reference.", detail: "Details that can be revisited later." },
    { id: "scope", icon: "layers", title: "Defined scope", description: "Clarify what the exterior project includes and the decisions that shape it.", detail: "A more legible project conversation." },
    { id: "confidence", icon: "shield", title: "Steadier next steps", description: "Separate the project decisions from policy questions so each can be handled in the right context.", detail: "Guidance without overreach." },
  ] },
  process: { eyebrow: "A guided path", title: "Keep each conversation in its right place.", description: "The process separates observation, documentation, project scope, and outside policy guidance.", steps: [
    { id: "review", label: "01", icon: "measure", title: "Review the condition", description: "Identify the exterior areas and visible conditions that are part of the project discussion." },
    { id: "document", label: "02", icon: "guide", title: "Organize the record", description: "Gather the available project documentation and approved photography in one clear reference." },
    { id: "scope", label: "03", icon: "layers", title: "Define the project scope", description: "Discuss the exterior work itself, materials, and the details that need a decision." },
    { id: "confirm", label: "04", icon: "shield", title: "Confirm next steps", description: "Keep insurer, policy, legal, and financial questions with the appropriate qualified source." },
  ] },
  beforeAfter: { eyebrow: "Project record", title: "A visual record of the project itself.", description: "Use approved images to document the exterior before work and the completed result, without making policy claims.", beforeLabel: "Project condition", afterLabel: "Completed work" },
  gallery: { eyebrow: "Documentation gallery", title: "Organized imagery for a clearer project record.", description: "This gallery is ready for approved exterior, detail, and completed-work photography." },
  faq: { eyebrow: "Insurance claim questions", title: "Keep project facts and policy guidance distinct.", description: "The answers below describe the project-planning side only and do not interpret insurance coverage.", items: [
    { id: "advice", question: "Can this page tell me what my policy covers?", answer: "No. Coverage, policy interpretation, and claim decisions should be discussed directly with the insurer or a qualified insurance, legal, or financial advisor." },
    { id: "documentation", question: "What project information is useful to organize?", answer: "Visible condition notes, approved project photographs, and a clear description of the exterior work being considered can help make the project conversation more specific." },
    { id: "scope", question: "Why separate the project scope from insurance questions?", answer: "It keeps the exterior work, materials, and installation decisions clear while policy questions remain with the appropriate source." },
  ] },
  cta: { eyebrow: "Bring order to the project side", title: "Start with the exterior questions you can clarify now.", description: "Share the property details and the project questions you would like to organize first." }, relatedServices: ["storm-damage", "roofing", "siding"],
  seo: { title: "Insurance Claim Guidance", description: "Explore CM Roofing's project documentation and scope-guidance approach for insurance-related exterior work.", canonicalPath: "/services/insurance-claims" },
};
