export type RoofingShingleColor = {
  id: string;
  name: string;
  image: string;
  alt: string;
};

export type RoofingShingleBoard = {
  id: string;
  label: string;
  description: string;
  image: string;
  alt: string;
  colors: readonly RoofingShingleColor[];
};

export type RoofingShingleFeature = {
  id: "colors" | "boards" | "sample" | "guidance";
  title: string;
  description: string;
};

export type RoofingShingleSelectorConfig = {
  eyebrow: string;
  title: string;
  description: string;
  introAction: {
    label: string;
    href: string;
  };
  features: readonly RoofingShingleFeature[];
  explorerEyebrow: string;
  allColorsTitle: string;
  sourceNote: string;
  disclaimer: string;
  finalCta: {
    title: string;
    description: string;
    estimateLabel: string;
    callLabel: string;
  };
  boards: readonly RoofingShingleBoard[];
};

const imageRoot = "/images/services/roofing/shingles";

export const roofingShingleSelector: RoofingShingleSelectorConfig = {
  eyebrow: "AVAILABLE SHINGLE OPTIONS",
  title: "Find the Right Look for Your Home",
  description:
    "Your roof is a major visual part of your home. Explore 12 available shingle color options to find a look that complements the property.",
  introAction: {
    label: "REQUEST A FREE ESTIMATE",
    href: "#service-estimate",
  },
  features: [
    {
      id: "colors",
      title: "12 labeled colors",
      description: "Compare every labeled shingle texture supplied for this selector.",
    },
    {
      id: "boards",
      title: "3 source boards",
      description: "Explore the original Board 1, Board 2, and Board 3 groupings.",
    },
    {
      id: "sample",
      title: "Physical sample check",
      description: "Confirm the final color in person before ordering materials.",
    },
    {
      id: "guidance",
      title: "Project guidance",
      description: "Talk through color direction during your roofing estimate.",
    },
  ],
  explorerEyebrow: "EXPLORE OUR SHINGLE COLORS",
  allColorsTitle: "ALL 12 SHINGLE COLOR OPTIONS",
  sourceNote: "Names and grouping follow the photographed sample boards.",
  disclaimer:
    "Digital color can vary by screen, lighting, and roof plane. Confirm your final selection with a physical sample; product availability can vary when materials are ordered.",
  finalCta: {
    title: "Not sure which color is right for your home?",
    description:
      "Our team can help you compare shingle colors for your home and project.",
    estimateLabel: "SCHEDULE YOUR FREE ESTIMATE",
    callLabel: "CALL CM ROOFING",
  },
  boards: [
    {
      id: "board-1",
      label: "Board 1",
      description: "Four labeled colors documented together on the first photographed source board.",
      image: `${imageRoot}/board-1.jpeg`,
      alt: "Photographed sample board with Heather Blend, Burnt Sienna, Resawn Shake, and Hunter Green shingles",
      colors: [
        {
          id: "heather-blend",
          name: "MAX DEF HEATHER BLEND",
          image: `${imageRoot}/heather-blend.png`,
          alt: "Close-up shingle texture for MAX DEF HEATHER BLEND",
        },
        {
          id: "burnt-sienna",
          name: "MAX DEF BURNT SIENNA",
          image: `${imageRoot}/burnt-sienna.png`,
          alt: "Close-up shingle texture for MAX DEF BURNT SIENNA",
        },
        {
          id: "resawn-shake",
          name: "MAX DEF RESAWN SHAKE",
          image: `${imageRoot}/resawn-shake.png`,
          alt: "Close-up shingle texture for MAX DEF RESAWN SHAKE",
        },
        {
          id: "hunter-green",
          name: "MAX DEF HUNTER GREEN",
          image: `${imageRoot}/hunter-green.png`,
          alt: "Close-up shingle texture for MAX DEF HUNTER GREEN",
        },
      ],
    },
    {
      id: "board-2",
      label: "Board 2",
      description: "Five labeled colors documented together on the second photographed source board.",
      image: `${imageRoot}/board-2.jpeg`,
      alt: "Photographed sample board with Weathered Wood, Pewter, Moire Black, Espresso, and Driftwood shingles",
      colors: [
        {
          id: "weathered-wood",
          name: "MAX DEF WEATHERED WOOD",
          image: `${imageRoot}/weathered-wood.png`,
          alt: "Close-up shingle texture for MAX DEF WEATHERED WOOD",
        },
        {
          id: "pewter",
          name: "MAX DEF PEWTER",
          image: `${imageRoot}/pewter.png`,
          alt: "Close-up shingle texture for MAX DEF PEWTER",
        },
        {
          id: "moire-black",
          name: "MAX DEF MOIRE BLACK",
          image: `${imageRoot}/moire-black.png`,
          alt: "Close-up shingle texture for MAX DEF MOIRE BLACK",
        },
        {
          id: "espresso",
          name: "MAX DEF ESPRESSO",
          image: `${imageRoot}/espresso.png`,
          alt: "Close-up shingle texture for MAX DEF ESPRESSO",
        },
        {
          id: "driftwood",
          name: "MAX DEF DRIFTWOOD",
          image: `${imageRoot}/driftwood.png`,
          alt: "Close-up shingle texture for MAX DEF DRIFTWOOD",
        },
      ],
    },
    {
      id: "board-3",
      label: "Board 3",
      description: "Three labeled colors documented together on the third photographed source board.",
      image: `${imageRoot}/board-3.jpeg`,
      alt: "Photographed sample board with Silver Birch, Granite Gray, and Georgetown Gray shingles",
      colors: [
        {
          id: "silver-birch",
          name: "SILVER BIRCH",
          image: `${imageRoot}/silver-birch.png`,
          alt: "Close-up shingle texture for SILVER BIRCH",
        },
        {
          id: "granite-gray",
          name: "MAX DEF GRANITE GRAY",
          image: `${imageRoot}/granite-gray.png`,
          alt: "Close-up shingle texture for MAX DEF GRANITE GRAY",
        },
        {
          id: "georgetown-gray",
          name: "MAX DEF GEORGETOWN GRAY",
          image: `${imageRoot}/georgetown-gray.png`,
          alt: "Close-up shingle texture for MAX DEF GEORGETOWN GRAY",
        },
      ],
    },
  ],
};
