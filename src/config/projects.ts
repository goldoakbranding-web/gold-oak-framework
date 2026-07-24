export type ProjectCategory =
  | "Roofing"
  | "Siding"
  | "Storm Damage"
  | "Commercial";

export interface Project {
  id: number;
  title: string;
  location: string;
  category: ProjectCategory;
  manufacturer: string;
  warranty: string;
  description: string;
  featured: boolean;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Roof Replacement",
    location: "Green Bay, WI",
    category: "Roofing",
    manufacturer: "Owens Corning",
    warranty: "Lifetime Workmanship",
    description:
      "Complete architectural roof replacement featuring premium materials and meticulous installation.",
    featured: true,
    image: "/images/projects/project-1.jpg",
  },

  {
    id: 2,
    title: "Modern Farmhouse Roof",
    location: "Appleton, WI",
    category: "Roofing",
    manufacturer: "GAF",
    warranty: "50-Year System",
    description:
      "Premium dimensional shingles with upgraded ventilation and flashing.",
    featured: false,
    image: "/images/projects/project-2.jpg",
  },

  {
    id: 3,
    title: "Storm Damage Restoration",
    location: "Neenah, WI",
    category: "Storm Damage",
    manufacturer: "Owens Corning",
    warranty: "Lifetime Workmanship",
    description:
      "Insurance-approved full roof replacement after severe hail damage.",
    featured: false,
    image: "/images/projects/project-3.jpg",
  },

  {
    id: 4,
    title: "Premium Siding Installation",
    location: "De Pere, WI",
    category: "Siding",
    manufacturer: "LP SmartSide",
    warranty: "Manufacturer Warranty",
    description:
      "Complete exterior transformation with engineered wood siding.",
    featured: false,
    image: "/images/projects/project-4.jpg",
  },

  {
    id: 5,
    title: "Commercial Roof Upgrade",
    location: "Oshkosh, WI",
    category: "Commercial",
    manufacturer: "Carlisle",
    warranty: "20-Year System",
    description:
      "Commercial roofing system designed for long-term durability and performance.",
    featured: false,
    image: "/images/projects/project-5.jpg",
  },
];