export type SidingProductColor = {
  id: string;
  name: string;
  image: string;
  alt: string;
};

export type SidingProductProfile = {
  id: string;
  label: string;
  tabLabel: string;
  status: "available" | "awaiting-images";
  description: string;
  colors: readonly SidingProductColor[];
};

export type SidingProductFeature = {
  id: "colors" | "profiles" | "sample" | "guidance";
  title: string;
  description: string;
};

export type SidingProductSelectorConfig = {
  productLine: string;
  eyebrow: string;
  title: string;
  description: string;
  introAction: {
    label: string;
    href: string;
  };
  features: readonly SidingProductFeature[];
  explorerEyebrow: string;
  allColorsTitle: string;
  sourceNote: string;
  disclaimer: string;
  finalCta: {
    title: string;
    description: string;
    estimateLabel: string;
    href: string;
    callLabel: string;
  };
  profiles: readonly SidingProductProfile[];
};

const imageRoot = "/images/services/siding/blue-door/d4";
const shakeImageRoot = "/images/services/siding/blue-door/shake";
const boardBattenImageRoot = "/images/services/siding/blue-door/board-batten";

export const sidingProductSelector: SidingProductSelectorConfig = {
  productLine: "Blue Door Vinyl Siding by Drexel",
  eyebrow: "BLUE DOOR SIDING OPTIONS",
  title: "Find the Right Look for Your Home",
  description:
    "Explore Blue Door vinyl siding profiles and colors to find a style that fits your home.",
  introAction: {
    label: "REQUEST A FREE SIDING ESTIMATE",
    href: "#service-estimate",
  },
  features: [
    {
      id: "colors",
      title: "16 D4 Lap colors",
      description: "Compare each supplied D4 Lap digital color preview.",
    },
    {
      id: "profiles",
      title: "3 siding profiles",
      description: "Explore the supplied Blue Door vinyl siding profile options.",
    },
    {
      id: "sample",
      title: "Physical sample check",
      description: "Confirm the final color with a physical product sample before ordering.",
    },
    {
      id: "guidance",
      title: "Project guidance",
      description: "Compare profile and color direction during your siding estimate.",
    },
  ],
  explorerEyebrow: "EXPLORE BLUE DOOR COLORS",
  allColorsTitle: "ALL AVAILABLE SIDING COLORS",
  sourceNote: "Color names follow the supplied Blue Door profile assets.",
  disclaimer: "Colors shown on screen are approximate. Actual product colors may vary.",
  finalCta: {
    title: "Ready to compare siding colors for your home?",
    description:
      "CM Roofing can help you compare Blue Door profile and color options for your siding project.",
    estimateLabel: "REQUEST A FREE SIDING ESTIMATE",
    href: "#service-estimate",
    callLabel: "CALL CM ROOFING",
  },
  profiles: [
    {
      id: "d4-lap",
      label: "D4 Lap",
      tabLabel: "D4 LAP",
      status: "available",
      description: "Blue Door D4 Lap with the 16 supplied digital color previews.",
      colors: [
        {
          id: "snow-white",
          name: "Snow White",
          image: `${imageRoot}/blue-door-d4-snow-white.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Snow White",
        },
        {
          id: "linen",
          name: "Linen",
          image: `${imageRoot}/blue-door-d4-linen.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Linen",
        },
        {
          id: "canyon-clay",
          name: "Canyon Clay",
          image: `${imageRoot}/blue-door-d4-canyon-clay.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Canyon Clay",
        },
        {
          id: "pebble",
          name: "Pebble",
          image: `${imageRoot}/blue-door-d4-pebble.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Pebble",
        },
        {
          id: "clover-gray",
          name: "Clover Gray",
          image: `${imageRoot}/blue-door-d4-clover-gray.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Clover Gray",
        },
        {
          id: "majestic-brick",
          name: "Majestic Brick",
          image: `${imageRoot}/blue-door-d4-majestic-brick.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Majestic Brick",
        },
        {
          id: "rockport-brown",
          name: "Rockport Brown",
          image: `${imageRoot}/blue-door-d4-rockport-brown.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Rockport Brown",
        },
        {
          id: "windswept-smoke",
          name: "Windswept Smoke",
          image: `${imageRoot}/blue-door-d4-windswept-smoke.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Windswept Smoke",
        },
        {
          id: "meadow-fern",
          name: "Meadow Fern",
          image: `${imageRoot}/blue-door-d4-meadow-fern.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Meadow Fern",
        },
        {
          id: "chesapeake-gray",
          name: "Chesapeake Gray",
          image: `${imageRoot}/blue-door-d4-chesapeake-gray.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Chesapeake Gray",
        },
        {
          id: "harbor-bay",
          name: "Harbor Bay",
          image: `${imageRoot}/blue-door-d4-harbor-bay.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Harbor Bay",
        },
        {
          id: "storm",
          name: "Storm",
          image: `${imageRoot}/blue-door-d4-storm.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Storm",
        },
        {
          id: "marine-dusk",
          name: "Marine Dusk",
          image: `${imageRoot}/blue-door-d4-marine-dusk.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Marine Dusk",
        },
        {
          id: "iron-ore",
          name: "Iron Ore",
          image: `${imageRoot}/blue-door-d4-iron-ore.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Iron Ore",
        },
        {
          id: "midnight-surf",
          name: "Midnight Surf",
          image: `${imageRoot}/blue-door-d4-midnight-surf.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Midnight Surf",
        },
        {
          id: "moonlit-moss",
          name: "Moonlit Moss",
          image: `${imageRoot}/blue-door-d4-moonlit-moss.png`,
          alt: "Blue Door D4 Lap vinyl siding digital color preview in Moonlit Moss",
        },
      ],
    },
    {
      id: "staggered-shake",
      label: 'Single 9" Staggered Shake',
      tabLabel: "STAGGERED SHAKE",
      status: "available",
      description:
        'Blue Door Single 9" Staggered Shake with the 16 supplied digital color previews.',
      colors: [
        {
          id: "snow-white",
          name: "Snow White",
          image: `${shakeImageRoot}/blue-door-shake-snow-white.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Snow White",
        },
        {
          id: "linen",
          name: "Linen",
          image: `${shakeImageRoot}/blue-door-shake-linen.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Linen",
        },
        {
          id: "canyon-clay",
          name: "Canyon Clay",
          image: `${shakeImageRoot}/blue-door-shake-canyon-clay.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Canyon Clay",
        },
        {
          id: "pebble",
          name: "Pebble",
          image: `${shakeImageRoot}/blue-door-shake-pebble.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Pebble",
        },
        {
          id: "clover-gray",
          name: "Clover Gray",
          image: `${shakeImageRoot}/blue-door-shake-clover-gray.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Clover Gray",
        },
        {
          id: "majestic-brick",
          name: "Majestic Brick",
          image: `${shakeImageRoot}/blue-door-shake-majestic-brick.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Majestic Brick",
        },
        {
          id: "rockport-brown",
          name: "Rockport Brown",
          image: `${shakeImageRoot}/blue-door-shake-rockport-brown.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Rockport Brown",
        },
        {
          id: "windswept-smoke",
          name: "Windswept Smoke",
          image: `${shakeImageRoot}/blue-door-shake-windswept-smoke.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Windswept Smoke",
        },
        {
          id: "meadow-fern",
          name: "Meadow Fern",
          image: `${shakeImageRoot}/blue-door-shake-meadow-fern.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Meadow Fern",
        },
        {
          id: "chesapeake-gray",
          name: "Chesapeake Gray",
          image: `${shakeImageRoot}/blue-door-shake-chesapeake-gray.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Chesapeake Gray",
        },
        {
          id: "harbor-bay",
          name: "Harbor Bay",
          image: `${shakeImageRoot}/blue-door-shake-harbor-bay.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Harbor Bay",
        },
        {
          id: "storm",
          name: "Storm",
          image: `${shakeImageRoot}/blue-door-shake-storm.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Storm",
        },
        {
          id: "marine-dusk",
          name: "Marine Dusk",
          image: `${shakeImageRoot}/blue-door-shake-marine-dusk.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Marine Dusk",
        },
        {
          id: "iron-ore",
          name: "Iron Ore",
          image: `${shakeImageRoot}/blue-door-shake-iron-ore.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Iron Ore",
        },
        {
          id: "midnight-surf",
          name: "Midnight Surf",
          image: `${shakeImageRoot}/blue-door-shake-midnight-surf.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Midnight Surf",
        },
        {
          id: "moonlit-moss",
          name: "Moonlit Moss",
          image: `${shakeImageRoot}/blue-door-shake-moonlit-moss.png`,
          alt: "Blue Door Single 9-inch Staggered Shake vinyl siding digital color preview in Moonlit Moss",
        },
      ],
    },
    {
      id: "board-and-batten",
      label: "Board & Batten",
      tabLabel: "BOARD & BATTEN",
      status: "available",
      description: "Blue Door Board & Batten with the 16 supplied digital color previews.",
      colors: [
        {
          id: "snow-white",
          name: "Snow White",
          image: `${boardBattenImageRoot}/blue-door-board-batten-snow-white.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Snow White",
        },
        {
          id: "linen",
          name: "Linen",
          image: `${boardBattenImageRoot}/blue-door-board-batten-linen.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Linen",
        },
        {
          id: "canyon-clay",
          name: "Canyon Clay",
          image: `${boardBattenImageRoot}/blue-door-board-batten-canyon-clay.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Canyon Clay",
        },
        {
          id: "pebble",
          name: "Pebble",
          image: `${boardBattenImageRoot}/blue-door-board-batten-pebble.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Pebble",
        },
        {
          id: "clover-gray",
          name: "Clover Gray",
          image: `${boardBattenImageRoot}/blue-door-board-batten-clover-gray.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Clover Gray",
        },
        {
          id: "majestic-brick",
          name: "Majestic Brick",
          image: `${boardBattenImageRoot}/blue-door-board-batten-majestic-brick.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Majestic Brick",
        },
        {
          id: "rockport-brown",
          name: "Rockport Brown",
          image: `${boardBattenImageRoot}/blue-door-board-batten-rockport-brown.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Rockport Brown",
        },
        {
          id: "windswept-smoke",
          name: "Windswept Smoke",
          image: `${boardBattenImageRoot}/blue-door-board-batten-windswept-smoke.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Windswept Smoke",
        },
        {
          id: "meadow-fern",
          name: "Meadow Fern",
          image: `${boardBattenImageRoot}/blue-door-board-batten-meadow-fern.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Meadow Fern",
        },
        {
          id: "chesapeake-gray",
          name: "Chesapeake Gray",
          image: `${boardBattenImageRoot}/blue-door-board-batten-chesapeake-gray.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Chesapeake Gray",
        },
        {
          id: "harbor-bay",
          name: "Harbor Bay",
          image: `${boardBattenImageRoot}/blue-door-board-batten-harbor-bay.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Harbor Bay",
        },
        {
          id: "storm",
          name: "Storm",
          image: `${boardBattenImageRoot}/blue-door-board-batten-storm.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Storm",
        },
        {
          id: "marine-dusk",
          name: "Marine Dusk",
          image: `${boardBattenImageRoot}/blue-door-board-batten-marine-dusk.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Marine Dusk",
        },
        {
          id: "iron-ore",
          name: "Iron Ore",
          image: `${boardBattenImageRoot}/blue-door-board-batten-iron-ore.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Iron Ore",
        },
        {
          id: "midnight-surf",
          name: "Midnight Surf",
          image: `${boardBattenImageRoot}/blue-door-board-batten-midnight-surf.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Midnight Surf",
        },
        {
          id: "moonlit-moss",
          name: "Moonlit Moss",
          image: `${boardBattenImageRoot}/blue-door-board-batten-moonlit-moss.png`,
          alt: "Blue Door Board & Batten vinyl siding digital color preview in Moonlit Moss",
        },
      ],
    },
  ],
};
