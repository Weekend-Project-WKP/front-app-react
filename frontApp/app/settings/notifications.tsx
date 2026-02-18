import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming Soon</Text>
      <Text style={styles.text}>Stub screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e0a5a5", padding: 16, paddingTop: 24 },
  title: { color: "#fff", fontSize: 26, fontWeight: "900" },
  text: { marginTop: 10, color: "#fff" },
});