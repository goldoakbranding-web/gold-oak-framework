"use client";

export default function RoofLighting() {
  return (
    <>
      <ambientLight color="#d9dfdf" intensity={0.62} />
      <hemisphereLight args={["#d7e1df", "#11100e", 1.15]} />
      <directionalLight
        castShadow
        color="#fff2d7"
        intensity={2.7}
        position={[5.5, 8, 4.5]}
        shadow-bias={-0.0002}
        shadow-camera-bottom={-6}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={4}
      />
      <pointLight color="#d8bd79" intensity={10} position={[-5, 1.5, 2]} distance={9} decay={2} />
      <pointLight color="#89a9b5" intensity={5} position={[3, 3.5, -5]} distance={8} decay={2} />
    </>
  );
}
