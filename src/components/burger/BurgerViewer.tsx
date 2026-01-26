import React, { Suspense } from 'react';
import { View, StyleSheet } from 'react-native';
import { Canvas } from '@react-three/fiber/native';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei/native';
import { BurgerLayer } from './BurgerLayer';
import { COLORS } from '../../constants/colors';
import { BurgerLayer as BurgerLayerType } from '../../constants/burgerLayers';

interface BurgerViewerProps {
  layers: BurgerLayerType[];
  models: { [key: string]: string };
  rotation: { x: number; y: number };
  zoom: number;
}

export const BurgerViewer: React.FC<BurgerViewerProps> = ({
  layers,
  models,
  rotation,
  zoom,
}) => {
  return (
    <View style={styles.container}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls 
          enablePan={false}
          minDistance={3}
          maxDistance={10}
        />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <group 
            rotation={[rotation.x, rotation.y, 0]} 
            scale={zoom}
          >
            {layers.map((layer) => {
              const modelUrl = models[layer.id];
              if (!modelUrl) return null;
              
              return (
                <BurgerLayer
                  key={layer.id}
                  modelUrl={modelUrl}
                  position={layer.position}
                />
              );
            })}
          </group>
        </Suspense>
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});