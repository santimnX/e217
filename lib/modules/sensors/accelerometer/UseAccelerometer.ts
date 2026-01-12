/**
 * Hook personalizado para usar el acelerómetro en componentes React
 * Adapta el servicio para que sea reactivo
 */

import { useEffect, useState, useRef } from 'react';
import { accelerometerService, AccelerometerData } from './accelerometerservice';
import { calculateMagnitude, isShake, canShakeAgain } from '@/lib/core/logic/motion';
import { SHAKE_THRESHOLD, COOLDOWN_TIME, UPDATE_INTERVAL } from '@/lib/core/logic/constants';

interface UseAccelerometerReturn {
  isShaking: boolean;
  magnitude: number;
  data: AccelerometerData | null;
}

/**
 * Hook que detecta agitaciones del dispositivo
 * 
 * @param onShake - Callback ejecutado cuando se detecta un shake
 * @returns Estado del acelerómetro
 */
export const useAccelerometer = (onShake: () => void): UseAccelerometerReturn => {
  const [data, setData] = useState<AccelerometerData | null>(null);
  const [magnitude, setMagnitude] = useState<number>(0);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  
  // useRef para mantener el timestamp sin causar re-renders
  const lastShakeTime = useRef<number>(0);

  useEffect(() => {
    let mounted = true;

    // Verificar disponibilidad del sensor
    const checkAndStart = async () => {
      const available = await accelerometerService.isAvailable();
      
      if (!available) {
        console.warn('Accelerometer not available on this device');
        return;
      }

      // Configurar intervalo de actualización
      accelerometerService.setUpdateInterval(UPDATE_INTERVAL);

      // Iniciar escucha
      accelerometerService.start((accelerometerData) => {
        if (!mounted) return;

        // Actualizar datos en el estado
        setData(accelerometerData);

        // Calcular magnitud del vector
        const mag = calculateMagnitude(
          accelerometerData.x,
          accelerometerData.y,
          accelerometerData.z
        );
        setMagnitude(mag);

        // Detectar shake
        if (isShake(mag, SHAKE_THRESHOLD)) {
          // Verificar cooldown
          if (canShakeAgain(lastShakeTime.current, COOLDOWN_TIME)) {
            setIsShaking(true);
            lastShakeTime.current = Date.now();
            onShake();

            // Resetear estado de shake después de 300ms
            setTimeout(() => {
              if (mounted) setIsShaking(false);
            }, 300);
          }
        }
      });
    };

    checkAndStart();

    // Cleanup: detener sensor al desmontar
    return () => {
      mounted = false;
      accelerometerService.stop();
    };
  }, [onShake]);

  return { isShaking, magnitude, data };
};