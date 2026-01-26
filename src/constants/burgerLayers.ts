export interface BurgerLayer {
    id: string;
    name: string;
    modelPath: any; // Usamos 'any' porque require() devuelve un número de recurso en React Native
    position: [number, number, number];
    order: number;
  }
  
  /**
   * IMPORTANTE: 
   * 1. Verifica si tu carpeta es /model/ o /models/ (usé 'models' según tu error).
   * 2. Los nombres deben ser EXACTOS a los archivos físicos.
   */
  export const BURGER_LAYERS: BurgerLayer[] = [
    {
      id: 'pan-arriba',
      name: 'Pan Superior',
      modelPath: require('../../assets/models/PanArriba.glb'),
      position: [0, 0.5, 0],
      order: 5
    },
    {
      id: 'queso',
      name: 'Queso',
      modelPath: require('../../assets/models/Queso.glb'),
      position: [0, 0.3, 0],
      order: 4
    },
    {
      id: 'tomate',
      name: 'Tomate',
      modelPath: require('../../assets/models/Tomate.glb'),
      position: [0, 0.2, 0],
      order: 3
    },
    {
      id: 'carne',
      name: 'Carne',
      modelPath: require('../../assets/models/Carne.glb'),
      position: [0, 0.1, 0],
      order: 2
    },
    {
      id: 'pan-abajo',
      name: 'Pan Inferior',
      modelPath: require('../../assets/models/PanAbajo.glb'),
      position: [0, 0, 0],
      order: 1
    }
  ];