import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { BurgerViewer, BurgerControls, LayerSelector, LoadingScreen } from '../components';
import { useBurgerModel } from '../hooks/useBurgerModel';
import { useBurgerLayers } from '../hooks/useBurgerLayers';
import { useBurgerInteraction } from '../hooks/useBurgerInteraction';
import { COLORS } from '../constants/colors';

export const EditorScreen = () => {
  const { models, loading, error } = useBurgerModel();
  const { activeLayers, toggleLayer, getVisibleLayers, resetLayers } = useBurgerLayers();
  const { rotation, zoom, handleZoom, reset } = useBurgerInteraction();

  const handleReset = () => {
    reset();
    resetLayers();
  };

  const handleZoomIn = () => handleZoom(0.2);
  const handleZoomOut = () => handleZoom(-0.2);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewerContainer}>
        <BurgerViewer
          layers={getVisibleLayers()}
          models={models}
          rotation={rotation}
          zoom={zoom}
        />
      </View>
      
      <BurgerControls
        onReset={handleReset}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
      />
      
      <LayerSelector
        activeLayers={activeLayers}
        onToggle={toggleLayer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  viewerContainer: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 16,
  },
});