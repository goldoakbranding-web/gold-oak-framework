"use client";

import { useFrame, useThree } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Color, Group, InstancedMesh, MathUtils, Object3D } from "three";
import type { Texture } from "three";
import type { RoofLayer as RoofLayerData, RoofLayerMaterial } from "@/config/roofLayers";
import Hotspot from "./Hotspot";
import { createRoofTexture } from "./roofMaterials";
import type { RoofQuality } from "./roofMaterials";

type RoofLayerProps = {
  layer: RoofLayerData;
  index: number;
  separation: number;
  selected: boolean;
  dimmed: boolean;
  isReady: boolean;
  reducedMotion?: boolean;
  quality?: RoofQuality;
  onSelect: () => void;
  onEnter: () => void;
  onLeave: () => void;
};

type VisualProps = {
  color: string;
  accent: string;
  opacity: number;
  selected: boolean;
  quality: RoofQuality;
};

type DepthInstancesProps = VisualProps & {
  count: number;
  size: readonly [number, number, number];
  position?: readonly [number, number];
  rotationZ?: number;
  texture?: Texture;
  castShadow?: boolean;
  metalness?: number;
  roughness?: number;
};

const sides = [-1, 1] as const;
const roofRise = 1.38;
const halfSpan = 3.24;
const slopeLength = Math.hypot(roofRise, halfSpan);
const slopeAngle = Math.atan2(roofRise, halfSpan);
const roofDepth = 5.8;

const assembledPositions = [0.14, 0.075, 0, -0.025, -0.035, -0.045] as const;
const explodedPositions = [2.62, 1.76, 0.92, 0.08, -0.7, -1.42] as const;
const hotspotPositions: Record<RoofLayerMaterial, readonly [number, number, number]> = {
  shingles: [1.18, 1.1, 1.55],
  underlayment: [1.42, 0.93, 0.82],
  deck: [0.92, 0.98, 0.08],
  framing: [0.12, 0.83, -0.62],
  insulation: [-0.78, 0.75, -1.28],
  interior: [-1.35, 0.57, -1.9],
};
const shinglePalette = [new Color("#292925"), new Color("#3d3c37"), new Color("#514f47"), new Color("#34332f")];

function clamp01(value: number) {
  return Math.min(Math.max(value, 0), 1);
}

function smoothStep(value: number) {
  const clamped = clamp01(value);
  return clamped * clamped * (3 - 2 * clamped);
}

function layerExplosionProgress(progress: number, index: number) {
  const start = 0.02 + index * 0.156;
  const end = start + 0.2;
  return smoothStep((progress - start) / (end - start));
}

function useRoofTexture(recipe: Parameters<typeof createRoofTexture>[0], quality: RoofQuality) {
  const texture = useMemo(() => createRoofTexture(recipe, quality), [quality, recipe]);

  useEffect(() => () => texture.dispose(), [texture]);

  return texture;
}

function materialHighlight(selected: boolean, accent: string) {
  return selected ? accent : "#000000";
}

function slopePosition(side: -1 | 1): readonly [number, number, number] {
  return [side * halfSpan * 0.52, roofRise * 0.52, 0];
}

function slopeRotation(side: -1 | 1): readonly [number, number, number] {
  return [0, 0, side === -1 ? slopeAngle : -slopeAngle];
}

