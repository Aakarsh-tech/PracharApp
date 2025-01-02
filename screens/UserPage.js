import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient"; // For gradient background
import * as ImagePicker from "react-native-image-picker"; // For picking images

const UserPage = () => {
  const [userName, setUserName] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleRegister = () => {
    if (!userName || !photo) {
      Alert.alert("Error", "Please provide your name and photo.");
      return;
    }
    Alert.alert("Success", "User registered successfully!");
  };

  const pickImage = () => {
    ImagePicker.launchImageLibrary(
      { mediaType: "photo", quality: 1 },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          setPhoto(response.assets[0].uri);
        }
      }
    );
  };

  const downloadPoster = () => {
    Alert.alert("Download", "Your personalized poster will be downloaded.");
    // Implement poster download logic here
  };

  return (
    <LinearGradient colors={["#6200EE", "#3700B3", "#03DAC5"]} style={styles.container}>
      <Text style={styles.header}>User Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={userName}
        onChangeText={setUserName}
      />

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload Photo</Text>
      </TouchableOpacity>

      {photo && <Image source={{ uri: photo }} style={styles.photo} />}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={downloadPoster}>
        <Text style={styles.buttonText}>Download Poster</Text>
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
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
});

export default UserPage;
