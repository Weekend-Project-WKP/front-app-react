import React from "react";
import { Stack } from "expo-router";
import CustomHeaderBack from "../../components/customHeaderBack";

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <CustomHeaderBack />,
      }}
    />
  );
}