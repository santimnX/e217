import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Canvas } from '@react-three/fiber/native';
import { useAccelerometer } from '@/lib/modules/sensors/accelerometer/UseAccelerometer';
import { generateRandomNumber } from '@/lib/core/logic/motion';
import { Dice3D } from '@/components/molecules/Dice3D';
import { styles } from './dice.styles';

export default function DiceScreen() {
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  
  const { isShaking, data } = useAccelerometer(() => {
    setCurrentNumber(generateRandomNumber(1, 6));
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ width: '100%', height: 400 }}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Dice3D data={data} />
          </Canvas>
        </View>

        <Text style={styles.instruction}>
          {isShaking ? '¡Lanzando...!' : `Resultado: ${currentNumber || '?'}`}
        </Text>
      </View>
    </View>
  );
}