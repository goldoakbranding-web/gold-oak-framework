export type GentekSoffitVentilation =
  | { kind: "solid" }
  | {
      kind: "vented";
      squareInchesPerLinealFoot: 3.9 | 7.8 | 11.6;
    };

type GentekProfileBase = {
  id: string;
  name: string;
  tabLabel: string;
  description: string;
  image: string;
  alt: string;
  finish: "Poly";
  texture: "Smooth";
};

export type GentekSoffitProfile = GentekProfileBase & {
  kind: "soffit";
  exposureInches: 12 | 16;
  lengthFeet: 12;
  ventilation: GentekSoffitVentilation;
};

export type GentekFasciaProfile = GentekProfileBase & {
  kind: "fascia";
  nominalWidthInches: 6 | 8;
};

export type GentekProfile = GentekSoffitProfile | GentekFasciaProfile;

export type GentekColor = {
  id:
    | "bright-white"
    | "linen"
    | "sandstone"
    | "almond"
    | "wicker"
    | "canyon-clay"
    | "pebble"
    | "brownstone"
    | "norwood"
    | "thistle"
    | "terratone"
    | "musket-brown"
    | "royal-brown"
    | "sage"
    | "grecian-green"
    | "dover-gray"
    | "bronze"
    | "black";
  name: string;
  image: string;
  alt: string;
  interaction: "display-only";
};

const profileRoot = "/images/services/soffit-fascia/gentek/profiles";
const colorRoot = "/images/services/soffit-fascia/gentek/colors";

export const gentekProfiles = [
  {
    id: "12-t4-solid",
    kind: "soffit",
    name: '12" T4 – Solid',
    tabLabel: "12\" T4 SOLID",
    description:
      "A smooth, solid 12-inch aluminum soffit profile for roofline areas where intake ventilation is not part of the specified panel.",
    image: `${profileRoot}/gentek-soffit-12-t4-solid-bright-white.png`,
    alt: "Gentek 12-inch T4 Solid aluminum soffit profile in Bright White",
    exposureInches: 12,
    lengthFeet: 12,
    finish: "Poly",
    texture: "Smooth",
    ventilation: { kind: "solid" },
  },
  {
    id: "12-t4-center-vented",
    kind: "soffit",
    name: '12" T4 – Center Vented',
    tabLabel: "12\" T4 CENTER VENTED",
    description:
      "A 12-inch smooth soffit profile with a centered vent pattern for projects that call for defined intake ventilation.",
    image: `${profileRoot}/gentek-soffit-12-t4-center-vented-bright-white.png`,
    alt: "Gentek 12-inch T4 Center Vented aluminum soffit profile in Bright White",
    exposureInches: 12,
    lengthFeet: 12,
    finish: "Poly",
    texture: "Smooth",
    ventilation: { kind: "vented", squareInchesPerLinealFoot: 3.9 },
  },
  {
    id: "12-t4-fully-vented",
    kind: "soffit",
    name: '12" T4 – Fully Vented',
    tabLabel: "12\" T4 FULLY VENTED",
    description:
      "A fully vented 12-inch smooth soffit profile for roofline plans that call for greater intake area through the panel.",
    image: `${profileRoot}/gentek-soffit-12-t4-fully-vented-bright-white.png`,
    alt: "Gentek 12-inch T4 Fully Vented aluminum soffit profile in Bright White",
    exposureInches: 12,
    lengthFeet: 12,
    finish: "Poly",
    texture: "Smooth",
    ventilation: { kind: "vented", squareInchesPerLinealFoot: 11.6 },
  },
  {
    id: "16-quad-4-solid",
    kind: "soffit",
    name: '16" Quad 4 – Solid',
    tabLabel: "16\" QUAD 4 SOLID",
    description:
      "A wider 16-inch solid aluminum soffit panel with a smooth finish and defined Quad 4 profile.",
    image: `${profileRoot}/gentek-soffit-16-quad4-solid-bright-white.png`,
    alt: "Gentek 16-inch Quad 4 Solid aluminum soffit profile in Bright White",
    exposureInches: 16,
    lengthFeet: 12,
    finish: "Poly",
    texture: "Smooth",
    ventilation: { kind: "solid" },
  },
  {
    id: "16-quad-4-center-vented",
    kind: "soffit",
    name: '16" Quad 4 – Center Vented',
    tabLabel: "16\" QUAD 4 CENTER VENTED",
    description:
      "A wider 16-inch smooth soffit profile with centered ventilation for a coordinated roofline and intake plan.",
    image: `${profileRoot}/gentek-soffit-16-quad4-center-vented-bright-white.png`,
    alt: "Gentek 16-inch Quad 4 Center Vented aluminum soffit profile in Bright White",
    exposureInches: 16,
    lengthFeet: 12,
    finish: "Poly",
    texture: "Smooth",
    ventilation: { kind: "vented", squareInchesPerLinealFoot: 7.8 },
  },
  {
    id: "6-fascia",
    kind: "fascia",
    name: '6" Fascia',
    tabLabel: "6\" FASCIA",
    description:
      "A smooth 6-inch Deluxe aluminum fascia profile for a clean, protected finish along compatible roof edges and trim areas.",
    image: `${profileRoot}/gentek-fascia-6-bright-white.png`,
    alt: "Gentek 6-inch Deluxe aluminum fascia profile in Bright White",
    nominalWidthInches: 6,
    finish: "Poly",
    texture: "Smooth",
  },
  {
    id: "8-fascia",
    kind: "fascia",
    name: '8" Fascia',
    tabLabel: "8\" FASCIA",
    description:
      "A smooth 8-inch Deluxe aluminum fascia profile for deeper roof-edge coverage and a finished exterior appearance.",
    image: `${profileRoot}/gentek-fascia-8-bright-white.png`,
    alt: "Gentek 8-inch Deluxe aluminum fascia profile in Bright White",
    nominalWidthInches: 8,
    finish: "Poly",
    texture: "Smooth",
  },
] as const satisfies readonly GentekProfile[];

