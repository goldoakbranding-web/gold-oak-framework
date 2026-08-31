export type ProjectCategory =
  | "Roofing"
  | "Siding"
  | "Storm Damage"
  | "Commercial";

export interface Project {
  id: number;
  title: string;
  location?: string;
  category: ProjectCategory;
  manufacturer?: string;
  warranty?: string;
  description: string;
  featured: boolean;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Residential Roof Preparation",
    category: "Roofing",
    description:
      "Active residential roof work showing exposed decking and underlayment preparation.",
    featured: true,
    image: "/images/projects/project-1.jpg",
  },

  {
    id: 2,
    title: "Residential Roof Work in Progress",
    category: "Roofing",
    description:
      "A real CM Roofing project photographed while removal and installation work remained active.",
    featured: false,
    image: "/images/projects/project-2.jpg",
  },

  {
    id: 3,
    title: "Installed Shingle Roof Detail",
    category: "Roofing",
    description:
      "Installed shingles, ridge caps, and a roof vent shown with active-work context still visible.",
    featured: false,
    image: "/images/projects/project-3.jpg",
  },

  {
    id: 4,
    title: "Active Residential Roof Project",
    category: "Roofing",
    description:
      "An overhead view documenting an active residential roofing project.",
    featured: false,
    image: "/images/projects/project-4.jpg",
  },

  {
    id: 5,
    title: "Residential New-Construction Roofing",
    category: "Roofing",
    description:
      "A residential new-construction roof photographed during active installation.",
    featured: false,
    image: "/images/projects/project-5.jpg",
  },
];
