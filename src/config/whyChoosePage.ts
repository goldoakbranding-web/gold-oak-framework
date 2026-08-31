import { business } from "@/config/business";

const owner = business.owner;
const serviceArea = business.serviceAreas;
const serviceAreaCommunities =
  serviceArea?.communities.join(", ") ?? business.city;

export type WhyChoosePageImage = {
  src: string;
  alt: string;
  objectPosition: string;
  mobileObjectPosition: string;
};

export const whyChoosePage = {
  seo: {
    title: `Why Choose CM Roofing | ${business.name}`,
    description: `Meet ${business.name} owner ${owner.name} and see the principles and real residential roofing work behind the company in Central Wisconsin.`,
    canonicalPath: "/why-choose-cm-roofing",
  },
  hero: {
    eyebrow: "The CM Roofing Standard",
    title: "Why Choose CM Roofing",
    description: `${business.name} is a ${business.category.toLowerCase()} based in ${business.city}, ${business.state}. The work is approached with clear communication, careful attention, and respect for the home in front of us.`,
    image: {
      src: "/images/services/roofing/projects/completed-roof-replacement-drone-front.jpg",
      alt: "Aerial front view of a completed gray residential roof by CM Roofing",
      objectPosition: "50% 52%",
      mobileObjectPosition: "52% 50%",
    } satisfies WhyChoosePageImage,
  },
  overview: {
    eyebrow: "Why CM Roofing",
    title: "The Work Matters. So Does the Way the Project Is Handled.",
    description:
      "A roofing project brings important decisions about the work ahead. CM Roofing keeps the conversation centered on visible details, a clear project scope, and straightforward next steps.",
    facts: [
      {
        label: "Residential focus",
        value: business.category,
      },
      {
        label: "Local base",
        value: `${business.city}, ${business.state}`,
      },
      {
        label: "Project proof",
        value: "Real CM Roofing photography",
      },
      {
        label: "Licensed credentials",
        value: business.verifiedFacts.licenseNames.join(" · "),
      },
    ],
  },
  owner: {
    eyebrow: "Meet the Owner",
    name: owner.name,
    role: `${owner.role}, ${business.name}`,
    title: "Building on a Family Foundation. Focused on What Comes Next.",
    biography: [
      `Cade Martin's path into roofing started with his father's company, where he gained firsthand experience in the business and learned what it takes to serve homeowners and deliver quality work. He brings approximately ${owner.approximateRoofingExperienceYears} years of roofing experience to that work.`,
      `In ${owner.tookOverYear}, Cade took over the company and rebranded it as CM Roofing, beginning a new chapter focused on growth, craftsmanship, and building a company designed for the future.`,
      "Today, CM Roofing continues to scale and grow while staying focused on the principles the business was built around: quality work, dependable service, and taking care of the people who trust the company with their homes.",
      "Cade's vision extends well beyond where the company is today. As CM Roofing continues expanding throughout Central Wisconsin, his goal is to grow the company into multiple locations over the coming years—without losing the quality, accountability, and personal service that got it there.",
    ],
    quote:
      "We’re scaling and growing every day. I wouldn’t be surprised if four years from now we have multiple locations.",
    quoteAttribution: `— ${owner.name}, ${owner.role}`,
    image: {
      src: "/images/about/cade-martin-owner.jpg",
      alt: "CM Roofing owner Cade Martin standing in front of a truck",
      objectPosition: "50% 50%",
      mobileObjectPosition: "50% 50%",
    } satisfies WhyChoosePageImage,
  },
  principles: {
    eyebrow: "What Guides the Work",
    title: "A Practical Standard for Every Roofing Conversation",
    description:
      "These principles keep each roofing conversation focused on the work, the property, and clear next steps.",
    items: [
      {
        id: "communication",
        title: "Clear Communication",
        description:
          "Project conversations stay focused on what is visible, what the requested work may involve, and what comes next.",
      },
      {
        id: "details",
        title: "Attention to the Details",
        description:
          "Roofing conditions, transitions, and project requirements deserve deliberate attention throughout the work.",
      },
      {
        id: "accountability",
        title: "Straightforward Accountability",
        description:
          "A clear scope and visible project progress help keep expectations connected to the work being discussed.",
      },
    ],
  },
  local: {
    eyebrow: "Central Wisconsin Service",
    title: `Based in ${business.city}. Serving Central Wisconsin.`,
    description: `${business.name} serves ${serviceAreaCommunities} and surrounding Central Wisconsin communities. Service is generally available within approximately ${serviceArea?.approximateRadiusMiles ?? 80} miles of ${business.city}; availability depends on the property location and project scope.`,
  },
  projects: {
    eyebrow: "Real Project Proof",
    title: "See the Work in Real Detail",
    description:
      "These photographs document real CM Roofing work across active installation, roof-deck preparation, and a completed residential roof.",
    items: [
      {
        id: "active-installation",
        label: "Active installation",
        title: "Roof Replacement in Progress",
        description:
          "Crew members remove existing roofing material while exposed roof areas are prepared for the next installation steps.",
        image: {
          src: "/images/services/roofing/projects/roof-replacement-crew-installation.jpg",
          alt: "CM Roofing crew removing existing shingles during an active roof replacement",
          objectPosition: "50% 57%",
          mobileObjectPosition: "50% 57%",
        } satisfies WhyChoosePageImage,
      },
      {
        id: "deck-preparation",
        label: "Roof-deck preparation",
        title: "The Work Beneath the Shingles",
        description:
          "Exposed decking and underlayment document preparation that is normally hidden beneath the finished roof surface.",
        image: {
          src: "/images/services/roofing/projects/roof-deck-preparation.jpg",
          alt: "Exposed roof decking and underlayment during a CM Roofing project",
          objectPosition: "52% 42%",
          mobileObjectPosition: "52% 42%",
        } satisfies WhyChoosePageImage,
      },
      {
        id: "completed-roof",
        label: "Completed roof",
        title: "The Finished Roof System in View",
        description:
          "A wide aerial view documents completed shingle fields, ridges, and connected roof sections across the home.",
        image: {
          src: "/images/services/roofing/projects/completed-roof-replacement-aerial.jpg",
          alt: "Wide aerial view of a completed gray shingle roof by CM Roofing",
          objectPosition: "50% 50%",
          mobileObjectPosition: "56% 50%",
        } satisfies WhyChoosePageImage,
      },
    ],
  },
} as const;
