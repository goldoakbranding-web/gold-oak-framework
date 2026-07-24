"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { roofLayers } from "@/config/roofLayers";
import RoofControls from "./RoofControls";
import RoofInfoCard from "./RoofInfoCard";
import RoofLabels from "./RoofLabels";

const RoofScene = dynamic(() => import("./RoofScene"), { ssr: false });

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function RoofViewer() {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [activeLayerId, setActiveLayerId] = useState(roofLayers[0].id);
  const [hoveredLayerId, setHoveredLayerId] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [scrollSeparation, setScrollSeparation] = useState(0);
  const [isExploded, setIsExploded] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateSeparation = () => {
      const element = viewerRef.current;
      if (!element) return;

      const bounds = element.getBoundingClientRect();
      const travel = Math.max(bounds.height * 0.7, 1);
      const nextSeparation = clamp((window.innerHeight * 0.72 - bounds.top) / travel, 0, 1);

      setScrollSeparation((current) => (Math.abs(current - nextSeparation) > 0.012 ? nextSeparation : current));
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateSeparation);
    };

    updateSeparation();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const selectedLayer = roofLayers.find((layer) => layer.id === activeLayerId) ?? roofLayers[0];
  const displayedLayer = roofLayers.find((layer) => layer.id === (hoveredLayerId ?? activeLayerId)) ?? selectedLayer;
  const separation = isExploded ? 1 : scrollSeparation * 0.82;

  return (
    <div className="mx-auto max-w-[1220px]" ref={viewerRef}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[.18em] text-white/45">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#d8bd79] shadow-[0_0_12px_#d8bd79]" />
          Interactive system view
        </div>
        <RoofControls isExploded={isExploded} onExplodedChange={setIsExploded} />
      </div>

      <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#11110e] shadow-[0_30px_100px_rgba(0,0,0,.48)] sm:rounded-[38px]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]" />
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#d8bd79]/10 blur-[100px]" />
        <div className="absolute -right-36 bottom-0 h-80 w-80 rounded-full bg-[#6b93a7]/10 blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e9d6a4]/70 to-transparent" />

        <div className="relative grid min-h-[670px] lg:grid-cols-[minmax(0,1fr)_310px]">
          <div className="relative min-h-[430px] overflow-hidden border-b border-white/10 lg:min-h-[670px] lg:border-b-0 lg:border-r">
            <RoofScene
              activeLayerId={activeLayerId}
              hoveredLayerId={hoveredLayerId}
              isReady={isReady}
              onHoverChange={setHoveredLayerId}
              onLayerChange={setActiveLayerId}
              separation={separation}
            />

            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-7">
              <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[.18em] text-white/48 backdrop-blur-md">
                Scroll to separate
              </div>
              <div className="font-mono text-[10px] tracking-[.2em] text-white/32">SYSTEM / 07</div>
            </div>

            <div className="pointer-events-none absolute bottom-4 left-5 right-5 flex items-center justify-between sm:bottom-7 sm:left-7 sm:right-7">
              <p className="text-[10px] uppercase tracking-[.18em] text-white/38">Hover a layer to inspect</p>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#d8bd79] to-transparent sm:w-32" />
            </div>
          </div>

          <aside className="relative z-20 bg-[#0d0d0b]/68 p-5 backdrop-blur-xl sm:p-7 lg:p-6">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[.22em] text-white/40">Layer index</p>
            <RoofLabels
              activeLayerId={activeLayerId}
              hoveredLayerId={hoveredLayerId}
              onHoverChange={setHoveredLayerId}
              onLayerChange={setActiveLayerId}
            />

            <div className="mt-5 border-t border-white/10 pt-5 lg:mt-6">
              <p className="text-[10px] leading-5 text-white/43">
                Every component is specified to perform as one integrated weather-defense system.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-8 w-[calc(100%-1.5rem)] max-w-[860px] sm:-mt-11 sm:w-[calc(100%-4rem)]">
        <RoofInfoCard layer={displayedLayer} />
      </div>
    </div>
  );
}
