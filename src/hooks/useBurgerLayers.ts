import { useState } from 'react';
import { BURGER_LAYERS, BurgerLayer } from '../constants/burgerLayers';

export const useBurgerLayers = () => {
  const [activeLayers, setActiveLayers] = useState<string[]>(
    BURGER_LAYERS.map(layer => layer.id)
  );

  const toggleLayer = (layerId: string) => {
    setActiveLayers(prev => 
      prev.includes(layerId)
        ? prev.filter(id => id !== layerId)
        : [...prev, layerId]
    );
  };

  const isLayerActive = (layerId: string): boolean => {
    return activeLayers.includes(layerId);
  };

  const resetLayers = () => {
    setActiveLayers(BURGER_LAYERS.map(layer => layer.id));
  };

  const getVisibleLayers = (): BurgerLayer[] => {
    return BURGER_LAYERS.filter(layer => 
      activeLayers.includes(layer.id)
    ).sort((a, b) => a.order - b.order);
  };

  return {
    activeLayers,
    toggleLayer,
    isLayerActive,
    resetLayers,
    getVisibleLayers
  };
};