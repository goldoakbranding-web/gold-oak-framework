"use client";

import { useFrame } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color, Group, MathUtils, MeshStandardMaterial } from "three";
import type { RoofLayer as RoofLayerData } from "@/config/roofLayers";

type RoofLayerProps = {
  layer: RoofLayerData;
  index: number;
  separation: number;
  selected: boolean;
  dimmed: boolean;
  isReady: boolean;
  onSelect: () => void;
  onEnter: () => void;
  onLeave: () => void;
};

const roofRise = 1.38;
const halfSpan = 3.24;
const slopeLength = Math.hypot(roofRise, halfSpan);
const slopeAngle = Math.atan2(roofRise, halfSpan);
const roofDepth = 5.8;

function ShingleCourses({ angle, side, thickness }: { angle: number; side: -1 | 1; thickness: number }) {
  return (
    <group position={[side * halfSpan * 0.52, roofRise * 0.52 + thickness / 2 + 0.011, 0]} rotation={[0, 0, angle]}>
      {[-1.78, -1.08, -0.38, 0.32, 1.02, 1.72].map((course) => (
        <mesh castShadow={false} key={course} position={[course, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.034, 0.018, roofDepth * 0.96]} />
          <meshStandardMaterial color="#11100e" metalness={0.05} roughness={0.82} transparent opacity={0.72} />
        </mesh>
      ))}
    </group>
  );
}

function DeckSeams({ angle, side, thickness }: { angle: number; side: -1 | 1; thickness: number }) {
  return (
    <group position={[side * halfSpan * 0.52, roofRise * 0.52 + thickness / 2 + 0.012, 0]} rotation={[0, 0, angle]}>
      {[-1.3, 0, 1.3].map((seam) => (
        <mesh castShadow={false} key={seam} position={[seam, 0, 0]}>
          <boxGeometry args={[0.025, 0.012, roofDepth * 0.97]} />
          <meshStandardMaterial color="#4e321d" roughness={0.92} transparent opacity={0.58} />
        </mesh>
      ))}
    </group>
  );
}

