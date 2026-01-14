import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber/native';
import * as THREE from 'three';

interface Dice3DProps {
  data: { x: number; y: number; z: number } | null;
}

export const Dice3D = ({ data }: Dice3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current && data) {
      // Rotación basada en los ejes del celular
      // Agregamos una rotación base constante para que se vea vivo
      meshRef.current.rotation.x += data.y * 0.05 + 0.01;
      meshRef.current.rotation.y += data.x * 0.05 + 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  );
};
