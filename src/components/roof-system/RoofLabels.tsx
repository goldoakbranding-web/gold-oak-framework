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
    <nav aria-label="Roof system layers" className="grid grid-cols-2 gap-x-3 gap-y-1 sm:grid-cols-4 lg:block lg:space-y-1">
      {roofLayers.map((layer) => {
        const isActive = (hoveredLayerId ?? activeLayerId) === layer.id;

        return (
          <button
            aria-pressed={activeLayerId === layer.id}
            className={`group flex w-full items-center gap-2 rounded-xl px-2 py-2 text-left transition duration-300 lg:gap-3 lg:px-3 ${
              isActive ? "bg-white/[.07]" : "hover:bg-white/[.04]"
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
              className={`h-px shrink-0 transition-all duration-300 ${isActive ? "w-5" : "w-2 group-hover:w-4"}`}
              style={{ backgroundColor: isActive ? layer.accent : "rgba(255,255,255,.24)" }}
            />
            <span className={`font-mono text-[9px] tracking-[.16em] ${isActive ? "text-[#d8bd79]" : "text-white/35"}`}>
              {layer.number}
            </span>
            <span className={`min-w-0 text-[10px] font-semibold uppercase tracking-[.1em] transition-colors lg:text-[11px] ${isActive ? "text-white" : "text-white/54 group-hover:text-white/80"}`}>
              {layer.name}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