const colorDefinitions = [
  ["bright-white", "Bright White"],
  ["linen", "Linen"],
  ["sandstone", "Sandstone"],
  ["almond", "Almond"],
  ["wicker", "Wicker"],
  ["canyon-clay", "Canyon Clay"],
  ["pebble", "Pebble"],
  ["brownstone", "Brownstone"],
  ["norwood", "Norwood"],
  ["thistle", "Thistle"],
  ["terratone", "Terratone"],
  ["musket-brown", "Musket Brown"],
  ["royal-brown", "Royal Brown"],
  ["sage", "Sage"],
  ["grecian-green", "Grecian Green"],
  ["dover-gray", "Dover Gray"],
  ["bronze", "Bronze"],
  ["black", "Black"],
] as const;

export const gentekColors = colorDefinitions.map(([id, name]) => ({
  id,
  name,
  image: `${colorRoot}/gentek-color-${id}.png`,
  alt: `Gentek ${name} aluminum color swatch`,
  interaction: "display-only" as const,
})) satisfies readonly GentekColor[];

export const soffitFasciaProductContent = {
  productLine: "Gentek Hi-Tensile Aluminum Soffit & Deluxe Fascia",
  selector: {
    eyebrow: "Gentek profile guide",
    title: "Compare the Profile Before Choosing the Finish.",
    description:
      "Explore five Bright White soffit profiles and two Deluxe fascia sizes. Selecting a profile updates the product view and the supplied specifications; color swatches remain a separate coordination reference.",
    imageNote: "Profile imagery is shown in Bright White for shape and vent-pattern comparison.",
  },
  colors: {
    eyebrow: "Available colors",
    title: "Coordinate the Entire Roofline.",
    description:
      "Compare the 18 supplied Gentek color references for soffit, fascia, siding, trim, and rainware coordination.",
    disclaimer: "Colors shown on screen are approximate. Actual product colors may vary.",
    availabilityNote:
      "Color availability can vary by product profile and project. Confirm the final selection with CM Roofing and a physical product sample before ordering.",
    coordinationTitle: "Color Clear Through®",
    coordinationDescription:
      "Gentek's Color Clear Through® system helps coordinate soffit, fascia, siding, trim, and rainware so the exterior reads as one intentional design.",
  },
  performance: {
    eyebrow: "Superior performance & appearance",
    title: "Superior Strength Without the Heavy Maintenance.",
    description:
      "Gentek Hi-Tensile soffit is roll formed from a specially formulated commercial-grade aluminum alloy designed to deliver useful strength and rigidity without the upkeep demands of painted or stained wood.",
    details: [
      {
        title: "Layered exterior protection",
        description:
          "Corrosion-resistant protection and a thermosetting polyester finish help shield the aluminum surface in exterior conditions.",
      },
      {
        title: 'Defined 1/2" V-groove',
        description:
          "The substantial groove adds definition to the profile while contributing to panel rigidity.",
      },
      {
        title: "Low-luster satin finish",
        description:
          "The restrained surface helps reduce the visibility of everyday marring and scuffing along the roofline.",
      },
      {
        title: "Aluminum construction",
        description:
          "Aluminum does not rot like wood, and its factory-applied finish avoids the peeling and flaking associated with painted or stained wood.",
      },
    ],
  },
  tensile: {
    eyebrow: "Increased tensile strength",
    title: "What Strength Means at the Roofline.",
    description:
      "Tensile strength describes how much stress a material can withstand. Two measurements help explain how a panel responds before and as deformation begins.",
    comparisons: [
      {
        label: "Ultimate tensile strength",
        description:
          "The maximum stress a material can withstand before failure through cracking, splitting, severe deformation, or a similar break point.",
      },
      {
        label: "Yield tensile strength",
        description:
          "The stress level at which a material begins to deform, even though it has not completely failed.",
      },
    ],
  },
  ventilation: {
    eyebrow: "Why ventilation matters",
    title: "Give Outside Air a Clear Intake Path.",
    description:
      "Where the roof system calls for it, vented soffit allows outside air to enter at the eaves and move through the attic or rafter space toward the roof's exhaust ventilation.",
    benefits: [
      "Supports a balanced attic-ventilation plan",
      "Helps reduce trapped heat in the roof space",
      "Helps manage excess moisture",
      "Supports the surrounding roof and structural system",
    ],
    note:
      "The right intake profile depends on the existing roof, available exhaust ventilation, eave construction, and project scope. CM Roofing reviews those conditions before recommending a vented profile.",
  },
  fascia: {
    eyebrow: "Deluxe fascia",
    title: "A Clean, Protected Finish Along the Roof Edge.",
    description:
      "Gentek Deluxe fascia uses a protective Poly coating, a smooth texture, and a low-luster finish for roof edges and other trim areas that are difficult to maintain.",
    functions: [
      "Finishes the visible roof edge",
      "Helps protect compatible exposed wood beneath the covering",
      "Creates a clean surface along the roofline",
      "Coordinates with soffit, siding, trim, and gutters",
    ],
  },
  upkeep: {
    eyebrow: "Simple upkeep",
    title: "Less Maintenance. More Time Enjoying Your Home.",
    description:
      "Gentek aluminum soffit and fascia pair durable aluminum construction with a resilient exterior finish for low routine maintenance. Most airborne dust and dirt can generally be removed with a simple garden-hose rinse.",
  },
  warranty: {
    eyebrow: "Lifetime protection",
    title: "Built for the Long Run.",
    description:
      "Gentek Hi-Tensile aluminum soffit and Deluxe fascia are backed by a lifetime limited, non-prorated, transferable manufacturer warranty.",
    disclaimer:
      "Warranty terms, eligibility, exclusions, and transfer requirements are governed by Gentek's official warranty documentation. Ask CM Roofing for complete warranty details.",
  },
} as const;
