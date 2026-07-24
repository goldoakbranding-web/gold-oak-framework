"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { PCFSoftShadowMap } from "three";
import type { Group } from "three";
import { roofLayers } from "@/config/roofLayers";
import RoofLayer from "./RoofLayer";
import RoofLighting from "./RoofLighting";

type RoofSceneProps = {
  activeLayerId: string;
  hoveredLayerId: string | null;
  isReady: boolean;
  separation: number;
  onLayerChange: (id: string) => void;
  onHoverChange: (id: string | null) => void;
};

function RoofAssembly({
  activeLayerId,
  hoveredLayerId,
  isReady,
  separation,
  onLayerChange,
  onHoverChange,
}: RoofSceneProps) {
  const assemblyRef = useRef<Group>(null);
  const focusedLayerId = hoveredLayerId ?? activeLayerId;

  useFrame(({ clock }) => {
    if (!assemblyRef.current) return;
    assemblyRef.current.rotation.y = -0.55 + Math.sin(clock.getElapsedTime() * 0.28) * 0.025;
    assemblyRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.45) * 0.035;
  });

  return (
    <group ref={assemblyRef} rotation={[0.12, -0.55, 0]}>
      {roofLayers.map((layer, index) => (
        <RoofLayer
          dimmed={Boolean(hoveredLayerId && hoveredLayerId !== layer.id)}
          index={index}
          isReady={isReady}
          key={layer.id}
          layer={layer}
          onEnter={() => onHoverChange(layer.id)}
          onLeave={() => onHoverChange(null)}
          onSelect={() => onLayerChange(layer.id)}
          selected={focusedLayerId === layer.id}
          separation={separation}
        />
      ))}
    </group>
  );
}

export default function RoofScene(props: RoofSceneProps) {
  return (
    <div aria-label="Interactive three-dimensional exploded roof system. Hover or select a layer to inspect it." className="absolute inset-0" role="group">
      <Canvas
        camera={{ fov: 33, position: [8.8, 6.4, 10.5] }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.shadowMap.type = PCFSoftShadowMap;
        }}
        shadows
      >
        <RoofLighting />
        <RoofAssembly {...props} />
        <mesh receiveShadow position={[0, -1.62, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[13, 13]} />
          <shadowMaterial opacity={0.5} />
        </mesh>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,transparent_0,transparent_35%,rgba(8,8,7,.12)_68%,rgba(8,8,7,.72)_100%)]" />
    </div>
  );
}
