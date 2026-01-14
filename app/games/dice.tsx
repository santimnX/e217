import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAccelerometer } from '@/lib/modules/sensors/accelerometer/UseAccelerometer';
import { generateRandomNumber } from '@/lib/core/logic/motion';
import { MIN_NUMBER, MAX_NUMBER } from '@/lib/core/logic/constants';
import { NumberDisplay } from '@/components/atoms/NumberDisplay';
import { ShakeIcon } from '@/components/atoms/ShakeIcon';
import { styles } from './dice.styles';

export default function DiceScreen() {
  const router = useRouter();
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [shakeCount, setShakeCount] = useState<number>(0);

  const handleShake = () => {
    setCurrentNumber(generateRandomNumber(MIN_NUMBER, MAX_NUMBER));
    setShakeCount(prev => prev + 1);
  };

  const { isShaking, magnitude } = useAccelerometer(handleShake);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Número Aleatorio</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.content}>
        <ShakeIcon isShaking={isShaking} />
        <Text style={styles.instruction}>
          {currentNumber === 0 ? '¡Agita tu dispositivo!' : '¡Agita de nuevo!'}
        </Text>

        <View style={styles.numberSection}>
          {currentNumber === 0 ? (
            <Text style={styles.placeholderText}>?</Text>
          ) : (
            <NumberDisplay number={currentNumber} isShaking={isShaking} />
          )}
        </View>

        <View style={styles.stats}>
          <StatCard label="Agitaciones" value={shakeCount} />
          <StatCard label="Magnitud" value={magnitude.toFixed(2)} />
        </View>

        <View style={styles.infoBox}>
          <Ionicons name="information-circle-outline" size={20} color="#6366f1" />
          <Text style={styles.infoText}>Agita con fuerza para un nuevo número</Text>
        </View>
      </View>
    </View>
  );
}

// Sub-componente interno para ahorrar espacio
const StatCard = ({ label, value }: { label: string; value: string | number }) => (
  <View style={styles.statCard}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);