export default function RoofLayer({
  layer,
  index,
  separation,
  selected,
  dimmed,
  isReady,
  onSelect,
  onEnter,
  onLeave,
}: RoofLayerProps) {
  const groupRef = useRef<Group>(null);
  const hasSetInitialPosition = useRef(false);
  const leftMaterialRef = useRef<MeshStandardMaterial>(null);
  const rightMaterialRef = useRef<MeshStandardMaterial>(null);
  const material = useMemo(() => {
    if (layer.material === "metal") return { metalness: 0.78, roughness: 0.27 };
    if (layer.material === "deck") return { metalness: 0.03, roughness: 0.82 };
    if (layer.material === "vent") return { metalness: 0.64, roughness: 0.38 };
    if (layer.material === "shingle") return { metalness: 0.12, roughness: 0.86 };
    return { metalness: 0.24, roughness: 0.64 };
  }, [layer.material]);

  const thickness = Math.max(layer.thickness / 90, 0.07);
  const isVent = layer.material === "vent";
  const isDripEdge = layer.material === "metal";
  const stackOrder = roofLayersCount - index - 1;
  const compactY = stackOrder * 0.09;
  const expandedY = stackOrder * 0.56;
  const targetY = isVent
    ? 2.08 + separation * 0.92
    : isDripEdge
      ? 0.44 + separation * 0.18
      : compactY + (expandedY - compactY) * separation;
  const initialY = isVent ? 3.45 : isDripEdge ? 0.92 : stackOrder * 0.72 + 0.2;
  const targetScale = selected ? 1.035 : 1;
  const targetOpacity = dimmed ? 0.3 : 1;

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (group) {
      if (!hasSetInitialPosition.current) {
        group.position.y = initialY;
        hasSetInitialPosition.current = true;
      }
      group.position.y = MathUtils.damp(group.position.y, isReady ? targetY : initialY, 4.2, delta);
      const nextScale = MathUtils.damp(group.scale.x, targetScale, 7, delta);
      group.scale.setScalar(nextScale);
    }

    [leftMaterialRef.current, rightMaterialRef.current].forEach((currentMaterial) => {
      if (!currentMaterial) return;
      currentMaterial.opacity = MathUtils.damp(currentMaterial.opacity, targetOpacity, 7, delta);
      currentMaterial.emissive.lerp(new Color(selected ? layer.accent : "#000000"), 1 - Math.exp(-6 * delta));
      currentMaterial.emissiveIntensity = MathUtils.damp(currentMaterial.emissiveIntensity, selected ? 0.22 : 0, 7, delta);
    });
  });

  const pointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    onEnter();
  };

  const pointerOut = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    onLeave();
  };

  const pointerClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelect();
  };

  if (isVent) {
    return (
      <group ref={groupRef} onClick={pointerClick} onPointerOut={pointerOut} onPointerOver={pointerOver}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.44, thickness * 1.5, roofDepth * 1.02]} />
          <meshStandardMaterial
            color={layer.color}
            emissive={selected ? layer.accent : "#000000"}
            emissiveIntensity={selected ? 0.22 : 0}
            metalness={material.metalness}
            roughness={material.roughness}
            transparent
          />
        </mesh>
        {[-2.4, -1.6, -0.8, 0, 0.8, 1.6, 2.4].map((position) => (
          <mesh castShadow key={position} position={[0, thickness * 0.82, position]}>
            <boxGeometry args={[0.29, thickness * 0.22, 0.26]} />
            <meshStandardMaterial color="#090a09" metalness={0.3} roughness={0.45} />
          </mesh>
        ))}
      </group>
    );
  }

  if (isDripEdge) {
    return (
      <group ref={groupRef} onClick={pointerClick} onPointerOut={pointerOut} onPointerOver={pointerOver}>
        {([-1, 1] as const).map((side) => (
          <group key={side} position={[side * halfSpan * 0.98, 0.04, 0]} rotation={[0, 0, side * -slopeAngle]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.19, thickness, roofDepth * 1.04]} />
              <meshStandardMaterial
                color={layer.color}
                emissive={selected ? layer.accent : "#000000"}
                emissiveIntensity={selected ? 0.22 : 0}
                metalness={material.metalness}
                roughness={material.roughness}
                transparent
                opacity={dimmed ? 0.3 : 1}
              />
            </mesh>
            <mesh position={[0, -thickness * 1.2, 0]} rotation={[0, 0, side * -0.3]}>
              <boxGeometry args={[0.28, thickness * 1.55, roofDepth * 1.04]} />
              <meshStandardMaterial color="#262825" metalness={0.66} roughness={0.35} />
            </mesh>
          </group>
        ))}
      </group>
    );
  }

  return (
    <group ref={groupRef} onClick={pointerClick} onPointerOut={pointerOut} onPointerOver={pointerOver}>
      {([-1, 1] as const).map((side) => {
        const isLeft = side === -1;
        const materialRef = isLeft ? leftMaterialRef : rightMaterialRef;
        const rotation = isLeft ? slopeAngle : -slopeAngle;

        return (
          <group key={side} position={[side * halfSpan * 0.52, roofRise * 0.52, 0]} rotation={[0, 0, rotation]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[slopeLength * 1.06, thickness, roofDepth]} />
              <meshStandardMaterial
                color={layer.color}
                emissive="#000000"
                emissiveIntensity={0}
                metalness={material.metalness}
                opacity={1}
                ref={materialRef}
                roughness={material.roughness}
                transparent
              />
            </mesh>
            <mesh castShadow={false} position={[0, thickness / 2 + 0.006, 0]}>
              <boxGeometry args={[slopeLength * 1.055, 0.012, roofDepth * 0.994]} />
              <meshStandardMaterial color="#ffffff" emissive={layer.accent} emissiveIntensity={selected ? 0.08 : 0} transparent opacity={0.09} roughness={0.4} />
            </mesh>
          </group>
        );
      })}

      {layer.material === "shingle" && (
        <>
          <ShingleCourses angle={slopeAngle} side={-1} thickness={thickness} />
          <ShingleCourses angle={-slopeAngle} side={1} thickness={thickness} />
        </>
      )}
      {layer.material === "deck" && (
        <>
          <DeckSeams angle={slopeAngle} side={-1} thickness={thickness} />
          <DeckSeams angle={-slopeAngle} side={1} thickness={thickness} />
        </>
      )}
    </group>
  );
}

const roofLayersCount = 7;
