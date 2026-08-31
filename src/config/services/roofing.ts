import type { ServiceConfig, ServiceImage } from "./types";

const heroImage: ServiceImage = {
  src: "/images/projects/large-project1.jpg",
  alt: "Aerial view of a large residential roof installation in progress",
  objectPosition: "54% 46%",
  mobileObjectPosition: "59% 48%",
};

const introImage: ServiceImage = {
  src: "/images/projects/project-3.jpg",
  alt: "Close view of installed gray roof shingles, ridge caps, a roof vent, and remaining installation materials",
  objectPosition: "50% 60%",
  mobileObjectPosition: "50% 65%",
  caption: "Late-stage shingle installation with materials and equipment still visible.",
};

const completionImage: ServiceImage = {
  src: "/images/services/roofing/projects/completed-roof-replacement-drone-front.jpg",
  alt: "Front drone view of a completed gray shingle roof replacement",
  objectPosition: "50% 50%",
  mobileObjectPosition: "50% 50%",
  caption: "Completed roof · front aerial",
};

export const roofingService: ServiceConfig = {
  slug: "roofing",
  name: "Roofing",
  theme: {
    id: "engineering",
    heroLayout: "immersive",
    heroAlignment: "start",
    introLayout: "image-right",
    optionsLayout: "cards",
    processLayout: "rail",
    galleryLayout: "masonry",
    accent: "#d8bd79",
  },
  hero: {
    eyebrow: "Residential & commercial roofing",
    title: "A Roof Planned as One Complete System.",
    description:
      "Replacement, repair, storm restoration, and new-construction roofing begin with the same essentials: understand the roof, define the work, and coordinate every layer and transition.",
    indicators: ["Condition review", "Detailed project scope", "Material coordination"],
    image: heroImage,
  },
  intro: {
    eyebrow: "Residential & commercial roofing",
    title: "A roofing plan should begin with the property in front of us.",
    description:
      "CM Roofing provides roofing solutions for homeowners and businesses throughout Central Wisconsin. Each conversation begins with the visible condition of the roof, the concern that prompted the call, and the details that belong in the scope.",
    supporting:
      "Material decisions, installation details, property access, and closeout questions are considered as connected parts of the same project.",
    image: introImage,
  },
  options: {
    eyebrow: "Roofing services",
    title: "Roofing for homes, businesses, repairs, and new construction.",
    description:
      "CM Roofing works with asphalt shingle and metal roofing systems. The right direction depends on the property, the roof condition, and the work being planned.",
    items: [
      {
        id: "complete-replacement",
        title: "Complete Roof Replacements",
        description:
          "Coordinate material removal, preparation, roof planes, edges, penetrations, and installation details in one complete scope.",
      },
      {
        id: "asphalt-shingles",
        title: "Asphalt Shingle Roofing",
        description: "Plan asphalt shingle materials, color, supporting details, and installation for the property and selected product.",
      },
      {
        id: "metal-roofing",
        title: "Metal Roofing Systems",
        description: "Discuss a metal roofing direction without assuming a specific commercial or residential system before the project is reviewed.",
      },
      {
        id: "residential",
        title: "Residential Roofing",
        description: "Roofing replacement, repair, restoration, and new-construction work for homes throughout Central Wisconsin.",
      },
      {
        id: "commercial",
        title: "Commercial Roofing",
        description: "Commercial roofing work planned around the property, roof condition, access, materials, and agreed scope.",
      },
      {
        id: "repair",
        title: "Roof Repairs",
        description:
          "Review localized concerns and the nearby roof materials before defining a focused repair.",
      },
      {
        id: "storm-restoration",
        title: "Storm Damage Restoration",
        description: "Document visible conditions and define practical repair or replacement work after severe weather.",
      },
      {
        id: "insurance-assistance",
        title: "Insurance Claim Assistance",
        description: "Organize visible conditions, project photographs, proposed roofing work, and completion details while the insurer determines coverage.",
      },
      {
        id: "new-construction",
        title: "New Construction Roofing",
        description: "Coordinate roofing materials, transitions, access, and scheduling as part of a new residential or commercial build.",
      },
    ],
  },
  projectEvidence: {
    kind: "story",
    eyebrow: "Roofing project stages",
    title: "Real roofing work at four different stages.",
    description:
      "These photographs come from multiple real CM Roofing projects and document existing conditions, tear-off, deck preparation, and late-stage installation.",
    note: "Each frame documents a different project. They are stage examples—not a continuous before-and-after sequence of one property.",
    stages: [
      {
        id: "existing-condition",
        label: "01 · Existing condition",
        title: "Weathered material documented before removal.",
        description:
          "The first view records the existing wood roof material, organic growth, roof plane, and chimney details.",
        image: {
          src: "/images/services/roofing/roofing-before-image-3.jpg",
          alt: "Weathered wood roof material with organic growth beside a stone chimney",
          objectPosition: "44% 58%",
          mobileObjectPosition: "44% 58%",
          caption: "Existing roof condition before removal began.",
        },
      },
      {
        id: "tear-off",
        label: "02 · Tear-off",
        title: "The existing assembly is opened in sections.",
        description:
          "An aerial view shows removal in progress, exposed deck areas, remaining material, staged bundles, and the active crew.",
        image: {
          src: "/images/services/roofing/roofing-before-image-5.jpg",
          alt: "Aerial view of roof tear-off with exposed decking, remaining material, staged bundles, and crew",
          objectPosition: "64% 48%",
          mobileObjectPosition: "70% 48%",
          caption: "Active tear-off and deck exposure during the project.",
        },
      },
      {
        id: "preparation",
        label: "03 · Preparation",
        title: "Deck preparation and materials move into place.",
        description:
          "A closer frame records underlayment, exposed decking, staged shingles, and remaining existing material at a transition in the work.",
        image: {
          src: "/images/services/roofing/New-Before-Image.jpg",
          alt: "Close view of underlayment, exposed decking, staged shingles, and remaining weathered roof material",
          objectPosition: "57% 62%",
          mobileObjectPosition: "57% 58%",
          caption: "Preparation and material staging during active work.",
        },
      },
      {
        id: "late-installation",
        label: "04 · Installation",
        title: "The new shingle fields near completion.",
        description:
          "The aerial endpoint shows broad installed roof planes while crew members, equipment, and project debris remain visible.",
        image: {
          src: "/images/services/roofing/after-image-4.jpg",
          alt: "Aerial view of broad installed shingle fields with crew, equipment, ladders, and debris trailer still present",
          objectPosition: "55% 49%",
          mobileObjectPosition: "59% 50%",
          caption: "Late-stage installation—not a fully completed-project photograph.",
        },
      },
    ],
  },
  trust: {
    eyebrow: "Why choose CM Roofing",
    title: "Verified protection and a clearly defined scope.",
    description:
      "CM Roofing combines clear communication, quality craftsmanship, and documented protection for the work.",
    items: [
      {
        id: "condition-led",
        title: "Fully licensed & insured",
        description: "CM Roofing holds General Contractor and Dwelling Contractor licenses and is fully insured.",
      },
      {
        id: "connected-details",
        title: "Quality craftsmanship",
        description: "Approach roof planes, edges, valleys, penetrations, ventilation, and decking as one connected system.",
      },
      {
        id: "communication",
        title: "Honest communication",
        description: "Keep scope, materials, property preparation, and project questions clear throughout the work.",
      },
      {
        id: "closeout",
        title: "5-Year workmanship warranty",
        description: "CM Roofing backs its workmanship with a five-year warranty, separate from any manufacturer warranty.",
      },
    ],
  },
  process: {
    eyebrow: "Our roofing process",
    title: "A clear five-step roofing process.",
    description: "The exact scope changes with the property, but the conversation follows a practical progression from the first review through project closeout.",
    steps: [
      {
        id: "inspection",
        label: "01",
        icon: "measure",
        title: "Inspection and consultation",
        description: "Review visible roof conditions, geometry, transitions, access, and the concern that brought you here.",
      },
      {
        id: "recommendations",
        label: "02",
        icon: "guide",
        title: "Recommendations and estimate",
        description: "Discuss whether repair or replacement should be considered and define the work included in the estimate.",
      },
      {
        id: "preparation",
        label: "03",
        icon: "layers",
        title: "Project preparation",
        description: "Confirm materials, access, vehicles, outdoor belongings, work areas, and the planned installation sequence.",
      },
      {
        id: "installation",
        label: "04",
        icon: "shield",
        title: "Roofing installation",
        description: "Complete the agreed work while coordinating roof planes, edges, valleys, penetrations, and related details.",
      },
      {
        id: "closeout",
        label: "05",
        icon: "finish",
        title: "Cleanup and final walkthrough",
        description: "Review the completed scope, visible finishing details, cleanup, and any remaining project questions.",
      },
    ],
  },
  gallery: {
    eyebrow: "Roofing project gallery",
    title: "Residential roofing documented from active work to completed roof planes.",
    description: "Six real project photographs show completed roofing, active work, and installation details at different scales.",
    images: [
      {
        src: "/images/services/roofing/projects/completed-roof-replacement-drone-side.jpg",
        alt: "Side drone view of a completed gray shingle roof replacement",
        objectPosition: "50% 50%",
        mobileObjectPosition: "50% 50%",
        caption: "Completed roof · side aerial",
      },
      {
        src: "/images/projects/project-1.jpg",
        alt: "Aerial view of a residential roof replacement with sections of deck and underlayment visible",
        objectPosition: "50% 48%",
        mobileObjectPosition: "52% 48%",
        caption: "Deck and underlayment",
      },
      {
        src: "/images/projects/project-2.jpg",
        alt: "Roofing crew working on a residential shingle tear-off",
        objectPosition: "50% 46%",
        mobileObjectPosition: "48% 48%",
        caption: "Active tear-off",
      },
      introImage,
      {
        src: "/images/projects/project-5.jpg",
        alt: "Dark shingle roof above a residence with exposed exterior framing",
        objectPosition: "50% 56%",
        mobileObjectPosition: "50% 50%",
        caption: "Dark shingle roof",
      },
      completionImage,
    ],
  },
  faq: {
    eyebrow: "Roofing questions",
    title: "Straight answers begin with the actual roof.",
    description: "These are useful starting points. A property-specific review is what turns general guidance into a practical scope.",
    items: [
      {
        id: "repair-or-replace",
        question: "How do I know whether I need roof repair or replacement?",
        answer:
          "The location and extent of the concern, the condition of nearby materials, and the roof as a whole all matter. A review can determine whether a focused repair is reasonable or a replacement scope should be considered.",
      },
      {
        id: "partial-repair",
        question: "Can only part of a roof be repaired?",
        answer:
          "A focused repair may be practical when the concern is localized, but the nearby material and transitions also need to be considered. The condition review helps determine whether a limited repair should be discussed.",
      },
      {
        id: "warning-signs",
        question: "What signs mean my roof should be reviewed?",
        answer:
          "Visible material changes, interior water staining, or concerns around edges, valleys, vents, and other penetrations are reasons to request a condition review. Those observations do not by themselves determine whether replacement is needed.",
      },
      {
        id: "timing",
        question: "How long does a roof replacement take?",
        answer:
          "Timing depends on the roof size and complexity, weather, material availability, access, and the agreed scope. Those project-specific factors should be reviewed before scheduling rather than answered with one fixed timeline.",
      },
      {
        id: "decking",
        question: "What happens if the roof deck needs additional work?",
        answer:
          "The deck supports the roofing above it, so its condition can change the work required. If a concern becomes visible during the project, it should be reviewed and discussed before related work proceeds.",
      },
      {
        id: "preparation",
        question: "How should I prepare my property for roofing work?",
        answer:
          "Preparation depends on access, landscaping, vehicles, outdoor items, and the work areas around the home. Those property-specific details should be reviewed before installation begins.",
      },
      {
        id: "warranties",
        question: "What roofing warranties may apply?",
        answer:
          "CM Roofing provides a 5-year workmanship warranty. Many shingle products include manufacturer-backed warranties of approximately 30 years, depending on the selected product, manufacturer terms, registration, and installation requirements. The workmanship and manufacturer warranties should be reviewed separately.",
      },
      {
        id: "service-area",
        question: "What areas of Central Wisconsin do you serve?",
        answer:
          "CM Roofing serves homes and businesses throughout Central Wisconsin from Berlin, Wisconsin. If you are within approximately 80 miles of Berlin, share the property address so availability can be confirmed.",
      },
    ],
  },
  estimate: {
    eyebrow: "Start with your roof",
    title: "Request a roofing estimate.",
    description: "Share the roof concern, property location, and the best way to reach you. Roofing is already selected in the form.",
    defaultService: "Roofing",
  },
  cta: {
    eyebrow: "Start with your roof",
    title: "Turn the roofing concern into a practical next step.",
    description: "Tell CM Roofing what you are seeing and share the property address so the conversation can begin with the right context.",
    image: {
      src: "/images/services/roofing/after-image-1.jpg",
      alt: "Aerial view of a residential shingle roof during late-stage installation with crew and work areas visible",
      objectPosition: "64% 50%",
      mobileObjectPosition: "68% 50%",
      caption: "Late-stage residential roof installation with active work still visible.",
    },
  },
  relatedServices: [],
  seo: {
    title: "Residential & Commercial Roofing",
    description:
      "Explore roof replacement, asphalt and metal roofing, repairs, storm restoration, insurance claim assistance, and new construction throughout Central Wisconsin.",
    canonicalPath: "/services/roofing",
    image: heroImage,
  },
};