function DepthInstances({
  count,
  size,
  position = [0, 0],
  rotationZ = 0,
  texture,
  color,
  accent,
  opacity,
  selected,
  castShadow = true,
  metalness = 0.02,
  roughness = 0.82,
}: DepthInstancesProps) {
  const instanceRef = useRef<InstancedMesh>(null);
  const transform = useMemo(() => new Object3D(), []);
  const positionX = position[0];
  const positionY = position[1];

  useLayoutEffect(() => {
    const mesh = instanceRef.current;
    if (!mesh) return;

    for (let index = 0; index < count; index += 1) {
      const z = count === 1 ? 0 : -roofDepth / 2 + (roofDepth * index) / (count - 1);
      transform.position.set(positionX, positionY, z);
      transform.rotation.set(0, 0, rotationZ);
      transform.scale.set(1, 1, 1);
      transform.updateMatrix();
      mesh.setMatrixAt(index, transform.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }, [count, positionX, positionY, rotationZ, transform]);

  return (
    <instancedMesh args={[undefined, undefined, count]} castShadow={castShadow} receiveShadow ref={instanceRef}>
      <boxGeometry args={[size[0], size[1], size[2]]} />
      <meshStandardMaterial
        color={color}
        depthWrite={opacity > 0.6}
        emissive={materialHighlight(selected, accent)}
        emissiveIntensity={selected ? 0.1 : 0}
        map={texture}
        metalness={metalness}
        opacity={opacity}
        roughness={roughness}
        transparent
      />
    </instancedMesh>
  );
}

function SlopedPanels({
  texture,
  color,
  accent,
  opacity,
  selected,
  quality,
  thickness,
  surfaceOffset = 0,
  roughness = 0.82,
}: VisualProps & { texture: Texture; thickness: number; surfaceOffset?: number; roughness?: number }) {
  return (
    <>
      {sides.map((side) => (
        <group key={side} position={slopePosition(side)} rotation={slopeRotation(side)}>
          <mesh castShadow={quality === "desktop"} position={[0, surfaceOffset, 0]} receiveShadow>
            <boxGeometry args={[slopeLength * 1.045, thickness, roofDepth]} />
            <meshStandardMaterial
              color={color}
              depthWrite={opacity > 0.6}
              emissive={materialHighlight(selected, accent)}
              emissiveIntensity={selected ? 0.1 : 0}
              map={texture}
              metalness={0.01}
              opacity={opacity}
              roughness={roughness}
              transparent
            />
          </mesh>
        </group>
      ))}
    </>
  );
}

function ShingleField({ texture, ...visual }: VisualProps & { texture: Texture }) {
  const rows = visual.quality === "mobile" ? 7 : 10;
  const columns = visual.quality === "mobile" ? 10 : 15;
  const count = rows * columns;
  const instanceRef = useRef<InstancedMesh>(null);
  const transform = useMemo(() => new Object3D(), []);
  const tileWidth = (slopeLength / rows) * 1.08;
  const tileDepth = (roofDepth / columns) * 0.94;

  useLayoutEffect(() => {
    const mesh = instanceRef.current;
    if (!mesh) return;

    let instanceIndex = 0;
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const x = -slopeLength / 2 + (row + 0.5) * (slopeLength / rows);
        const stagger = row % 2 === 0 ? 0 : tileDepth * 0.48;
        let z = -roofDepth / 2 + (column + 0.5) * (roofDepth / columns) + stagger;
        if (z > roofDepth / 2) z -= roofDepth;

        transform.position.set(x, 0.07 + row * 0.012, z);
        transform.rotation.set(0, 0, 0);
        transform.scale.set(1, 1, 1);
        transform.updateMatrix();
        mesh.setMatrixAt(instanceIndex, transform.matrix);
        mesh.setColorAt(instanceIndex, shinglePalette[(row * 3 + column) % shinglePalette.length]);
        instanceIndex += 1;
      }
    }

    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [columns, rows, tileDepth, transform]);

  return (
    <instancedMesh args={[undefined, undefined, count]} castShadow={visual.quality === "desktop"} receiveShadow ref={instanceRef}>
      <boxGeometry args={[tileWidth, 0.07, tileDepth]} />
      <meshStandardMaterial
        color={visual.color}
        depthWrite={visual.opacity > 0.6}
        emissive={materialHighlight(visual.selected, visual.accent)}
        emissiveIntensity={visual.selected ? 0.045 : 0}
        map={texture}
        metalness={0.03}
        opacity={visual.opacity}
        roughness={0.9}
        transparent
        vertexColors
      />
    </instancedMesh>
  );
}

function RidgeCaps({ texture, ...visual }: VisualProps & { texture: Texture }) {
  const count = visual.quality === "mobile" ? 9 : 13;
  const instanceRef = useRef<InstancedMesh>(null);
  const transform = useMemo(() => new Object3D(), []);
  const capDepth = (roofDepth / count) * 1.18;

  useLayoutEffect(() => {
    const mesh = instanceRef.current;
    if (!mesh) return;

    for (let index = 0; index < count; index += 1) {
      transform.position.set(0, roofRise + 0.13, -roofDepth / 2 + (index + 0.5) * (roofDepth / count));
      transform.rotation.set(0, 0, 0);
      transform.scale.set(1, 1, 1);
      transform.updateMatrix();
      mesh.setMatrixAt(index, transform.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }, [count, transform]);

  return (
    <instancedMesh args={[undefined, undefined, count]} castShadow={visual.quality === "desktop"} ref={instanceRef}>
      <boxGeometry args={[0.54, 0.1, capDepth]} />
      <meshStandardMaterial
        color={visual.color}
        depthWrite={visual.opacity > 0.6}
        emissive={materialHighlight(visual.selected, visual.accent)}
        emissiveIntensity={visual.selected ? 0.045 : 0}
        map={texture}
        opacity={visual.opacity}
        roughness={0.88}
        transparent
      />
    </instancedMesh>
  );
}

function ShinglesVisual(visual: VisualProps) {
  const shingles = useRoofTexture("shingles", visual.quality);
  const metal = useRoofTexture("metal", visual.quality);

  return (
    <>
      {sides.map((side) => {
        const eaveX = side * slopeLength * 0.47;

        return (
          <group key={side} position={slopePosition(side)} rotation={slopeRotation(side)}>
            <mesh position={[0, 0.025, 0]} receiveShadow>
              <boxGeometry args={[slopeLength * 1.05, 0.06, roofDepth]} />
              <meshStandardMaterial color="#20201d" opacity={visual.opacity} roughness={0.92} transparent />
            </mesh>
            <ShingleField texture={shingles} {...visual} />
            <mesh castShadow={visual.quality === "desktop"} position={[eaveX, 0.082, 0]}>
              <boxGeometry args={[0.42, 0.075, roofDepth * 1.01]} />
              <meshStandardMaterial
                color="#252522"
                emissive={materialHighlight(visual.selected, visual.accent)}
                emissiveIntensity={visual.selected ? 0.08 : 0}
                map={shingles}
                opacity={visual.opacity}
                roughness={0.9}
                transparent
              />
            </mesh>
          </group>
        );
      })}

      <RidgeCaps texture={shingles} {...visual} />

      {sides.map((side) => (
        <group key={`edge-${side}`} position={[side * halfSpan * 1.015, -0.03, 0]} rotation={[0, 0, side * -slopeAngle]}>
          <mesh castShadow={visual.quality === "desktop"}>
            <boxGeometry args={[0.14, 0.08, roofDepth * 1.035]} />
            <meshStandardMaterial map={metal} metalness={0.72} opacity={visual.opacity} roughness={0.3} transparent />
          </mesh>
          <mesh position={[side * 0.035, -0.105, 0]} rotation={[0, 0, side * -0.28]}>
            <boxGeometry args={[0.1, 0.2, roofDepth * 1.035]} />
            <meshStandardMaterial map={metal} metalness={0.72} opacity={visual.opacity} roughness={0.3} transparent />
          </mesh>
        </group>
      ))}
    </>
  );
}

function UnderlaymentVisual(visual: VisualProps) {
  const membrane = useRoofTexture("underlayment", visual.quality);
  const iceWater = useRoofTexture("ice-water", visual.quality);

  return (
    <>
      <SlopedPanels {...visual} color="#39434a" roughness={0.74} texture={membrane} thickness={0.075} />
      {sides.map((side) => (
        <group key={side} position={slopePosition(side)} rotation={slopeRotation(side)}>
          <mesh position={[side * slopeLength * 0.35, 0.062, 0]} receiveShadow>
            <boxGeometry args={[slopeLength * 0.31, 0.035, roofDepth * 1.006]} />
            <meshStandardMaterial
              color="#2a3941"
              emissive={materialHighlight(visual.selected, visual.accent)}
              emissiveIntensity={visual.selected ? 0.08 : 0}
              map={iceWater}
              opacity={visual.opacity}
              roughness={0.72}
              transparent
            />
          </mesh>
        </group>
      ))}
    </>
  );
}

function DeckVisual(visual: VisualProps) {
  const osb = useRoofTexture("deck", visual.quality);
  return <SlopedPanels {...visual} texture={osb} thickness={0.17} />;
}

function FramingVisual(visual: VisualProps) {
  const lumber = useRoofTexture("framing", visual.quality);
  const rafterCount = visual.quality === "mobile" ? 7 : 11;
  const trussCount = visual.quality === "mobile" ? 5 : 8;
  const castShadow = visual.quality === "desktop";

  return (
    <>
      {sides.map((side) => (
        <group key={side} position={slopePosition(side)} rotation={slopeRotation(side)}>
          <DepthInstances
            {...visual}
            castShadow={castShadow}
            count={rafterCount}
            position={[0, -0.1]}
            size={[slopeLength * 1.04, 0.15, 0.13]}
            texture={lumber}
          />
          <mesh position={[0, -0.015, 0]}>
            <boxGeometry args={[slopeLength * 0.86, 0.026, roofDepth * 0.94]} />
            <meshStandardMaterial
              color="#79a7b4"
              depthWrite={false}
              emissive="#416a76"
              emissiveIntensity={0.18}
              opacity={visual.opacity * 0.13}
              transparent
            />
          </mesh>
        </group>
      ))}

      <DepthInstances
        {...visual}
        castShadow={castShadow}
        count={trussCount}
        position={[0, -0.25]}
        size={[halfSpan * 1.92, 0.14, 0.13]}
        texture={lumber}
      />
      <DepthInstances
        {...visual}
        castShadow={castShadow}
        count={trussCount}
        position={[0, 0.43]}
        size={[0.13, roofRise * 1.02, 0.13]}
        texture={lumber}
      />
      {visual.quality === "desktop" && (
        <>
          <DepthInstances
            {...visual}
            castShadow
            count={trussCount}
            position={[-0.76, 0.34]}
            rotationZ={-0.47}
            size={[2.05, 0.12, 0.11]}
            texture={lumber}
          />
          <DepthInstances
            {...visual}
            castShadow
            count={trussCount}
            position={[0.76, 0.34]}
            rotationZ={0.47}
            size={[2.05, 0.12, 0.11]}
            texture={lumber}
          />
        </>
      )}

      <mesh castShadow={castShadow} position={[0, roofRise + 0.04, 0]}>
        <boxGeometry args={[0.34, 0.16, roofDepth * 1.02]} />
        <meshStandardMaterial
          color="#262a29"
          emissive={materialHighlight(visual.selected, visual.accent)}
          emissiveIntensity={visual.selected ? 0.1 : 0}
          metalness={0.18}
          opacity={visual.opacity}
          roughness={0.55}
          transparent
        />
      </mesh>
    </>
  );
}

function InsulationVisual(visual: VisualProps) {
  const insulation = useRoofTexture("insulation", visual.quality);
  const battCount = visual.quality === "mobile" ? 6 : 10;
  const spacing = roofDepth / Math.max(battCount - 1, 1);

  return (
    <>
      {sides.map((side) => (
        <group key={side} position={slopePosition(side)} rotation={slopeRotation(side)}>
          <DepthInstances
            {...visual}
            castShadow={visual.quality === "desktop"}
            count={battCount}
            position={[0, -0.22]}
            roughness={0.96}
            size={[slopeLength * 0.88, 0.24, spacing * 0.7]}
            texture={insulation}
          />
        </group>
      ))}
    </>
  );
}

function InteriorVisual(visual: VisualProps) {
  const drywall = useRoofTexture("interior", visual.quality);
  return <SlopedPanels {...visual} roughness={0.94} surfaceOffset={-0.28} texture={drywall} thickness={0.105} />;
}

function LayerVisual({ material, ...visual }: VisualProps & { material: RoofLayerMaterial }) {
  if (material === "shingles") return <ShinglesVisual {...visual} />;
  if (material === "underlayment") return <UnderlaymentVisual {...visual} />;
  if (material === "deck") return <DeckVisual {...visual} />;
  if (material === "framing") return <FramingVisual {...visual} />;
  if (material === "insulation") return <InsulationVisual {...visual} />;
  return <InteriorVisual {...visual} />;
}

export default function RoofLayer({
  layer,
  index,
  separation,
  selected,
  dimmed,
  isReady,
  reducedMotion = false,
  quality = "desktop",
  onSelect,
  onEnter,
  onLeave,
}: RoofLayerProps) {
  const groupRef = useRef<Group>(null);
  const initializedRef = useRef(false);
  const invalidate = useThree((state) => state.invalidate);
  const assembledY = assembledPositions[index] ?? assembledPositions[assembledPositions.length - 1];
  const explodedY = explodedPositions[index] ?? explodedPositions[explodedPositions.length - 1];
  const progress = isReady ? layerExplosionProgress(clamp01(separation), index) : 0;
  const targetY = MathUtils.lerp(assembledY, explodedY, progress);
  const targetScale = selected ? 1.025 : 1;
  const opacity = dimmed ? 0.46 : 1;

  useLayoutEffect(() => {
    if (!groupRef.current || initializedRef.current) return;
    groupRef.current.position.y = assembledY;
    initializedRef.current = true;
  }, [assembledY]);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;

    if (reducedMotion) {
      group.position.y = targetY;
      group.scale.setScalar(targetScale);
      return;
    }

    const safeDelta = Math.min(delta, 0.1);
    const nextY = MathUtils.damp(group.position.y, targetY, 5.4, safeDelta);
    const nextScale = MathUtils.damp(group.scale.x, targetScale, 8, safeDelta);
    group.position.y = nextY;
    group.scale.setScalar(nextScale);

    if (Math.abs(nextY - targetY) > 0.001 || Math.abs(nextScale - targetScale) > 0.0005) invalidate();
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

  return (
    <group
      onClick={pointerClick}
      onPointerOut={pointerOut}
      onPointerOver={pointerOver}
      ref={groupRef}
      userData={{ layerId: layer.id, layerName: layer.name }}
    >
      <LayerVisual
        accent={layer.accent}
        color={layer.color}
        material={layer.material}
        opacity={opacity}
        quality={quality}
        selected={selected}
      />

      {selected || progress > 0.16 ? (
        <group position={hotspotPositions[layer.material]} rotation={[-0.12, 0.44, 0]}>
          <Hotspot
            onEnter={onEnter}
            onLeave={onLeave}
            onSelect={onSelect}
            position={[0, 0, 0]}
            quality={quality}
            selected={selected}
          />
        </group>
      ) : null}
    </group>
  );
}
