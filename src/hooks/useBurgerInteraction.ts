import { useState } from 'react';
import { useSharedValue, withSpring } from 'react-native-reanimated';

export const useBurgerInteraction = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  
  const rotationX = useSharedValue(0);
  const rotationY = useSharedValue(0);
  const scale = useSharedValue(1);

  const rotate = (deltaX: number, deltaY: number) => {
    setRotation(prev => ({
      x: prev.x + deltaY * 0.01,
      y: prev.y + deltaX * 0.01
    }));
    
    rotationX.value = withSpring(rotation.x);
    rotationY.value = withSpring(rotation.y);
  };

  const handleZoom = (delta: number) => {
    const newZoom = Math.max(0.5, Math.min(2, zoom + delta));
    setZoom(newZoom);
    scale.value = withSpring(newZoom);
  };

  const reset = () => {
    setRotation({ x: 0, y: 0 });
    setZoom(1);
    rotationX.value = withSpring(0);
    rotationY.value = withSpring(0);
    scale.value = withSpring(1);
  };

  return {
    rotation,
    zoom,
    rotationX,
    rotationY,
    scale,
    rotate,
    handleZoom,
    reset
  };
};