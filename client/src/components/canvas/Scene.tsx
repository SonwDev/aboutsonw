import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import Box from './Box';

interface SceneProps {
  scrollPosition: number;
}

export default function Scene({ scrollPosition }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = scrollPosition * 0.1;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} color="#ffffff" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <Box position={[0, 0, 0]} />
      <Box position={[-2, 1, -2]} />
      <Box position={[2, -1, -4]} />
    </group>
  );
}