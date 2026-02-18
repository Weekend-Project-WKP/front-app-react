import React from "react";
import { View, ActivityIndicator, ImageBackground, StyleSheet } from "react-native";
import { Redirect } from "expo-router";
import { useAuth } from "../provider/AuthProvider";
import { supabase } from "../config/initSupabase";
import Auth from "../components/auth";

export default function Index() {
  const { session, loading } = useAuth();

  const faceoffImage = require("../assets/images/faceoff.png");

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  if (session) {
    return <Redirect href="/(tabs)/home" />;
  }

  return (
    <ImageBackground source={faceoffImage} resizeMode="cover" style={styles.image}>
      <Auth />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: { flex: 1 },
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
});
