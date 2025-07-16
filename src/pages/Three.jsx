import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function GlassTube() {
  return (
    <>
      {/* Inner Glass Tube */}
      <mesh>
        <cylinderGeometry args={[1.2, 1.2, 10, 64, 1, true]} />
        <meshPhysicalMaterial
          color="#0a0a2a"
          transmission={1}
          transparent
          opacity={0.2}
          roughness={0}
          metalness={0.8}
          thickness={2}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={1}
          ior={1.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Glowing Outline Tube */}
      <mesh>
        <cylinderGeometry args={[1.23, 1.23, 10.05, 64, 1, true]} />
        <meshBasicMaterial
          color={0x00ffff}
          transparent
          opacity={0.15}
          emissive={0x00ffff}
          emissiveIntensity={1.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}

function GlowDots() {
  return (
    <>
      {[...Array(12)].map((_, i) => (
        <mesh key={i} position={[0, 4.5 - i * 0.85, 0]}>
          <sphereGeometry args={[0.13, 16, 16]} />
          <meshBasicMaterial color={0x00ffff} />
        </mesh>
      ))}
    </>
  );
}

function OrangeOrb() {
  const orbRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (orbRef.current) {
      orbRef.current.position.y = -3.5 + Math.sin(t * 1.5) * 2.5; // move between -6 and -1
    }
  });

  return (
    <mesh ref={orbRef}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial
        color={0xff6600}
        emissive={0xff5500}
        emissiveIntensity={2}
        metalness={0.4}
        roughness={0.2}
      />
    </mesh>
  );
}

function SwirlWrap() {
  return (
    <mesh position={[0, -3.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusKnotGeometry args={[0.9, 0.12, 200, 32]} />
      <meshPhysicalMaterial
        color={0x111111}
        transparent
        opacity={0.35}
        metalness={0.9}
        roughness={0.3}
        clearcoat={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Three() {
  return (
    <div style={{ height: '100vh', background: '#05050f' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, 5]} intensity={1} color="#ff6600" />

        <GlassTube />
        <GlowDots />
        <OrangeOrb />
        <SwirlWrap />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

export default Three;