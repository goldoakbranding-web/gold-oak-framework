"use client";

type RoofControlsProps = {
  isExploded: boolean;
  onExplodedChange: (value: boolean) => void;
};

export default function RoofControls({ isExploded, onExplodedChange }: RoofControlsProps) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-black/30 p-1 shadow-lg backdrop-blur-md" role="group" aria-label="Roof view controls">
      <button
        aria-pressed={!isExploded}
        className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.13em] transition sm:px-4 ${
          !isExploded ? "bg-white text-black" : "text-white/55 hover:text-white"
        }`}
        onClick={() => onExplodedChange(false)}
        type="button"
      >
        Assembled
      </button>
      <button
        aria-pressed={isExploded}
        className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.13em] transition sm:px-4 ${
          isExploded ? "bg-[#d8bd79] text-[#15130f]" : "text-white/55 hover:text-white"
        }`}
        onClick={() => onExplodedChange(true)}
        type="button"
      >
        Exploded
      </button>
    </div>
  );
}
