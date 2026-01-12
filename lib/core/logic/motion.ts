/**
 * Funciones puras para cálculos de movimiento
 * No dependen de React ni del dispositivo
 */

/**
 * Calcula la magnitud del vector de aceleración
 * Fórmula: √(x² + y² + z²)
 * 
 * @param x - Aceleración en eje X
 * @param y - Aceleración en eje Y
 * @param z - Aceleración en eje Z
 * @returns Magnitud del vector
 */
export const calculateMagnitude = (x: number, y: number, z: number): number => {
    return Math.sqrt(x * x + y * y + z * z);
  };
  
  /**
   * Determina si la magnitud supera el umbral de shake
   * 
   * @param magnitude - Magnitud calculada
   * @param threshold - Umbral mínimo para considerar shake
   * @returns true si es un shake válido
   */
  export const isShake = (magnitude: number, threshold: number): boolean => {
    return magnitude > threshold;
  };
  
  /**
   * Genera un número aleatorio entre min y max (inclusivo)
   * 
   * @param min - Número mínimo
   * @param max - Número máximo
   * @returns Número aleatorio
   */
  export const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  /**
   * Verifica si ha pasado suficiente tiempo desde el último shake
   * 
   * @param lastShakeTime - Timestamp del último shake
   * @param cooldownTime - Tiempo mínimo entre shakes
   * @returns true si puede ejecutarse un nuevo shake
   */
  export const canShakeAgain = (lastShakeTime: number, cooldownTime: number): boolean => {
    const now = Date.now();
    return now - lastShakeTime >= cooldownTime;
  };