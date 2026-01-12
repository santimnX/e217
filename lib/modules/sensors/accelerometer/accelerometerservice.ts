/**
 * Servicio para acceder al acelerómetro del dispositivo
 * Abstrae la comunicación directa con expo-sensors
 */

import { Accelerometer } from 'expo-sensors';

/**
 * Interfaz para los datos del acelerómetro
 */
export interface AccelerometerData {
  x: number;
  y: number;
  z: number;
}

/**
 * Callback que recibe datos del acelerómetro
 */
export type AccelerometerListener = (data: AccelerometerData) => void;

/**
 * Servicio singleton para manejar el acelerómetro
 */
class AccelerometerService {
  private subscription: any = null;

  /**
   * Configura el intervalo de actualización
   * @param intervalMs - Intervalo en milisegundos
   */
  setUpdateInterval(intervalMs: number): void {
    Accelerometer.setUpdateInterval(intervalMs);
  }

  /**
   * Inicia la escucha del acelerómetro
   * @param listener - Función callback que recibe los datos
   */
  start(listener: AccelerometerListener): void {
    this.subscription = Accelerometer.addListener(listener);
  }

  /**
   * Detiene la escucha del acelerómetro
   */
  stop(): void {
    if (this.subscription) {
      this.subscription.remove();
      this.subscription = null;
    }
  }

  /**
   * Verifica si el acelerómetro está disponible
   * @returns Promise que resuelve true si está disponible
   */
  async isAvailable(): Promise<boolean> {
    return await Accelerometer.isAvailableAsync();
  }
}

// Exportamos una instancia única (Singleton)
export const accelerometerService = new AccelerometerService();