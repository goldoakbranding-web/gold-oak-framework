export type RoofingPageImage = {
  src: string;
  alt: string;
  objectPosition: string;
  mobileObjectPosition: string;
  caption?: string;
};

export type RoofingPageLink = {
  label: string;
  href: string;
};

export type RoofingPageConfig = {
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    supporting: string;
    trust: {
      eyebrow: string;
      title: string;
      items: Array<{
        id: string;
        title: string;
        description: string;
      }>;
    };
  };
  serviceArea: {
    eyebrow: string;
    title: string;
    description: string;
    facts: Array<{
      id: string;
      label: string;
      value: string;
    }>;
    note: string;
    action: RoofingPageLink;
  };
  serviceTypes: {
    eyebrow: string;
    title: string;
    description: string;
    offerings: Array<{
      id: string;
      label: string;
    }>;
    items: Array<{
      id: string;
      title: string;
      description: string;
      image: RoofingPageImage;
    }>;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    image: RoofingPageImage;
    steps: Array<{
      id: string;
      label: string;
      title: string;
      description: string;
    }>;
  };
  transformation: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    stages: Array<{
      id: string;
      label: string;
      title: string;
      description: string;
      image: RoofingPageImage;
    }>;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    image: RoofingPageImage;
    primaryAction: RoofingPageLink;
    secondaryAction: RoofingPageLink;
  };
};

