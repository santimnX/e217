import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei/native';
import * as THREE from 'three';

interface BurgerLayerProps {
  modelUrl: string;
  position: [number, number, number];
}

export const BurgerLayer: React.FC<BurgerLayerProps> = ({ 
  modelUrl, 
  position 
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const gltf = useGLTF(modelUrl);

  useEffect(() => {
    if (meshRef.current && gltf.scene) {
      meshRef.current.add(gltf.scene.clone());
    }
  }, [gltf]);

  return (
    <group ref={meshRef} position={position}>
      <primitive object={gltf.scene} />
    </group>
  );
};