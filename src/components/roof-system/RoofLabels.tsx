"use client";

import { roofLayers } from "@/config/roofLayers";

type RoofLabelsProps = {
  activeLayerId: string;
  hoveredLayerId: string | null;
  onLayerChange: (id: string) => void;
  onHoverChange: (id: string | null) => void;
};

export default function RoofLabels({
  activeLayerId,
  hoveredLayerId,
  onLayerChange,
  onHoverChange,
}: RoofLabelsProps) {
  return (
    <nav aria-label="Roof system layers" className="grid grid-cols-2 gap-1 lg:block lg:space-y-1">
      {roofLayers.map((layer) => {
        const isActive = (hoveredLayerId ?? activeLayerId) === layer.id;

        return (
          <button
            aria-pressed={activeLayerId === layer.id}
            className={`group flex min-h-11 w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#d8bd79] lg:gap-3 lg:px-3 motion-reduce:transition-none ${
              isActive ? "bg-white/[.08]" : "hover:bg-white/[.04]"
            }`}
            key={layer.id}
            onBlur={() => onHoverChange(null)}
            onClick={() => onLayerChange(layer.id)}
            onFocus={() => onHoverChange(layer.id)}
            onMouseEnter={() => onHoverChange(layer.id)}
            onMouseLeave={() => onHoverChange(null)}
            type="button"
          >
            <span
              className={`h-px shrink-0 transition-all duration-300 motion-reduce:transition-none ${isActive ? "w-4 lg:w-5" : "w-2 group-hover:w-4"}`}
              style={{ backgroundColor: isActive ? layer.accent : "rgba(255,255,255,.24)" }}
            />
            <span className={`font-mono text-[9px] tracking-[.14em] ${isActive ? "text-[#d8bd79]" : "text-white/35"}`}>
              {layer.number}
            </span>
            <span className={`min-w-0 text-[9px] font-semibold uppercase tracking-[.08em] transition-colors lg:text-[11px] lg:tracking-[.1em] motion-reduce:transition-none ${isActive ? "text-white" : "text-white/54 group-hover:text-white/80"}`}>
              {layer.shortName}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
