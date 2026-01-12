import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAccelerometer } from '../lib/modules/sensors/accelerometer/useAccelerometer';
import { generateRandomNumber } from '@/lib/core/logic/motion';
import { MIN_NUMBER, MAX_NUMBER } from '@/lib/core/logic/constants';
import { NumberDisplay } from '@/components/atoms/NumberDisplay';
import { ShakeIcon } from '@/components/atoms/ShakeIcon';

/**
 * Pantalla del juego de números aleatorios
 * Detecta shake y genera números del 1 al 10
 */
export default function DiceScreen() {
  const router = useRouter();
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [shakeCount, setShakeCount] = useState<number>(0);

  // Callback ejecutado cuando se detecta un shake
  const handleShake = () => {
    const newNumber = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
    setCurrentNumber(newNumber);
    setShakeCount(prev => prev + 1);
  };

  // Hook del acelerómetro
  const { isShaking, magnitude } = useAccelerometer(handleShake);

  return (
    <View style={styles.container}>
      {/* Header con botón de volver */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Número Aleatorio</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        {/* Icono animado */}
        <ShakeIcon isShaking={isShaking} />

        {/* Instrucciones */}
        <Text style={styles.instruction}>
          {currentNumber === 0 
            ? '¡Agita tu dispositivo!' 
            : '¡Agita de nuevo!'}
        </Text>

        {/* Display del número */}
        <View style={styles.numberSection}>
          {currentNumber === 0 ? (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>?</Text>
            </View>
          ) : (
            <NumberDisplay number={currentNumber} isShaking={isShaking} />
          )}
        </View>

        {/* Estadísticas */}
        <View style={styles.stats}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Agitaciones</Text>
            <Text style={styles.statValue}>{shakeCount}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Magnitud</Text>
            <Text style={styles.statValue}>{magnitude.toFixed(2)}</Text>
          </View>
        </View>

        {/* Información adicional */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle-outline" size={20} color="#6366f1" />
          <Text style={styles.infoText}>
            Agita con fuerza para generar un nuevo número
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6366f1',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    backgroundColor: '#f9fafb',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 40,
    alignItems: 'center',
  },
  instruction: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 40,
  },
  numberSection: {
    marginBottom: 40,
  },
  placeholderText: {
    fontSize: 96,
    fontWeight: 'bold',
    color: '#d1d5db',
  },
  stats: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  statCard: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eef2ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 20,
    gap: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#4f46e5',
  },
});