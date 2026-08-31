import type { ServiceConfig, ServiceImage } from "./types";

const stormContextImage: ServiceImage = {
  src: "/images/services/storm-damage.jpg",
  alt: "Active residential roofing work with exposed wood decking and underlayment",
  objectPosition: "50% 58%",
  mobileObjectPosition: "51% 61%",
  caption: "Roofing work in progress; the photograph does not establish what caused the prior roof condition.",
};

export const stormDamageEscalation = {
  eyebrow: "How storm damage escalates",
  title: "High Winds Can Turn Into Bigger Roofing Problems",
  description:
    "Severe weather does not affect every roof in the same way. These photographs show one possible progression that can begin with displaced roof materials and lead to exposed layers that need closer review.",
  note: "The images document visible roofing conditions. They do not, by themselves, establish causation or determine insurance coverage.",
  stages: [
    {
      id: "high-winds",
      label: "High winds",
      title: "Ridge-cap shingles may loosen or go missing.",
      description:
        "Ridge materials sit at an exposed roof peak. After severe weather, missing or displaced ridge-cap shingles are a visible condition worth documenting and inspecting.",
      image: {
        src: "/images/services/storm-damage/high-wind-missing-ridge-shingles.jpg",
        alt: "Residential roof ridge with several ridge-cap shingles missing",
        objectPosition: "55% 45%",
        mobileObjectPosition: "55% 50%",
        caption: "Visible ridge-cap loss; the photograph does not establish what caused the condition.",
      } satisfies ServiceImage,
    },
    {
      id: "missing-shingles",
      label: "Missing shingles",
      title: "Exposed roof layers need a prompt review.",
      description:
        "When shingles are no longer covering part of the roof, the layers below can be left exposed. An inspection can clarify the affected area and the appropriate repair scope.",
      image: {
        src: "/images/services/storm-damage/high-wind-missing-shingles.jpg",
        alt: "Roofer reviewing a long exposed strip where shingles are missing",
        objectPosition: "53% 66%",
        mobileObjectPosition: "52% 70%",
        caption: "Missing shingles and exposed roof layers during a field review.",
      } satisfies ServiceImage,
    },
    {
      id: "deck-damage",
      label: "Exposed or deteriorated decking",
      title: "Moisture can reach the roof deck.",
      description:
        "If water reaches the roof assembly, leaking or deteriorated decking may eventually be uncovered. Conditions like these can have more than one cause and should be assessed directly.",
      image: {
        src: "/images/services/storm-damage/roof-leak-damaged-roof-deck.jpg",
        alt: "Deteriorated wood roof decking exposed beneath removed shingles",
        objectPosition: "52% 54%",
        mobileObjectPosition: "52% 54%",
        caption: "Deteriorated decking uncovered during roofing work; the photograph does not establish when or why it developed.",
      } satisfies ServiceImage,
    },
  ],
  insurance: {
    eyebrow: "When insurance is part of the project",
    title: "Keep visible conditions and coverage decisions separate.",
    description:
      "CM Roofing can help document visible exterior conditions and define proposed construction work. Your insurer determines coverage and claim outcomes.",
    href: "/services/insurance-claims",
    label: "Explore Insurance Claim Assistance",
  },
};

