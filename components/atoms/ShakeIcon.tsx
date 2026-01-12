import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  withRepeat, 
  withSequence, 
  withTiming 
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

interface ShakeIconProps {
  isShaking: boolean;
}

/**
 * Icono animado que indica cuándo agitar el dispositivo
 */
export const ShakeIcon: React.FC<ShakeIconProps> = ({ isShaking }) => {
  // Animación de vibración
  const animatedStyle = useAnimatedStyle(() => {
    if (!isShaking) {
      return {
        transform: [
          {
            rotate: withRepeat(
              withSequence(
                withTiming('-10deg', { duration: 100 }),
                withTiming('10deg', { duration: 100 }),
                withTiming('0deg', { duration: 100 })
              ),
              -1, // Repetir infinitamente
              false
            ),
          },
        ],
      };
    }
    return {
      transform: [{ rotate: '0deg' }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        <Ionicons name="phone-portrait-outline" size={64} color="#ffffff" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
});