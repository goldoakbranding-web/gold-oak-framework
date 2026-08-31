import type { ServiceConfig, ServiceImage } from "./types";

const gutterImage: ServiceImage = {
  src: "/images/services/gutters.jpg",
  alt: "Dark gutter and downspout following a white residential roofline",
  objectPosition: "50% 50%",
  mobileObjectPosition: "56% 50%",
  presentation: "detail",
};

export const guttersService: ServiceConfig = {
  slug: "gutters",
  name: "Gutters",
  theme: {
    id: "precision",
    heroLayout: "editorial-left",
    heroAlignment: "start",
    introLayout: "text-only",
    optionsLayout: "list",
    processLayout: "path",
    galleryLayout: "frames",
    accent: "#d8bd79",
  },
  hero: {
    eyebrow: "Seamless gutters & downspouts",
    title: "Control Rainwater From the Roofline to the Ground.",
    description:
      "CM Roofing installs seamless gutters, downspouts, and gutter protection for homes and businesses throughout Central Wisconsin.",
    indicators: ["Roofline review", "Downspout planning", "Exterior coordination"],
    image: gutterImage,
  },
  intro: {
    eyebrow: "Water management at the edge",
    title: "Follow the path from roof plane to ground.",
    description:
      "Changes in roof direction and elevation affect where water arrives at the eave. Reviewing those collection areas and the available downspout routes creates a more useful plan for the property.",
    supporting:
      "A useful layout makes the collection points and downspout routes understandable before installation begins.",
  },
  options: {
    eyebrow: "Gutter services",
    title: "A complete scope for the roofline and drainage path.",
    description: "The project can address seamless installation, replacement, downspouts, or protection along the gutter system.",
    items: [
      { id: "installation", title: "Seamless Gutter Installation", description: "Plan continuous gutter runs, outlets, corners, and downspouts around the property's roofline." },
      { id: "replacement", title: "Gutter Replacement", description: "Review the existing runs, corners, outlets, downspouts, and adjacent fascia before defining the replacement scope." },
      { id: "downspouts", title: "Downspouts", description: "Coordinate collection points, visible routes, and where water travels after it leaves the roofline." },
      { id: "protection", title: "Gutter Protection Solutions", description: "Discuss protection options in the context of the gutter layout, roof edge, and maintenance goals." },
    ],
  },
  trust: {
    eyebrow: "Why choose CM Roofing",
    title: "Keep water direction and exterior details in the same plan.",
    description: "The gutter scope starts with the roof geometry and remains connected to the surrounding roofline.",
    items: [
      { id: "roofline", title: "Roofline-first review", description: "Map the eaves, corners, changes in direction, and collection areas before laying out runs." },
      { id: "routing", title: "Visible routing plan", description: "Discuss downspout locations and the practical path for water at each area." },
      { id: "coordination", title: "Exterior coordination", description: "Consider gutters alongside fascia, roof edges, siding, and nearby transitions." },
      { id: "review", title: "Final system review", description: "Review the installed lines, outlets, downspouts, and details included in the scope." },
    ],
  },
  process: {
    eyebrow: "The gutter process",
    title: "Five steps along the water path.",
    description: "A compact sequence keeps roof geometry, routing, installation, and final review connected.",
    steps: [
      { id: "map", label: "01", icon: "measure", title: "Map", description: "Review the roof edges, collection areas, corners, and exterior conditions." },
      { id: "route", label: "02", icon: "water", title: "Route", description: "Plan the gutter runs, outlets, downspouts, and practical water direction." },
      { id: "scope", label: "03", icon: "guide", title: "Define", description: "Confirm the components, work areas, adjacent details, and preparation in the scope." },
      { id: "install", label: "04", icon: "detail", title: "Install", description: "Complete the agreed gutter and downspout work along the planned roofline." },
      { id: "review", label: "05", icon: "finish", title: "Review", description: "Check the completed runs, transitions, outlets, and visible routing details." },
    ],
  },
  faq: {
    eyebrow: "Gutter questions",
    title: "Start at the roof edge, then follow the route.",
    description: "The answers depend on the roof geometry and the conditions around the property.",
    items: [
      { id: "placement", question: "What affects downspout placement?", answer: "Roof geometry, collection areas, corners, exterior openings, visible elevations, and the available path at ground level can all affect the layout." },
      { id: "replace", question: "When should gutter replacement be considered?", answer: "A review can look at the existing runs, connections, outlets, downspouts, alignment, and nearby fascia to define what needs attention." },
      { id: "coordinate", question: "Can gutters be planned with roofing or fascia work?", answer: "Yes. Coordinating work at the roof edge can make transitions, scheduling, and the finished roofline easier to address together." },
      { id: "scope", question: "What should the estimate identify?", answer: "The planned runs, outlets, downspouts, work areas, relevant roofline conditions, and any coordinated exterior details should be clear in the project conversation." },
    ],
  },
  estimate: {
    eyebrow: "Map the roofline",
    title: "Request a gutter estimate.",
    description: "Tell us where you are seeing a concern or which rooflines need a new gutter plan.",
    defaultService: "Gutters",
  },
  cta: {
    eyebrow: "Follow the water",
    title: "Build a clearer route from roof edge to ground.",
    description: "Start with the rooflines, downspouts, or drainage questions you want to review.",
    image: gutterImage,
  },
  relatedServices: ["roofing", "soffit-fascia", "siding"],
  seo: {
    title: "Seamless Gutter Installation & Replacement",
    description: "Explore seamless gutter installation, gutter replacement, downspouts, and gutter protection solutions throughout Central Wisconsin.",
    canonicalPath: "/services/gutters",
    image: gutterImage,
  },
};
