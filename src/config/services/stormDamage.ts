import { serviceImageDirectories, type ServiceConfig } from "./types";

export const stormDamageService: ServiceConfig = {
  slug: "storm-damage", name: "Storm Damage", eyebrow: "Storm assessment", heroTitle: "When the Weather Changes the Conversation.", heroDescription: "After a storm, a clear assessment can help you move from uncertainty toward a more informed next step without adding unnecessary pressure.", heroIndicators: ["Condition review", "Clear documentation", "Next-step guidance"],
  theme: { id: "response", heroAlignment: "start", introLayout: "image-right", benefitsLayout: "balanced", processLayout: "path", galleryLayout: "masonry", accent: "#d8bd79" }, imageDirectories: serviceImageDirectories("storm-damage"),
  intro: { eyebrow: "A calmer first step", title: "Start by understanding what changed.", description: "Storm concerns can be hard to interpret from the ground. A focused review of the roof and exterior helps establish what is visible, what needs closer attention, and what questions come next.", supporting: "The purpose is clarity—not a rushed conclusion." },
  benefits: { eyebrow: "A more informed response", title: "Information first, pressure last.", description: "A thoughtful storm-damage conversation should make the condition and the options easier to understand.", items: [
    { id: "review", icon: "measure", title: "Focused condition review", description: "Look at the roof and exterior areas where a storm may have changed the visible condition.", detail: "Start with what can be observed and documented." },
    { id: "document", icon: "guide", title: "Clear documentation", description: "Organize observations so the next conversation has a practical reference point.", detail: "A record of what is being considered." },
    { id: "scope", icon: "layers", title: "Scope perspective", description: "Discuss possible work in the context of the whole affected area rather than isolated symptoms.", detail: "A broader view of the exterior." },
    { id: "direction", icon: "shield", title: "Measured direction", description: "Use the assessment to determine the next reasonable step for the property.", detail: "Clarity before commitment." },
  ] },
  process: { eyebrow: "A clear response", title: "Move from observation to next steps.", description: "The sequence gives each question a place so the process feels organized even when the situation does not.", steps: [
    { id: "observe", label: "01", icon: "measure", title: "Observe the condition", description: "Review the areas of concern and the exterior details that may need closer attention." },
    { id: "record", label: "02", icon: "guide", title: "Record the findings", description: "Organize the visible observations and photographs available for the discussion." },
    { id: "discuss", label: "03", icon: "layers", title: "Discuss the scope", description: "Talk through the work being considered and the questions that remain open." },
    { id: "next", label: "04", icon: "shield", title: "Choose a next step", description: "Use the available information to move forward at an appropriate pace." },
  ] },
  beforeAfter: { eyebrow: "Condition context", title: "Document the condition and the finished work.", description: "Add approved project imagery to show the exterior condition before work and the completed result afterward.", beforeLabel: "Documented condition", afterLabel: "Completed exterior" },
  gallery: { eyebrow: "Storm-damage projects", title: "Photography for conditions, details, and completed work.", description: "This gallery is prepared for approved inspection and project documentation." },
  faq: { eyebrow: "Storm questions", title: "Start with the questions that bring clarity.", description: "Every storm and property condition is different, so a review should guide the next conversation.", items: [
    { id: "first", question: "What should I do first after noticing a possible storm concern?", answer: "Begin by noting the areas you are concerned about and arranging a focused review. Avoid assuming the scope before the condition has been assessed." },
    { id: "documentation", question: "Why is documentation helpful?", answer: "Clear notes and approved photographs can make later conversations easier to follow and help keep the condition being discussed specific." },
    { id: "scope", question: "Can storm concerns affect more than the roof?", answer: "Depending on the event and property, it may be useful to look at multiple exterior elements and the transitions between them." },
  ] },
  cta: { eyebrow: "Start with clarity", title: "Bring the storm questions into focus.", description: "Tell us what you observed and which exterior areas you would like to discuss first." }, relatedServices: ["insurance-claims", "roofing", "gutters"],
  seo: { title: "Storm Damage Services", description: "Explore CM Roofing's storm-damage assessment and project-planning approach.", canonicalPath: "/services/storm-damage" },
};
