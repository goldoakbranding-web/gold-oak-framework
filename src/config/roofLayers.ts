export type RoofLayerMaterial =
  | "shingles"
  | "underlayment"
  | "deck"
  | "framing"
  | "insulation"
  | "interior";

export type RoofLayer = {
  id: string;
  number: string;
  name: string;
  shortName: string;
  eyebrow: string;
  purpose: string;
  whyItMatters: string;
  construction: string;
  color: string;
  accent: string;
  material: RoofLayerMaterial;
};

/**
 * Ordered from the exterior weather surface to the finished interior.
 * Ice-and-water protection is intentionally drawn as a localized detail
 * within the underlayment instead of as an inaccurate full-roof membrane.
 */
export const roofLayers: RoofLayer[] = [
  {
    id: "shingles",
    number: "01",
    name: "Architectural Shingles",
    shortName: "Shingles",
    eyebrow: "Exterior weather surface",
    purpose: "Dimensional asphalt shingles shed water, resist wind, and form the roof's finished protective surface.",
    whyItMatters: "Correct staggering, fastening, starter strips, ridge caps, and edge details help the roof perform as one weather-resistant system.",
    construction: "Staggered laminated shingle courses with starter strip, ridge-cap shingles, and formed drip-edge metal.",
    color: "#3b3a36",
    accent: "#d8bd79",
    material: "shingles",
  },
  {
    id: "underlayment",
    number: "02",
    name: "Protective Underlayment",
    shortName: "Underlayment",
    eyebrow: "Secondary water barrier",
    purpose: "Synthetic underlayment adds a continuous water-shedding layer between the shingles and roof deck.",
    whyItMatters: "It protects the deck during installation and provides another line of defense beneath the finished roof.",
    construction: "Synthetic membrane across the field with self-adhered ice-and-water protection localized at vulnerable eaves and transitions.",
    color: "#39434a",
    accent: "#a9c4cf",
    material: "underlayment",
  },
  {
    id: "roof-deck",
    number: "03",
    name: "Roof Deck",
    shortName: "Roof Deck",
    eyebrow: "Structural sheathing",
    purpose: "OSB or plywood sheathing creates the solid structural surface that supports the roofing system.",
    whyItMatters: "A sound, properly fastened deck gives every layer above it a stable foundation and reliable fastening base.",
    construction: "Panelized structural wood sheathing with deliberate joints and support over the framing below.",
    color: "#a5784f",
    accent: "#e4b77d",
    material: "deck",
  },
  {
    id: "framing-ventilation",
    number: "04",
    name: "Roof Framing / Ventilation",
    shortName: "Framing",
    eyebrow: "Structure and airflow",
    purpose: "Rafters or trusses carry roof loads while a balanced ventilation path helps move heat and moisture out of the attic.",
    whyItMatters: "Straight, properly spaced framing supports the assembly, while intake and ridge ventilation help manage heat and moisture.",
    construction: "Dimensional-lumber rafters, ties, and ridge structure with an unobstructed airflow path to the ridge vent.",
    color: "#ad8158",
    accent: "#d8bd79",
    material: "framing",
  },
  {
    id: "insulation",
    number: "05",
    name: "Insulation",
    shortName: "Insulation",
    eyebrow: "Thermal control layer",
    purpose: "Insulation slows heat transfer between the conditioned home and the roof or attic assembly.",
    whyItMatters: "Continuous, correctly fitted insulation supports comfort and efficiency without blocking the roof's required airflow path.",
    construction: "Fitted batt insulation placed between framing members with ventilation channels kept clear above it.",
    color: "#c7a574",
    accent: "#ead39a",
    material: "insulation",
  },
  {
    id: "interior-finish",
    number: "06",
    name: "Interior Finish",
    shortName: "Interior Finish",
    eyebrow: "Finished ceiling surface",
    purpose: "The interior ceiling layer closes the assembly and creates a smooth finished surface inside the home.",
    whyItMatters: "Properly supported and finished drywall completes the separation between the living space and the insulated roof structure.",
    construction: "Smooth gypsum-board ceiling panels fastened to the framing and finished at the panel joints.",
    color: "#d9d4c7",
    accent: "#f0e5c4",
    material: "interior",
  },
];
