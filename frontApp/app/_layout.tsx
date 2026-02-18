import "react-native-url-polyfill/auto"; // MUST be first import (Hermes + Supabase fix)

import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "../provider/AuthProvider";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Auth screens */}
        <Stack.Screen name="index" />
        <Stack.Screen name="register" />

        {/* Tabs */}
        <Stack.Screen name="(tabs)" />

        {/* Settings detail stack (profile/privacy/etc.) */}
        <Stack.Screen name="settings" />
      </Stack>
    </AuthProvider>
  );
}