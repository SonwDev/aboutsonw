import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TorusKnotProps {
  position: [number, number, number];
  scrollFactor: number;
}

export default function TorusKnot({ position, scrollFactor }: TorusKnotProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Simple rotation based on time
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <mesh position={position} ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial 
        color="#4361ee"
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}