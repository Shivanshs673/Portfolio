"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, Sparkles, Stars } from "@react-three/drei";

function OrbitalMesh() {
  return (
    <Float speed={1.5} rotationIntensity={0.9} floatIntensity={1.2}>
      <mesh rotation={[0.7, 0.9, 0.4]}>
        <torusKnotGeometry args={[1.05, 0.35, 180, 18]} />
        <meshStandardMaterial color="#67e8f9" emissive="#0f172a" roughness={0.18} metalness={0.95} />
      </mesh>
    </Float>
  );
}

function MiniSpheres() {
  return (
    <>
      <Float speed={2.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-2.2, 1.8, -0.6]}>
          <sphereGeometry args={[0.25, 24, 24]} />
          <meshStandardMaterial color="#a78bfa" emissive="#312e81" roughness={0.22} metalness={0.82} />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={1.3} floatIntensity={1.6}>
        <mesh position={[2.1, -1.2, -0.8]}>
          <icosahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#38bdf8" emissive="#0c4a6e" roughness={0.15} metalness={0.9} />
        </mesh>
      </Float>
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6.2], fov: 45 }}>
      <color attach="background" args={["#020617"]} />
      <fog attach="fog" args={["#020617", 7, 12]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 4, 3]} intensity={2.5} color="#67e8f9" />
      <directionalLight position={[-2, -3, -2]} intensity={0.9} color="#a78bfa" />
      <OrbitalMesh />
      <MiniSpheres />
      <Sparkles count={80} scale={8} size={3} speed={0.3} color="#67e8f9" />
      <Stars radius={30} depth={14} count={3000} factor={4} saturation={0.1} fade speed={1} />
      <Environment preset="city" />
    </Canvas>
  );
}
