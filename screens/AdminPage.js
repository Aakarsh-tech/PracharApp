import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient"; // For gradient background

const AdminPage = () => {
  const [dailyLimit, setDailyLimit] = useState(100);
  const [defaultMessage, setDefaultMessage] = useState("");

  const handleSaveSettings = () => {
    Alert.alert("Settings Saved", "Your changes have been saved successfully.");
  };

  const viewLogs = () => {
    Alert.alert("Logs", "Displaying system logs...");
    // Implement log viewing logic here
  };

  return (
    <LinearGradient colors={["#6200EE", "#3700B3", "#03DAC5"]} style={styles.container}>
      <Text style={styles.header}>Admin Panel</Text>

      <Text style={styles.label}>Default Message:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter default message"
        value={defaultMessage}
        onChangeText={setDefaultMessage}
      />

      <Text style={styles.label}>Daily Message Limit:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter daily limit"
        keyboardType="numeric"
        value={dailyLimit.toString()}
        onChangeText={(text) => setDailyLimit(Number(text))}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveSettings}>
        <Text style={styles.buttonText}>Save Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={viewLogs}>
        <Text style={styles.buttonText}>View Logs</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 8,
    alignSelf: "flex-start",
    paddingLeft: 40,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#FFF",
    color: "#333",
  },
  button: {
    backgroundColor: "#03DAC5",
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AdminPage;
