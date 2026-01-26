import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { CustomButton } from '../components';
import { COLORS } from '../constants/colors';

export const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🍔</Text>
        <Text style={styles.subtitle}>Burger Builder 3D</Text>
        <Text style={styles.description}>
          Crea tu hamburguesa perfecta en 3D
        </Text>
        
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Crear Hamburguesa"
            onPress={() => router.push('/editor')}
          />
          <CustomButton
            title="Mis Hamburguesas"
            onPress={() => router.push('/saved')}
            variant="secondary"
            style={styles.buttonSpacing}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 80,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 48,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  buttonSpacing: {
    marginTop: 16,
  },
});