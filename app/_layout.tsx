// app/_layout.js
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Pantalla inicial sin tabs */}
      <Stack.Screen name="index" />

      {/* Grupo de pantallas que sí tendrán tabs */}
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
}
