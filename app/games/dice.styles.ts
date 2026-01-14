import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#6366f1' },
  content: {
    flex: 1,
    backgroundColor: '#f9fafb',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 40,
    alignItems: 'center',
  },
  instruction: { fontSize: 24, fontWeight: '600', color: '#1f2937', marginTop: 20 },
});