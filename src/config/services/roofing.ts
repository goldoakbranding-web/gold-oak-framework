import { serviceImageDirectories, type ServiceConfig } from "./types";

export const roofingService: ServiceConfig = {
  slug: "roofing",
  name: "Roofing",
  eyebrow: "Residential roofing",
  heroTitle: "Roofing That Carries the Whole Home.",
  heroDescription:
    "A roof is more than the finish you see from the street. We help you understand the layers, transitions, and decisions that shape dependable protection.",
  heroIndicators: ["System planning", "Material options", "Detailed scope"],
  theme: {
    id: "engineering",
    heroAlignment: "start",
    introLayout: "image-right",
    benefitsLayout: "feature-first",
    processLayout: "rail",
    galleryLayout: "masonry",
    accent: "#d8bd79",
  },
  imageDirectories: serviceImageDirectories("roofing"),
  intro: {
    eyebrow: "The roof as a system",
    title: "Every layer has a job to do.",
    description:
      "A thoughtful roofing conversation begins below the shingles. Deck condition, water management, ventilation, flashing, and edge details all influence how the finished roof performs together.",
    supporting:
      "We use the inspection and planning phase to make those decisions easier to see before work begins.",
  },
  benefits: {
    eyebrow: "Why the details matter",
    title: "Protection is built at the transitions.",
    description: "The areas where materials meet are often where a roofing plan earns its value.",
    items: [
      { id: "assembly", icon: "layers", title: "System-minded planning", description: "Consider the roof as connected layers instead of isolated products.", detail: "A clearer way to discuss the full assembly." },
      { id: "water", icon: "water", title: "Water management", description: "Review the paths water takes at valleys, penetrations, edges, and transitions.", detail: "Small directional details can shape the whole plan." },
      { id: "ventilation", icon: "shield", title: "Balanced protection", description: "Discuss ventilation and material compatibility as part of the same conversation.", detail: "Performance depends on how the components work together." },
      { id: "scope", icon: "measure", title: "Visible scope", description: "Use a detailed scope to make the project easier to evaluate before installation.", detail: "Clear decisions before the work starts." },
    ],
  },
  process: {
    eyebrow: "A deliberate sequence",
    title: "From roof condition to finished system.",
    description: "A structured path helps keep technical choices, material selection, and installation details in view.",
    steps: [
      { id: "review", label: "01", icon: "measure", title: "Condition review", description: "Start with the roof, its transitions, and the questions that matter to your property." },
      { id: "plan", label: "02", icon: "layers", title: "System plan", description: "Build a scope that connects materials, water protection, ventilation, and finishing details." },
      { id: "select", label: "03", icon: "finish", title: "Material direction", description: "Compare colors, profiles, and components in the context of the complete roof." },
      { id: "complete", label: "04", icon: "shield", title: "Final review", description: "Walk through the completed work and the details that were part of the plan." },
    ],
  },
  beforeAfter: {
    eyebrow: "Project transformation",
    title: "See the change in context.",
    description: "Add approved project photography later to compare the existing condition with the finished roofing system.",
    beforeLabel: "Before planning",
    afterLabel: "Finished system",
  },
  gallery: { eyebrow: "Roofing projects", title: "Project imagery, ready when approved.", description: "This gallery is prepared for completed roof, detail, and in-progress photography." },
  faq: {
    eyebrow: "Roofing questions",
    title: "The questions worth asking early.",
    description: "Answers should be tailored to the roof condition, material choice, and project scope.",
    items: [
      { id: "replace", question: "How do I know whether to explore repair or replacement?", answer: "The right direction depends on the roof condition, the location of concerns, and the broader system. An inspection is the best place to begin that conversation." },
      { id: "materials", question: "Can I compare material options before choosing a direction?", answer: "Yes. Material, color, profile, and system components can be reviewed together so the decision is not limited to a single visible product." },
      { id: "scope", question: "What should a roofing scope address?", answer: "A useful scope explains the roof areas being considered, the materials involved, and the details that shape transitions, protection, and finishing work." },
    ],
  },
  cta: { eyebrow: "Plan the next layer", title: "Start with a clearer roofing conversation.", description: "Share a little about the roof and the questions you want to work through. We will use that context to discuss practical next steps." },
  relatedServices: ["storm-damage", "gutters", "soffit-fascia"],
  seo: { title: "Roofing Services", description: "Explore CM Roofing's residential roofing planning and system approach.", canonicalPath: "/services/roofing" },
};
