import { useState, useEffect } from 'react';
import { Asset } from 'expo-asset';
import { BURGER_LAYERS } from '../constants/burgerLayers';

interface ModelCache {
  [key: string]: any;
}

// Mapeo de archivos locales
const LOCAL_MODELS = {
  'pan-arriba.glb': require('../../assets/models/pan-arriba.glb'),
  'queso.glb': require('../../assets/models/queso.glb'),
  'tomate.glb': require('../../assets/models/tomate.glb'),
  'carne.glb': require('../../assets/models/carne.glb'),
  'pan-abajo.glb': require('../../assets/models/pan-abajo.glb'),
};

export const useBurgerModel = () => {
  const [models, setModels] = useState<ModelCache>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadAllModels();
  }, []);

  const loadAllModels = async () => {
    try {
      setLoading(true);
      const loadedModels: ModelCache = {};

      for (const layer of BURGER_LAYERS) {
        const asset = Asset.fromModule(LOCAL_MODELS[layer.modelPath as keyof typeof LOCAL_MODELS]);
        await asset.downloadAsync();
        loadedModels[layer.id] = asset.localUri || asset.uri;
      }

      setModels(loadedModels);
      setError(null);
    } catch (err) {
      setError('Error cargando modelos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getModel = (layerId: string) => {
    return models[layerId] || null;
  };

  return { models, loading, error, getModel, reload: loadAllModels };
};