export const roofingPage: RoofingPageConfig = {
  intro: {
    eyebrow: "Residential & commercial roofing",
    title: "A roofing plan should begin with the property in front of us.",
    description:
      "CM Roofing provides roofing solutions for homeowners and businesses throughout Central Wisconsin. Each conversation begins with the visible condition of the roof, the concern that prompted the call, and the details that belong in the scope.",
    supporting:
      "Material decisions, installation details, property access, and closeout questions are coordinated as connected parts of the same project.",
    trust: {
      eyebrow: "Why choose CM Roofing",
      title: "Practical decisions. A clearly defined scope.",
      items: [
        {
          id: "condition-led",
          title: "Fully licensed & insured",
          description: "CM Roofing holds General Contractor and Dwelling Contractor licenses and is fully insured.",
        },
        {
          id: "connected-details",
          title: "Quality craftsmanship",
          description: "Roof planes, edges, valleys, penetrations, ventilation, and decking are approached as parts of one connected system.",
        },
        {
          id: "communication",
          title: "Honest communication",
          description: "Scope decisions, property preparation, materials, and project questions stay part of the same conversation.",
        },
        {
          id: "closeout",
          title: "5-Year workmanship warranty",
          description: "CM Roofing backs its workmanship with a five-year warranty, separate from any manufacturer warranty.",
        },
      ],
    },
  },
  serviceArea: {
    eyebrow: "Roofing service area",
    title: "Based in Berlin. Serving Central Wisconsin.",
    description:
      "CM Roofing proudly serves Berlin, Ripon, Green Lake, Oshkosh, Fond du Lac, Winneconne, and surrounding communities throughout Central Wisconsin.",
    facts: [
      {
        id: "region",
        label: "Service region",
        value: "Central Wisconsin",
      },
      {
        id: "reach",
        label: "Approximate reach",
        value: "About 80 miles from Berlin",
      },
    ],
    note: "The service radius is approximate. Share your property address so CM Roofing can confirm availability for your location.",
    action: {
      label: "See if we serve your area",
      href: "#service-estimate",
    },
  },
  serviceTypes: {
    eyebrow: "Roofing services",
    title: "Roofing for homes, businesses, repairs, and new construction.",
    description:
      "CM Roofing works with asphalt shingle and metal roofing systems. The appropriate direction depends on the property, the roof condition, and the work being planned.",
    offerings: [
      { id: "complete-replacement", label: "Complete Roof Replacements" },
      { id: "asphalt-shingles", label: "Asphalt Shingle Roofing" },
      { id: "metal-roofing", label: "Metal Roofing Systems" },
      { id: "residential", label: "Residential Roofing" },
      { id: "commercial", label: "Commercial Roofing" },
      { id: "repairs", label: "Roof Repairs" },
      { id: "storm-restoration", label: "Storm Damage Restoration" },
      { id: "insurance-assistance", label: "Insurance Claim Assistance" },
      { id: "new-construction", label: "New Construction Roofing" },
    ],
    items: [
      {
        id: "replacement",
        title: "Roof replacement",
        description:
          "Complete replacements bring materials, roof planes, edges, penetrations, and related details into one planned residential or commercial scope.",
        image: {
          src: "/images/services/roofing/projects/completed-roof-replacement-aerial.jpg",
          alt: "Wide aerial view of a completed gray shingle roof replacement",
          objectPosition: "50% 50%",
          mobileObjectPosition: "50% 50%",
          caption: "Completed residential roof replacement documented from above.",
        },
      },
      {
        id: "repair",
        title: "Roof repair & restoration",
        description:
          "Localized repairs and storm restoration begin with the affected area, nearby materials, and a clear assessment of the practical work needed.",
        image: {
          src: "/images/services/storm-damage/high-wind-missing-shingles.jpg",
          alt: "Roofer reviewing an exposed strip where shingles are missing",
          objectPosition: "53% 66%",
          mobileObjectPosition: "52% 70%",
          caption: "Missing shingles documented before repair; this is not a completed-repair photograph.",
        },
      },
    ],
  },
  process: {
    eyebrow: "Our roofing process",
    title: "A clear five-step roofing process.",
    description:
      "The exact scope changes with the property, but the conversation follows a practical progression from the first review through project closeout.",
    image: {
      src: "/images/services/roofing/projects/roof-replacement-crew-installation.jpg",
      alt: "Roofing crew removing existing shingles during an active residential roof replacement",
      objectPosition: "50% 50%",
      mobileObjectPosition: "50% 50%",
      caption: "Crew coordination and tear-off during active roofing work.",
    },
    steps: [
      {
        id: "inspection",
        label: "01",
        title: "Inspection and consultation",
        description: "Review visible roof conditions, geometry, transitions, access, and the concern that brought you here.",
      },
      {
        id: "recommendations",
        label: "02",
        title: "Recommendations and estimate",
        description: "Discuss whether repair or replacement should be considered and define the work included in the estimate.",
      },
      {
        id: "preparation",
        label: "03",
        title: "Project preparation",
        description: "Confirm materials, access, vehicles, outdoor belongings, work areas, and the planned installation sequence.",
      },
      {
        id: "installation",
        label: "04",
        title: "Roofing installation",
        description: "Complete the agreed work while coordinating roof planes, edges, valleys, penetrations, and related details.",
      },
      {
        id: "closeout",
        label: "05",
        title: "Cleanup and final walkthrough",
        description: "Review the completed scope, visible finishing details, cleanup, and any remaining project questions.",
      },
    ],
  },
  transformation: {
    eyebrow: "Roofing project stages",
    title: "Real work at different stages of roofing.",
    description:
      "These photographs come from multiple real CM Roofing projects and show examples of active replacement, deck preparation, material staging, and completed roofing.",
    note: "Each frame documents a different project. They are stage examples—not a continuous before-and-after sequence of one property.",
    stages: [
      {
        id: "active-replacement",
        label: "01 · Active replacement",
        title: "Removal opens the main roof planes.",
        description: "This project view records the crew, ladders, debris protection, and partially opened roof planes during active work.",
        image: {
          src: "/images/services/roofing/projects/roof-replacement-in-progress.jpg",
          alt: "Roofing crew working across partially stripped roof planes during an active residential replacement",
          objectPosition: "50% 60%",
          mobileObjectPosition: "50% 52%",
          caption: "Active roof replacement with crew, ladders, and debris protection visible.",
        },
      },
      {
        id: "deck-preparation",
        label: "02 · Deck preparation",
        title: "Exposed decking is prepared in sections.",
        description: "This project view shows exposed decking, underlayment, staged bundles, and active preparation around a roof transition.",
        image: {
          src: "/images/services/roofing/projects/roof-deck-preparation.jpg",
          alt: "Exposed roof decking and underlayment with staged shingle bundles and a worker below",
          objectPosition: "50% 38%",
          mobileObjectPosition: "50% 38%",
          caption: "Deck preparation and material staging during active work.",
        },
      },
      {
        id: "installation-staging",
        label: "03 · Installation staging",
        title: "Underlayment and materials move into place.",
        description: "This installation view documents underlayment, exposed decking, staged shingles, and a worker coordinating the next section.",
        image: {
          src: "/images/services/roofing/projects/roof-replacement-decking-installation.jpg",
          alt: "Roofing worker beside exposed decking, underlayment, and staged shingle bundles",
          objectPosition: "50% 52%",
          mobileObjectPosition: "50% 52%",
          caption: "Underlayment and staged materials before shingle installation—not a finished roof.",
        },
      },
      {
        id: "completed-roof",
        label: "04 · Completed roof",
        title: "The finished roof is documented from above.",
        description: "This completed-project drone view shows gray shingle fields, ridge caps, and connected roof planes across the residence.",
        image: {
          src: "/images/services/roofing/projects/completed-roof-replacement-drone-rear.jpg",
          alt: "Rear drone view of a completed gray shingle roof replacement",
          objectPosition: "50% 50%",
          mobileObjectPosition: "50% 50%",
          caption: "Completed roof documented from the rear of the property.",
        },
      },
    ],
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
    primaryAction: {
      label: "Request a roofing estimate",
      href: "#service-estimate",
    },
    secondaryAction: {
      label: "Call CM Roofing",
      href: "tel:+19207890700",
    },
  },
};
