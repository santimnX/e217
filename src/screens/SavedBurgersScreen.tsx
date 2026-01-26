import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { COLORS } from '../constants/colors';

export const SavedBurgersScreen = () => {
  const savedBurgers: any[] = [];

  return (
    <View style={styles.container}>
      {savedBurgers.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🍔</Text>
          <Text style={styles.emptyText}>
            Aún no has guardado ninguna hamburguesa
          </Text>
          <Text style={styles.emptySubtext}>
            Crea una en el editor y guárdala aquí
          </Text>
        </View>
      ) : (
        <FlatList
          data={savedBurgers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  item: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: COLORS.surface,
    borderRadius: 8,
  },
  itemText: {
    color: COLORS.text,
    fontSize: 16,
  },
});