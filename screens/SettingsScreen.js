// import React, { useState } from "react";
// import { View, TextInput, Button, StyleSheet, Text } from "react-native";

// const SettingsScreen = ({ navigation }) => {
//   const [message, setMessage] = useState("");

//   const saveMessage = () => {
//     alert(`Message Saved: ${message}`);
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Edit Default Message</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your default message"
//         value={message}
//         onChangeText={setMessage}
//       />
//       <Button title="Save Message" onPress={saveMessage} color="#6200EE" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#F5F5F5",
//   },
//   header: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 16,
//     backgroundColor: "#FFF",
//   },
// });

// export default SettingsScreen;


// import React, { useState } from "react";
// import { View, TextInput, Button, StyleSheet, Text } from "react-native";

// const SettingsScreen = ({ navigation }) => {
//   const [message, setMessage] = useState("");

//   const saveMessage = () => {
//     alert(`Message Saved: ${message}`);
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Edit Default Message</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your default message"
//         value={message}
//         onChangeText={setMessage}
//       />
//       <Button title="Save Message" onPress={saveMessage} color="#6200EE" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#F5F5F5",
//   },
//   header: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 16,
//     backgroundColor: "#FFF",
//   },
// });

// export default SettingsScreen;


import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient"; // For gradient background
import Icon from "react-native-vector-icons/MaterialIcons"; // For modern icons

const SettingsScreen = ({ navigation }) => {
  const [message, setMessage] = useState("");

  const saveMessage = () => {
    alert(`Message Saved: ${message}`);
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={["#6200EE", "#3700B3", "#03DAC5"]}
      style={styles.container}
    >
      <Icon name="home" size={70} color="#fff" style={styles.icon} />

      <Text style={styles.header}>Edit Default Message</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your default message"
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity style={styles.button} onPress={saveMessage}>
        <Icon name="save" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Save Message</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Go Back</Text>
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
  icon: {
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff",
    textAlign: "center",
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#03DAC5",
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginVertical: 10,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: "80%",
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default SettingsScreen;

