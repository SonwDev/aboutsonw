import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import TorusKnot from './TorusKnot';

interface SceneProps {
  scrollPosition: number;
}

export default function Scene({ scrollPosition }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const scrollFactor = scrollPosition * 0.002;

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = scrollPosition * 0.001;
  });

  return (
    <group ref={groupRef}>
      {/* Simple ambient and directional light setup */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Single TorusKnot for testing */}
      <TorusKnot position={[0, 0, 0]} scrollFactor={scrollFactor} />
    </group>
  );
}