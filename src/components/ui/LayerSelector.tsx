import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { BURGER_LAYERS } from '../../constants/burgerLayers';

interface LayerSelectorProps {
  activeLayers: string[];
  onToggle: (layerId: string) => void;
}

export const LayerSelector: React.FC<LayerSelectorProps> = ({
  activeLayers,
  onToggle,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredientes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {BURGER_LAYERS.map((layer) => {
          const isActive = activeLayers.includes(layer.id);
          return (
            <TouchableOpacity
              key={layer.id}
              style={[styles.item, isActive && styles.itemActive]}
              onPress={() => onToggle(layer.id)}
              activeOpacity={0.7}
            >
              <Text style={[styles.itemText, isActive && styles.itemTextActive]}>
                {layer.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: COLORS.surface,
  },
  title: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.textSecondary,
  },
  itemActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  itemText: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
  itemTextActive: {
    color: COLORS.text,
    fontWeight: '700',
  },
});