export const stormDamageService: ServiceConfig = {
  slug: "storm-damage",
  name: "Storm Damage",
  theme: {
    id: "response",
    heroLayout: "editorial-left",
    heroAlignment: "start",
    introLayout: "text-only",
    optionsLayout: "cards",
    processLayout: "path",
    galleryLayout: "masonry",
    accent: "#d8bd79",
  },
  hero: {
    eyebrow: "Storm damage restoration",
    title: "Start With a Careful Roof and Exterior Inspection.",
    description:
      "When severe weather affects a Central Wisconsin property, a focused review and clear documentation can turn uncertainty into a practical restoration plan.",
    indicators: ["Condition review", "Project documentation", "Repair scope"],
    image: stormContextImage,
  },
  intro: {
    eyebrow: "A measured first step",
    title: "Separate what you observed from what still needs review.",
    description:
      "Record when the concern appeared, note the areas you can safely see, and avoid assuming the full scope from the ground. A closer review can identify visible conditions and the project questions that follow.",
    supporting:
      "The page photograph shows active roofing work. It is used as restoration context and does not by itself prove storm causation.",
  },
  options: {
    eyebrow: "Storm-damage support",
    title: "Assessment, documentation, and restoration planning.",
    description: "Assessment, documentation, and a defined repair direction each answer a different question.",
    items: [
      { id: "assessment", title: "Roof and exterior assessment", description: "Review the visible roof and exterior areas connected to the concern and identify conditions that need attention." },
      { id: "documentation", title: "Condition documentation", description: "Organize relevant observations and project photographs so the condition being discussed stays specific." },
      { id: "planning", title: "Repair or replacement planning", description: "Translate the reviewed conditions into a practical exterior-work scope without making policy or coverage determinations." },
    ],
  },
  trust: {
    eyebrow: "Why choose CM Roofing",
    title: "Keep the response grounded in visible conditions and project facts.",
    description: "A calm process gives assessment, documentation, scope, and repair work their own place.",
    items: [
      { id: "condition", title: "Condition-first review", description: "Start with the property and the specific roof or exterior areas that prompted concern." },
      { id: "documentation", title: "Organized project record", description: "Keep observations and available photographs tied to the areas being discussed." },
      { id: "scope", title: "Defined work scope", description: "Clarify what exterior work is proposed and which material and project decisions remain." },
      { id: "boundaries", title: "Clear process boundaries", description: "Keep roofing recommendations distinct from insurer decisions and policy interpretation." },
    ],
  },
  process: {
    eyebrow: "The storm-response process",
    title: "Five steps from observation to completed work.",
    description: "The sequence stays focused on the property condition and the exterior project itself.",
    steps: [
      { id: "observe", label: "01", icon: "storm", title: "Observe", description: "Record what you noticed, when it appeared, and which areas are part of the concern." },
      { id: "assess", label: "02", icon: "measure", title: "Assess", description: "Review the relevant roof and exterior conditions more closely." },
      { id: "document", label: "03", icon: "guide", title: "Document", description: "Organize the visible findings and photographs used in the project conversation." },
      { id: "scope", label: "04", icon: "layers", title: "Define", description: "Clarify the repair or replacement work being proposed for the affected exterior areas." },
      { id: "complete", label: "05", icon: "shield", title: "Complete", description: "Carry out and review the agreed exterior project scope." },
    ],
  },
  faq: {
    eyebrow: "Storm-damage questions",
    title: "Use facts to bring the next step into focus.",
    description: "Every property condition differs, so general guidance should lead to a specific review—not a rushed conclusion.",
    items: [
      { id: "first", question: "What should I do after noticing a possible storm-related concern?", answer: "Note when you observed it, record the areas you can see safely, and arrange a focused review. Avoid climbing onto the roof or assuming the full scope from a ground-level view." },
      { id: "documentation", question: "What should project documentation include?", answer: "Useful documentation can include the areas reviewed, visible conditions, relevant photographs, and a clear description of the exterior work being considered." },
      { id: "more-than-roof", question: "Should other exterior areas be reviewed too?", answer: "If the concern extends beyond the roof, siding, gutters, soffit, fascia, and the transitions between them may also be relevant to the exterior review." },
      { id: "insurance", question: "Does a roofing assessment determine insurance coverage?", answer: "No. A roofing assessment can document visible conditions and define proposed exterior work. Coverage and claim decisions belong to the insurer, and policy questions should be directed to the appropriate qualified source." },
    ],
  },
  estimate: {
    eyebrow: "Start with what you observed",
    title: "Request a storm-damage assessment.",
    description: "Share when the concern appeared, which exterior areas are involved, and the best way to reach you.",
    defaultService: "Storm Damage",
  },
  cta: {
    eyebrow: "Move forward with context",
    title: "Turn a weather concern into a documented project conversation.",
    description: "Start with the property condition and the questions that need a closer review.",
    image: stormContextImage,
  },
  relatedServices: ["insurance-claims", "roofing", "gutters"],
  seo: {
    title: "Storm Damage Assessment & Restoration",
    description: "Request a roof and exterior assessment, clear project documentation, and practical storm restoration planning throughout Central Wisconsin.",
    canonicalPath: "/services/storm-damage",
    image: stormContextImage,
  },
};
