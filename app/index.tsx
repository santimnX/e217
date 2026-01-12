import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { GameCard } from '@/components/molecules/GameCard';

/**
 * Pantalla principal - Lista de juegos disponibles
 */
export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🎲 Juegos de Azar</Text>
        <Text style={styles.subtitle}>Agita tu dispositivo y prueba tu suerte</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <GameCard
          title="Número Aleatorio"
          description="Agita para generar un número del 1 al 10"
          icon="dice-outline"
          onPress={() => router.push('/games/dice')}
        />
        
        {/* Aquí se pueden agregar más juegos en el futuro */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
    backgroundColor: '#6366f1',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e7ff',
  },
  scrollView: {
    flex: 1,
    paddingTop: 16,
  },
});