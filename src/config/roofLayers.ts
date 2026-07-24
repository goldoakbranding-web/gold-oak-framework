export type RoofLayer = {
  id: string;
  number: string;
  name: string;
  eyebrow: string;
  purpose: string;
  whyItMatters: string;
  manufacturerOptions: string;
  warranty: string;
  installationNote: string;
  color: string;
  accent: string;
  thickness: number;
  material: "shingle" | "membrane" | "deck" | "vent" | "metal";
};

export const roofLayers: RoofLayer[] = [
  {
    id: "shingles",
    number: "01",
    name: "Architectural Shingles",
    eyebrow: "Primary weather surface",
    purpose: "The dimensional outer finish that sheds water, resists wind, and defines your roofline.",
    whyItMatters: "A laminated profile gives the roof depth and a stronger defense against the freeze-thaw cycles common in Northeast Wisconsin.",
    manufacturerOptions: "GAF Timberline HDZ | CertainTeed Landmark | Owens Corning Duration",
    warranty: "Limited lifetime material coverage, with enhanced system warranties available.",
    installationNote: "Installed in precisely staggered courses with high-wind fastening patterns.",
    color: "#45484a",
    accent: "#d8bd79",
    thickness: 20,
    material: "shingle",
  },
  {
    id: "starter-strip",
    number: "02",
    name: "Starter Strip",
    eyebrow: "Wind-locking first course",
    purpose: "Creates the sealed first line of defense at the roof edge.",
    whyItMatters: "The starter course locks the shingle system into place where wind uplift is most aggressive.",
    manufacturerOptions: "GAF WeatherBlocker | CertainTeed SwiftStart | Owens Corning Starter Strip",
    warranty: "Covered when installed as part of a qualifying manufacturer system.",
    installationNote: "Aligned flush at eaves and rakes before the field shingle installation begins.",
    color: "#776c58",
    accent: "#d6b76c",
    thickness: 9,
    material: "membrane",
  },
  {
    id: "ice-water",
    number: "03",
    name: "Ice & Water Shield",
    eyebrow: "Self-sealing leak barrier",
    purpose: "A self-adhered membrane that seals vulnerable areas against wind-driven water and ice dams.",
    whyItMatters: "It provides critical secondary protection at eaves, valleys, walls, and roof penetrations.",
    manufacturerOptions: "GAF WeatherWatch | CertainTeed WinterGuard | Owens Corning WeatherLock",
    warranty: "Integrated system coverage is available from select manufacturers.",
    installationNote: "Applied to clean, dry decking with fully lapped seams and wrapped transitions.",
    color: "#496b83",
    accent: "#91c5df",
    thickness: 8,
    material: "membrane",
  },
  {
    id: "underlayment",
    number: "04",
    name: "Synthetic Underlayment",
    eyebrow: "Breathable secondary barrier",
    purpose: "A durable water-shedding layer installed beneath the shingles across the roof deck.",
    whyItMatters: "It protects the deck during installation and adds a reliable second barrier for years to come.",
    manufacturerOptions: "GAF Tiger Paw | CertainTeed RoofRunner | Owens Corning ProArmor",
    warranty: "System-qualified underlayments support enhanced manufacturer warranties.",
    installationNote: "Mechanically fastened with printed overlap guides and carefully sealed penetrations.",
    color: "#313943",
    accent: "#a7b9c3",
    thickness: 10,
    material: "membrane",
  },
  {
    id: "roof-deck",
    number: "05",
    name: "Roof Deck",
    eyebrow: "Structural foundation",
    purpose: "The engineered wood substrate that creates a stable, continuous base for the entire roof system.",
    whyItMatters: "A sound deck is essential for fastening strength, a flat finish, and long-term system performance.",
    manufacturerOptions: "APA-rated CDX plywood | ZIP System sheathing | LP Structural Solutions",
    warranty: "Manufacturer coverage varies by substrate; workmanship protection is included with a full replacement.",
    installationNote: "Inspected for integrity, re-nailed as needed, and replaced where deterioration is found.",
    color: "#9a7450",
    accent: "#f0c58d",
    thickness: 24,
    material: "deck",
  },
  {
    id: "ventilation",
    number: "06",
    name: "Ventilation",
    eyebrow: "Balanced airflow path",
    purpose: "A continuous ridge ventilation path that releases heat and moisture from the attic.",
    whyItMatters: "Balanced airflow supports shingle longevity, energy efficiency, and a healthier roof assembly.",
    manufacturerOptions: "GAF Cobra | CertainTeed Air Vent | Owens Corning VentSure",
    warranty: "Covered under qualifying roof-system warranties when balanced intake is verified.",
    installationNote: "Ridge opening is sized to code and paired with adequate soffit intake ventilation.",
    color: "#202426",
    accent: "#d8bd79",
    thickness: 14,
    material: "vent",
  },
  {
    id: "drip-edge",
    number: "07",
    name: "Drip Edge",
    eyebrow: "Precision edge protection",
    purpose: "A formed metal flashing that directs water cleanly from the roof edge into the gutter system.",
    whyItMatters: "It prevents water from wicking beneath the roofing materials and protects the fascia below.",
    manufacturerOptions: "Aluminum D-style | Steel D-style | Custom color-matched edge metal",
    warranty: "Finish coverage varies by metal and coating; workmanship is included in the installed system.",
    installationNote: "Installed with correct membrane sequencing to keep runoff outside the building envelope.",
    color: "#77766f",
    accent: "#d7d0bd",
    thickness: 7,
    material: "metal",
  },
];
