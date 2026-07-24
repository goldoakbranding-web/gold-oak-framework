export type ProcessIcon = "inspection" | "estimate" | "materials" | "installation" | "walkthrough";

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ProcessIcon;
};

export const processSteps: ProcessStep[] = [
  {
    id: "inspection",
    number: "01",
    title: "Free Inspection",
    description: "We inspect your roof, identify any issues, and answer your questions.",
    icon: "inspection",
  },
  {
    id: "estimate",
    number: "02",
    title: "Honest Estimate",
    description: "Receive a clear, detailed estimate with no hidden surprises.",
    icon: "estimate",
  },
  {
    id: "materials",
    number: "03",
    title: "Material Selection",
    description: "Choose quality materials and colors that fit your home and budget.",
    icon: "materials",
  },
  {
    id: "installation",
    number: "04",
    title: "Professional Installation",
    description: "Our experienced team completes the project with attention to detail and daily cleanup.",
    icon: "installation",
  },
  {
    id: "walkthrough",
    number: "05",
    title: "Final Walkthrough",
    description: "We inspect the finished work with you and make sure everything meets our standards.",
    icon: "walkthrough",
  },
];
