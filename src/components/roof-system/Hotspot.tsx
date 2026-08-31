"use client";

import type { ThreeEvent } from "@react-three/fiber";
import type { RoofQuality } from "./roofMaterials";

type HotspotProps = {
  position: readonly [number, number, number];
  selected: boolean;
  quality?: RoofQuality;
  onSelect: () => void;
  onEnter: () => void;
  onLeave: () => void;
};

export default function Hotspot({
  position,
  selected,
  quality = "desktop",
  onSelect,
  onEnter,
  onLeave,
}: HotspotProps) {
  const visualRadius = quality === "mobile" ? 0.19 : 0.17;
  const hitRadius = quality === "mobile" ? 0.52 : 0.34;

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelect();
  };

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    onEnter();
  };

  const handlePointerOut = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    onLeave();
  };

  return (
    <group
      onClick={handleClick}
      onPointerOut={handlePointerOut}
      onPointerOver={handlePointerOver}
      position={position}
      renderOrder={30}
      scale={selected ? 1.12 : 1}
      userData={{ roofHotspot: true }}
    >
      <mesh position={[0, 0, -0.012]} renderOrder={30}>
        <circleGeometry args={[hitRadius, 24]} />
        <meshBasicMaterial color="#d8bd79" depthTest={false} depthWrite={false} opacity={0.002} transparent />
      </mesh>

      {selected && (
        <mesh position={[0, 0, -0.006]} renderOrder={31}>
          <circleGeometry args={[visualRadius * 0.8, 28]} />
          <meshBasicMaterial color="#d8bd79" depthTest={false} depthWrite={false} opacity={0.2} transparent />
        </mesh>
      )}

      <mesh renderOrder={32}>
        <ringGeometry args={[visualRadius * 0.76, visualRadius, 32]} />
        <meshBasicMaterial color="#d8bd79" depthTest={false} depthWrite={false} opacity={1} toneMapped={false} transparent />
      </mesh>
      <mesh position={[0, 0, 0.012]} renderOrder={33}>
        <boxGeometry args={[visualRadius * 0.82, visualRadius * 0.13, 0.018]} />
        <meshBasicMaterial color={selected ? "#fff4cf" : "#d8bd79"} depthTest={false} depthWrite={false} opacity={1} toneMapped={false} transparent />
      </mesh>
      <mesh position={[0, 0, 0.013]} renderOrder={33}>
        <boxGeometry args={[visualRadius * 0.13, visualRadius * 0.82, 0.018]} />
        <meshBasicMaterial color={selected ? "#fff4cf" : "#d8bd79"} depthTest={false} depthWrite={false} opacity={1} toneMapped={false} transparent />
      </mesh>
    </group>
  );
}
