/**
 * Configuración de constantes para la detección de shake
 */

// Umbral de aceleración para detectar agitación (en g's)
// 1g = gravedad terrestre (~9.8 m/s²)
// Usamos 1.7 para detectar movimientos fuertes pero no falsos positivos
export const SHAKE_THRESHOLD = 1.7;

// Tiempo de cooldown entre shakes (en milisegundos)
// Evita que una sola agitación genere múltiples números
export const COOLDOWN_TIME = 1000; // 1 segundo

// Intervalo de actualización del acelerómetro (en milisegundos)
export const UPDATE_INTERVAL = 100;

// Rango de números aleatorios
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 10;