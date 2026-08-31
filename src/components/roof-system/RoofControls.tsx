"use client";

type RoofControlsProps = {
  mode: "scroll" | "complete" | "exploded";
  onExplode: () => void;
  onShowComplete: () => void;
};

export default function RoofControls({ mode, onExplode, onShowComplete }: RoofControlsProps) {
  return (
    <div
      aria-label="Roof view controls"
      className="inline-flex max-w-full rounded-full border border-white/10 bg-black/35 p-1 shadow-lg backdrop-blur-md"
      role="group"
    >
      <button
        aria-pressed={mode === "complete"}
        className={`inline-flex min-h-11 items-center justify-center rounded-full px-3 text-[9px] font-semibold uppercase tracking-[.1em] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8bd79] sm:px-4 sm:text-[10px] sm:tracking-[.13em] motion-reduce:transition-none ${
          mode === "complete" ? "bg-white text-black" : "text-white/60 hover:text-white"
        }`}
        onClick={onShowComplete}
        type="button"
      >
        Show complete roof
      </button>
      <button
        aria-pressed={mode === "exploded"}
        className={`inline-flex min-h-11 items-center justify-center rounded-full px-3 text-[9px] font-semibold uppercase tracking-[.1em] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8bd79] sm:px-4 sm:text-[10px] sm:tracking-[.13em] motion-reduce:transition-none ${
          mode === "exploded" ? "bg-[#d8bd79] text-[#15130f]" : "text-white/60 hover:text-white"
        }`}
        onClick={onExplode}
        type="button"
      >
        Explode roof
      </button>
    </div>
  );
}
