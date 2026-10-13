import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "../constants/theme";
import { Background } from "expo-router/build/react-navigation";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.bg },
          headerTintColor: COLORS.text,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: COLORS.bg },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}

