import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

import { supabase } from "../../config/initSupabase";
import { useAuth } from "../../provider/AuthProvider";
import { signOut } from "../../services/auth";

export default function Home() {
  const router = useRouter();
  const { session } = useAuth();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  
   
  useEffect(() => {
    if (session?.user?.id) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", session?.user?.id)
        .maybeSingle();

      if (error) {
        Alert.alert("Profile error", error.message);
        return;
      }

      setUsername(data?.username ?? "");
    } catch (e: any) {
      Alert.alert("Error", e.message);
    } finally {
      setLoading(false);
    }
  }

  const goToSettingsTab = () => {
    // !!!!! THIS IS THE CRITICAL FIX
    router.push("/(tabs)/settings");
  };

  const logout = async () => {
    const res = await signOut();

    if (!res.ok) {
      Alert.alert("Logout failed", res.error);
      return;
    }

    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Tab</Text>

      <Button title="Go to Settings Tab" onPress={goToSettingsTab} />

      <View style={{ height: 12 }} />

      <Button title="Sign Out" onPress={logout} />

      <View style={{ height: 20 }} />

      <Text>Username: {username}</Text>
      <Text>Loading: {String(loading)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
