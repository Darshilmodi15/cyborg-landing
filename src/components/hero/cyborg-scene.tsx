"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function CircuitPlate({
  position,
  rotation,
  scale,
  color = "#00f5ff",
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale: [number, number, number];
  color?: string;
}) {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        metalness={0.9}
        roughness={0.18}
      />
    </mesh>
  );
}

function CyborgHead() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.45) * 0.18;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.28) * 0.05;
  });

  return (
    <group ref={groupRef} scale={1.08}>
      <mesh>
        <sphereGeometry args={[1, 72, 72]} />
        <meshPhysicalMaterial
          color="#dffbff"
          emissive="#06233a"
          emissiveIntensity={0.45}
          metalness={0.72}
          roughness={0.16}
          clearcoat={0.8}
          clearcoatRoughness={0.18}
        />
      </mesh>

      <mesh position={[0.36, 0.04, 0.84]}>
        <sphereGeometry args={[0.21, 32, 32]} />
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={2.4}
        />
      </mesh>
      <mesh position={[-0.36, 0.04, 0.84]}>
        <sphereGeometry args={[0.19, 32, 32]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={2.1}
        />
      </mesh>

      <CircuitPlate
        position={[0.82, 0.18, 0.18]}
        rotation={[0.12, 0.45, -0.1]}
        scale={[0.06, 0.52, 0.32]}
      />
      <CircuitPlate
        position={[0.7, -0.34, 0.36]}
        rotation={[0.22, 0.42, 0.16]}
        scale={[0.05, 0.46, 0.24]}
        color="#8a2be2"
      />
      <CircuitPlate
        position={[-0.78, 0.35, 0.08]}
        rotation={[0.18, -0.55, 0.12]}
        scale={[0.05, 0.42, 0.22]}
      />
      <CircuitPlate
        position={[0, -0.92, 0.12]}
        rotation={[0, 0, 0]}
        scale={[0.46, 0.06, 0.16]}
        color="#00ff88"
      />

      <mesh position={[0, -1.18, 0]}>
        <cylinderGeometry args={[0.36, 0.58, 0.52, 36]} />
        <meshStandardMaterial
          color="#8093a7"
          metalness={0.86}
          roughness={0.2}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.28, 0.01, 12, 128]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.78} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.35, 0.24]}>
        <torusGeometry args={[1.48, 0.008, 12, 128]} />
        <meshBasicMaterial color="#8a2be2" transparent opacity={0.58} />
      </mesh>
      <mesh rotation={[Math.PI / 2.8, -0.32, -0.16]}>
        <torusGeometry args={[1.68, 0.008, 12, 128]} />
        <meshBasicMaterial color="#00ff88" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export function CyborgScene() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.08, 5], fov: 36 }}
        dpr={[1, 1.7]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.72} />
        <directionalLight
          position={[3, 4, 5]}
          intensity={2.2}
          color="#dffbff"
        />
        <pointLight position={[-3, 2, 2]} intensity={2} color="#8a2be2" />
        <pointLight position={[2, -1, 3]} intensity={1.8} color="#00ff88" />
        <Float speed={1.25} rotationIntensity={0.18} floatIntensity={0.5}>
          <CyborgHead />
        </Float>
        <Sparkles
          count={68}
          scale={[5.4, 3.8, 2.2]}
          size={1.8}
          speed={0.35}
          color="#00f5ff"
        />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
