import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CustomButton } from '../ui/CustomButton';
import { COLORS } from '../../constants/colors';

interface BurgerControlsProps {
  onReset: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export const BurgerControls: React.FC<BurgerControlsProps> = ({
  onReset,
  onZoomIn,
  onZoomOut,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.zoomContainer}>
        <CustomButton 
          title="+" 
          onPress={onZoomIn} 
          style={styles.zoomButton}
        />
        <CustomButton 
          title="-" 
          onPress={onZoomOut} 
          style={styles.zoomButton}
        />
      </View>
      <CustomButton 
        title="Reset" 
        onPress={onReset}
        variant="secondary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.surface,
  },
  zoomContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  zoomButton: {
    width: 50,
    paddingHorizontal: 0,
  },
});