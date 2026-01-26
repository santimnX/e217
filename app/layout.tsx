import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { COLORS } from '../src/constants/colors';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.surface,
          },
          headerTintColor: COLORS.text,
          headerTitleStyle: {
            fontWeight: '700',
          },
          contentStyle: {
            backgroundColor: COLORS.background,
          },
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Inicio',
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="editor" 
          options={{ 
            title: 'Editor de Hamburguesas',
          }} 
        />
        <Stack.Screen 
          name="saved" 
          options={{ 
            title: 'Mis Hamburguesas',
          }} 
        />
      </Stack>
    </GestureHandlerRootView>
  );
}