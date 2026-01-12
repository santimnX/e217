import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  withSpring, 
  withSequence 
} from 'react-native-reanimated';

interface NumberDisplayProps {
  number: number;
  isShaking: boolean;
}

/**
 * Componente que muestra el número generado
 * Con animación cuando se genera uno nuevo
 */
export const NumberDisplay: React.FC<NumberDisplayProps> = ({ number, isShaking }) => {
  // Animación de escala cuando hay shake
  const animatedStyle = useAnimatedStyle(() => {
    if (isShaking) {
      return {
        transform: [
          {
            scale: withSequence(
              withSpring(1.3),
              withSpring(1.0)
            ),
          },
        ],
      };
    }
    return {
      transform: [{ scale: 1 }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.numberContainer, animatedStyle]}>
        <Text style={styles.number}>{number}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  number: {
    fontSize: 96,
    fontWeight: 'bold',
    color: '#6366f1',
  },
});