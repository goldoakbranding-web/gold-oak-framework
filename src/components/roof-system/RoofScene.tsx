"use client";

import { Canvas, events as createPointerEvents, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BasicShadowMap, PCFShadowMap } from "three";
import type { Group } from "three";
import { roofLayers } from "@/config/roofLayers";
import RoofLayer from "./RoofLayer";
import RoofLighting from "./RoofLighting";

export type RoofSceneQuality = "mobile" | "desktop";

const prioritizeRoofHotspots: NonNullable<ReturnType<typeof createPointerEvents>["filter"]> = (items) =>
  [...items].sort((first, second) => {
    const isHotspot = (object: (typeof first)["object"]) => {
      let current: typeof object | null = object;
      while (current) {
        if (current.userData.roofHotspot) return true;
        current = current.parent;
      }
      return false;
    };

    return Number(isHotspot(second.object)) - Number(isHotspot(first.object));
  });

function roofPointerEvents(store: Parameters<typeof createPointerEvents>[0]) {
  return { ...createPointerEvents(store), filter: prioritizeRoofHotspots };
}

type RoofSceneProps = {
  activeLayerId: string;
  dimInactiveLayers: boolean;
  hoveredLayerId: string | null;
  isActive: boolean;
  isReady: boolean;
  quality: RoofSceneQuality;
  reducedMotion: boolean;
  separation: number;
  onLayerChange: (id: string) => void;
  onHoverChange: (id: string | null) => void;
  onReady: () => void;
  onWebGLError: (reason: "context-lost" | "runtime") => void;
};

function DemandFrameDriver({
  active,
  reducedMotion,
  signal,
}: {
  active: boolean;
  reducedMotion: boolean;
  signal: string;
}) {
  const invalidate = useThree((state) => state.invalidate);
  const renderUntilRef = useRef(0);

  useEffect(() => {
    if (!active) return;
    renderUntilRef.current = performance.now() + (reducedMotion ? 32 : 850);
    invalidate();
  }, [active, invalidate, reducedMotion, signal]);

  useFrame(() => {
    if (active && performance.now() < renderUntilRef.current) invalidate();
  });

  return null;
}

function WebGLContextMonitor({ onWebGLError }: Pick<RoofSceneProps, "onWebGLError">) {
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    const canvas = gl.domElement;
    let hasReportedLoss = false;

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      if (hasReportedLoss) return;
      hasReportedLoss = true;
      onWebGLError("context-lost");
    };

    canvas.addEventListener("webglcontextlost", handleContextLost, false);
    return () => canvas.removeEventListener("webglcontextlost", handleContextLost, false);
  }, [gl, onWebGLError]);

  return null;
}

function RoofAssembly({
  activeLayerId,
  dimInactiveLayers,
  hoveredLayerId,
  isReady,
  quality,
  reducedMotion,
  separation,
  onLayerChange,
  onHoverChange,
}: RoofSceneProps) {
  const assemblyRef = useRef<Group>(null);
  const focusedLayerId = hoveredLayerId ?? activeLayerId;

  return (
    <group ref={assemblyRef} position={[0, -0.25, 0]} rotation={[0.1, -0.56, 0]}>
      {roofLayers.map((layer, index) => (
        <RoofLayer
          dimmed={dimInactiveLayers && Boolean(focusedLayerId && focusedLayerId !== layer.id)}
          index={index}
          isReady={isReady}
          key={layer.id}
          layer={layer}
          onEnter={() => onHoverChange(layer.id)}
          onLeave={() => onHoverChange(null)}
          onSelect={() => onLayerChange(layer.id)}
          quality={quality}
          reducedMotion={reducedMotion}
          selected={focusedLayerId === layer.id}
          separation={separation}
        />
      ))}
    </group>
  );
}

export default function RoofScene(props: RoofSceneProps) {
  const renderSignal = [
    props.activeLayerId,
    props.hoveredLayerId ?? "none",
    props.isReady ? "ready" : "entering",
    props.quality,
    props.reducedMotion ? "reduced" : "motion",
    props.separation.toFixed(3),
  ].join(":");

  return (
    <div
      aria-label="Interactive three-dimensional exploded roof system. Select a physical layer or use the layer controls to inspect it."
      className="absolute inset-0"
      role="group"
    >
      <Canvas
        camera={{
          fov: props.quality === "mobile" ? 40 : 34,
          position: props.quality === "mobile" ? [9.2, 6.7, 11.8] : [8.8, 6.4, 10.5],
        }}
        dpr={props.quality === "mobile" ? 1 : [1, 1.5]}
        events={roofPointerEvents}
        fallback={<span>Interactive roof visualization requires canvas support.</span>}
        frameloop={props.isActive ? "demand" : "never"}
        gl={{
          alpha: true,
          antialias: props.quality === "desktop",
          powerPreference: props.quality === "desktop" ? "high-performance" : "low-power",
        }}
        onCreated={({ gl }) => {
          gl.shadowMap.type = props.quality === "desktop" ? PCFShadowMap : BasicShadowMap;
          props.onReady();
        }}
        performance={{ min: 0.5 }}
        resize={{ debounce: { resize: 100, scroll: 0 }, scroll: false }}
        shadows={props.quality === "desktop" ? "percentage" : "basic"}
      >
        <WebGLContextMonitor onWebGLError={props.onWebGLError} />
        <DemandFrameDriver active={props.isActive} reducedMotion={props.reducedMotion} signal={renderSignal} />
        <RoofLighting quality={props.quality} />
        <RoofAssembly {...props} />
        <mesh receiveShadow position={[0, -1.72, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[13, 13]} />
          <shadowMaterial opacity={props.quality === "desktop" ? 0.46 : 0.26} />
        </mesh>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,transparent_0,transparent_36%,rgba(8,8,7,.12)_69%,rgba(8,8,7,.72)_100%)]" />
    </div>
  );
}
