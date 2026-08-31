"use client";

import type { RoofQuality } from "./roofMaterials";

type RoofLightingProps = {
  quality?: RoofQuality;
};

export default function RoofLighting({ quality = "desktop" }: RoofLightingProps) {
  const shadowMapSize = quality === "mobile" ? 512 : 1024;

  return (
    <>
      <ambientLight color="#d9dfdf" intensity={0.46} />
      <hemisphereLight args={["#d7e1df", "#171510", 0.95]} />
      <directionalLight
        castShadow
        color="#fff2d7"
        intensity={2.4}
        position={[5.8, 8.5, 5.2]}
        shadow-bias={-0.0002}
        shadow-camera-bottom={-5.5}
        shadow-camera-far={24}
        shadow-camera-left={-5.5}
        shadow-camera-near={0.5}
        shadow-camera-right={5.5}
        shadow-camera-top={5.5}
        shadow-mapSize-height={shadowMapSize}
        shadow-mapSize-width={shadowMapSize}
        shadow-normalBias={0.025}
      />
      <directionalLight color="#8ca8b1" intensity={0.72} position={[-4, 3.5, -5]} />
      <pointLight color="#d8bd79" decay={2} distance={9} intensity={quality === "mobile" ? 4 : 6} position={[-4.5, 1.8, 3]} />
    </>
  );
}
