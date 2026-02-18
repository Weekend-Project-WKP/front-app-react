import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import { signOut } from "../../services/auth";
import { getThemeMode, setThemeMode, ThemeMode } from "../../services/preferences";

type SettingsItem = {
  label: string;
  icon: React.ReactNode;
  onPress?: () => void;
  right?: React.ReactNode;
  disabled?: boolean;
};

type SettingsSection = {
  title: string;
  items: SettingsItem[];
};

function SettingsRow({ label, icon, onPress, right, disabled }: SettingsItem) {
  return (
    <TouchableOpacity
      style={[styles.row, disabled && { opacity: 0.6 }]}
      onPress={onPress}
      disabled={!onPress || disabled}
      activeOpacity={0.75}
    >
      <View style={styles.rowLeft}>
        <View style={styles.rowIcon}>{icon}</View>
        <Text style={styles.rowText}>{label}</Text>
      </View>

      <View style={styles.rowRight}>
        {right ?? <MaterialIcons name="arrow-forward-ios" size={18} color="#000" />}
      </View>
    </TouchableOpacity>
  );
}

export default function SettingsTab() {
  const router = useRouter();

  const [themeMode, setThemeModeState] = useState<ThemeMode>("system");
  const isDark = themeMode === "dark";

  useEffect(() => {
    (async () => {
      const mode = await getThemeMode();
      setThemeModeState(mode);
    })();
  }, []);

  const toggleDark = async (value: boolean) => {
    const next: ThemeMode = value ? "dark" : "light";
    setThemeModeState(next);
    await setThemeMode(next);
  };

  const handleLogout = () => {
    Alert.alert("Log out?", "You’ll need to sign in again to access your account.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log out",
        style: "destructive",
        onPress: async () => {
          const res = await signOut(); // service method (supabase.auth.signOut)
          if (!res.ok) {
            Alert.alert("Couldn’t log out", res.error);
            return;
          }
          // login screen is app/index.tsx
          router.replace("/");
        },
      },
    ]);
  };

  const sections: SettingsSection[] = useMemo(
    () => [
      {
        title: "General",
        items: [
          {
            label: "Edit Profile",
            icon: <Ionicons name="person-circle-outline" size={26} color="#000" />,
            onPress: () => router.push("../settings/profile"),
          },
          {
            label: "Privacy",
            icon: <Ionicons name="lock-closed-outline" size={24} color="#000" />,
            onPress: () => router.push("../settings/privacy"),
          },
        ],
      },
      {
        title: "Account",
        items: [
          {
            label: "Blocked Accounts",
            icon: <MaterialCommunityIcons name="cancel" size={24} color="#000" />,
            onPress: () => router.push("../settings/blocked"),
          },
          {
            label: "Notifications",
            icon: <Ionicons name="notifications-outline" size={24} color="#000" />,
            onPress: () => router.push("../settings/notifications"),
          },
          {
            label: "Connections",
            icon: <MaterialCommunityIcons name="connection" size={24} color="#000" />,
            onPress: () => router.push("../settings/connections"),
          },
          {
            label: "Security",
            icon: <Ionicons name="shield-checkmark-outline" size={24} color="#000" />,
            onPress: () => router.push("../settings/security"),
          },
        ],
      },
      {
        title: "Preferences",
        items: [
          {
            label: "Dark Mode",
            icon: <MaterialCommunityIcons name="theme-light-dark" size={24} color="#000" />,
            right: <Switch value={isDark} onValueChange={toggleDark} />,
          },
        ],
      },
      {
        title: "Legal",
        items: [
          {
            label: "Terms of Service",
            icon: <Ionicons name="document-text-outline" size={24} color="#000" />,
            onPress: () => router.push("../settings/terms"),
          },
          {
            label: "Privacy Policy",
            icon: <Ionicons name="document-outline" size={24} color="#000" />,
            onPress: () => router.push("../settings/privacy-policy"),
          },
        ],
      },
    ],
    [router, isDark]
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {sections.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>

            <View style={styles.card}>
              {section.items.map((item) => (
                <SettingsRow
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  onPress={item.onPress}
                  right={item.right}
                  disabled={item.disabled}
                />
              ))}
            </View>
          </View>
        ))}

        <View style={styles.dangerZone}>
          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout} activeOpacity={0.85}>
            <Text style={styles.logoutText}>LOG OUT</Text>
            <Entypo name="log-out" size={22} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => router.push("../settings/delete-account")}
            activeOpacity={0.85}
          >
            <Text style={styles.deleteText}>Delete Account</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e0a5a5" },
  header: { paddingTop: 18, paddingHorizontal: 20, paddingBottom: 10 },
  headerText: { color: "white", fontSize: 34, fontWeight: "800" },
  content: { paddingHorizontal: 16, paddingBottom: 10 },

  section: { marginTop: 14 },
  sectionTitle: { color: "#fff", fontSize: 16, fontWeight: "800", marginBottom: 8, marginLeft: 4 },
  card: { backgroundColor: "#fff", borderRadius: 16, overflow: "hidden" },

  row: {
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  rowIcon: { width: 32, alignItems: "center" },
  rowText: { fontSize: 16, fontWeight: "700", color: "#000" },
  rowRight: { marginLeft: 10 },

  dangerZone: { marginTop: 18 },
  logoutBtn: {
    backgroundColor: "#BB1313",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  logoutText: { color: "#fff", fontWeight: "900", letterSpacing: 0.6 },
  deleteBtn: { marginTop: 10, alignItems: "center", paddingVertical: 10 },
  deleteText: { color: "#2b2b2b", fontWeight: "800", textDecorationLine: "underline" },
});