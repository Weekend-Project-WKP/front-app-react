import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { requestAccountDeletion, signOut } from "../../services/auth";

export default function DeleteAccount() {
  const router = useRouter();
  const [confirmText, setConfirmText] = useState("");

  const canSubmit = confirmText.trim().toUpperCase() === "DELETE";

  const handleDelete = async () => {
    Alert.alert("Delete account?", "This is permanent.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          const res = await requestAccountDeletion();
          if (!res.ok) return Alert.alert("Couldn’t delete account", res.error);
          await signOut();
          router.replace("/");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Account</Text>
      <Text style={styles.desc}>
        Type <Text style={styles.bold}>DELETE</Text> to confirm.
      </Text>

      <TextInput
        value={confirmText}
        onChangeText={setConfirmText}
        placeholder="Type DELETE"
        autoCapitalize="characters"
        style={styles.input}
      />

      <TouchableOpacity
        style={[styles.deleteBtn, !canSubmit && { opacity: 0.5 }]}
        onPress={handleDelete}
        disabled={!canSubmit}
        activeOpacity={0.85}
      >
        <Text style={styles.deleteBtnText}>Delete My Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()} style={styles.cancelBtn}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e0a5a5", padding: 18, paddingTop: 24 },
  title: { color: "#fff", fontSize: 28, fontWeight: "900", marginBottom: 8 },
  desc: { color: "#fff", fontSize: 15, marginBottom: 14 },
  bold: { fontWeight: "900" },
  input: { backgroundColor: "#fff", borderRadius: 12, paddingHorizontal: 12, paddingVertical: 12, fontSize: 16 },
  deleteBtn: { marginTop: 14, backgroundColor: "#BB1313", borderRadius: 14, paddingVertical: 14, alignItems: "center" },
  deleteBtnText: { color: "#fff", fontWeight: "900" },
  cancelBtn: { marginTop: 12, alignItems: "center", paddingVertical: 10 },
  cancelText: { color: "#2b2b2b", fontWeight: "800", textDecorationLine: "underline" },
});