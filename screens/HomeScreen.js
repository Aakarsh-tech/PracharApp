// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Button, Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Simulating a call event (for example purposes)
// const HomeScreen = ({ navigation }) => {
//   const [callEvent, setCallEvent] = useState(null);

//   // Function to simulate a call and store call data
//   const handleCallEvent = async () => {
//     const callDetails = {
//       caller: 'John Doe',
//       message: 'Incoming Call: Please pick up.',
//       timestamp: new Date().toLocaleString(),
//     };

//     // Store call details in AsyncStorage
//     await AsyncStorage.setItem('callEvent', JSON.stringify(callDetails));

//     // Update state to display the call event
//     setCallEvent(callDetails);
//   };

//   useEffect(() => {
//     const fetchCallEvent = async () => {
//       const callData = await AsyncStorage.getItem('callEvent');
//       if (callData) {
//         setCallEvent(JSON.parse(callData));
//       }
//     };

//     fetchCallEvent();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Home Screen</Text>
//       <Button title="Trigger Call Event" onPress={handleCallEvent} />
//       {callEvent && (
//         <View style={styles.callDetails}>
//           <Text style={styles.callText}>{callEvent.message}</Text>
//           <Text style={styles.callerText}>From: {callEvent.caller}</Text>
//           <Text style={styles.timestamp}>Time: {callEvent.timestamp}</Text>
//         </View>
//       )}
//       <Button title="Go to Calls" onPress={() => navigation.navigate('Calls')} />
//       <Button title="Go to Messages" onPress={() => navigation.navigate('Messages')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   callDetails: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   callText: {
//     fontSize: 18,
//     color: '#555',
//   },
//   callerText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   timestamp: {
//     fontSize: 14,
//     color: '#888',
//   },
// });

// export default HomeScreen;


// import React from "react";
// import { View, Text, StyleSheet, Button } from "react-native";

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Welcome to Prachar App!</Text>
//       <Text style={styles.defaultMessage}>
//         Default Message: "Hello! This is an automated reply from Prachar."
//       </Text>
//       <Button
//         title="Edit Default Message"
//         onPress={() => navigation.navigate("Settings")}
//         color="#6200EE"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#F5F5F5",
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   defaultMessage: {
//     fontSize: 16,
//     marginBottom: 24,
//     textAlign: "center",
//   },
// });

// export default HomeScreen;




// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
// import SmsListener from 'react-native-android-sms-listener';
// // import SmsAndroid from 'react-native-get-sms-android'

// const HomeScreen = ({ navigation }) => {
//   const [smsMessage, setSmsMessage] = useState(null);
   
//   // useEffect(()=> {
//   //   const filter ={
//   //     box: "", 
//   //     read: 1,
//   //     indexFrom: 0,
//   //     maxCount: 10, 
//   //   }
//   //   SmsAndroid.list(
//   //     JSON.stringify(filter),
//   //     (fail) => {
//   //       console.log('fail', fail)
//   //     },
//   //     (count, smsList) => {
//   //       console.log('count', count)
//   //       console.log('smsList', JSON.parse(smsList))
//   //     }
//   //   )
//   // }, [])
//   useEffect(() => {
//     // Subscribe to SMS listener
//     const subscribe = SmsListener.addListener((message) => {
//       console.log('Received SMS:', message);
//       setSmsMessage(message.body); // Store the SMS body when received
//     });

//     // Cleanup the listener when component is unmounted
//     return () => subscribe.remove();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Welcome to Prachar App!</Text>
//       <Text style={styles.defaultMessage}>
//         Default Message: "Hello! This is an automated reply from Prachar."
//       </Text>
//       {smsMessage ? (
//         <Text style={styles.smsMessage}>Received SMS: {smsMessage}</Text>
//       ) : (
//         <Text style={styles.smsMessage}>Waiting for incoming SMS...</Text>
//       )}

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Settings")}
//       >
//         <Text style={styles.buttonText}>Edit Default Message</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Permissions")}
//       >
//         <Text style={styles.buttonText}>Manage Permissions</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#ffffff",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "700",
//     marginBottom: 20,
//     color: "#333",
//     textAlign: "center",
//   },
//   defaultMessage: {
//     fontSize: 16,
//     color: "#666",
//     marginBottom: 24,
//     textAlign: "center",
//   },
//   smsMessage: {
//     fontSize: 18,
//     color: "#444",
//     marginTop: 10,
//     textAlign: "center",
//   },
//   button: {
//     backgroundColor: "#6200EE",
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     marginVertical: 10,
//     borderRadius: 8,
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "500",
//   },
// });

// export default HomeScreen;



// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   PermissionsAndroid,
//   Alert,
// } from "react-native";
// import SmsListener from "react-native-android-sms-listener";
// import SmsAndroid from "react-native-get-sms-android";
// import SendSMS from "react-native-sms";
// // import { PermissionsAndroid, Alert } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   const [smsMessage, setSmsMessage] = useState(null);
//   const [receivedMessages, setReceivedMessages] = useState([]);

//   // Request SMS permissions dynamically
//   const requestPermissions = async () => {
//     try {
//       const granted = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.SEND_SMS,
//         PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
//         PermissionsAndroid.PERMISSIONS.READ_SMS,
//         PermissionsAndroid.PERMISSIONS.WRITE_SMS,
//       ]);

//       if (
//         granted["android.permission.SEND_SMS"] !== PermissionsAndroid.RESULTS.GRANTED ||
//         granted["android.permission.RECEIVE_SMS"] !== PermissionsAndroid.RESULTS.GRANTED ||
//         granted["android.permission.READ_SMS"] !== PermissionsAndroid.RESULTS.GRANTED
//       ) {
//         console.log("SMS permissions granted");
//       }else{
//         Alert.alert("Permissions required", "Please enable SMS permissions");
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   // Auto-read received SMS
//   useEffect(() => {
//     requestPermissions();

//     // Subscribe to SMS listener
//     const subscribe = SmsListener.addListener((message) => {
//       console.log("Received SMS:", message);
//       setSmsMessage(message.body); // Store the SMS body when received
//     });

//     return () => subscribe.remove(); // Cleanup listener on unmount
//   }, []);

//   // Read SMS from the inbox
//   const readSms = () => {
//     const filter = {
//       box: "inbox", // Read messages from the inbox
//       maxCount: 10, // Limit the number of SMS to fetch
//     };

//     SmsAndroid.list(
//       JSON.stringify(filter),
//       (fail) => {
//         console.log("Failed to fetch SMS", fail);
//       },
//       (count, smsList) => {
//         const messages = JSON.parse(smsList);
//         console.log("Received SMS List:", messages);
//         setReceivedMessages(messages);
//       }
//     );
//   };

//   // Send an SMS programmatically
//   const sendSms = (phoneNumber, message) => {
//     SendSMS.send(
//       {
//         body: message,
//         recipients: [phoneNumber],
//         successTypes: ["sent", "queued"],
//       },
//       (completed, cancelled, error) => {
//         if (completed) {
//           console.log("SMS Sent successfully!");
//           Alert.alert("Success", "SMS sent successfully!");
//         } else if (cancelled) {
//           console.log("SMS Sending cancelled.");
//         } else if (error) {
//           console.log("Error sending SMS:", error);
//         }
//       }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Welcome to Prachar App!</Text>
//       <Text style={styles.defaultMessage}>
//         Default Message: "Hello! This is an automated reply from Prachar."
//       </Text>
//       {smsMessage ? (
//         <Text style={styles.smsMessage}>Received SMS: {smsMessage}</Text>
//       ) : (
//         <Text style={styles.smsMessage}>Waiting for incoming SMS...</Text>
//       )}

//       <TouchableOpacity style={styles.button} onPress={readSms}>
//         <Text style={styles.buttonText}>Read SMS</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => sendSms("1234567890", "Hello! This is a test message.")}
//       >
//         <Text style={styles.buttonText}>Send SMS</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Settings")}
//       >
//         <Text style={styles.buttonText}>Edit Default Message</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Permissions")}
//       >
//         <Text style={styles.buttonText}>Manage Permissions</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#ffffff",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "700",
//     marginBottom: 20,
//     color: "#333",
//     textAlign: "center",
//   },
//   defaultMessage: {
//     fontSize: 16,
//     color: "#666",
//     marginBottom: 24,
//     textAlign: "center",
//   },
//   smsMessage: {
//     fontSize: 18,
//     color: "#444",
//     marginTop: 10,
//     textAlign: "center",
//   },
//   button: {
//     backgroundColor: "#6200EE",
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     marginVertical: 10,
//     borderRadius: 8,
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "500",
//   },
// });

// export default HomeScreen;


// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   PermissionsAndroid,
//   Alert,
// } from "react-native";
// import SmsAndroid from "react-native-get-sms-android";
// import SendSMS from "react-native-sms";

// const HomeScreen = ({ navigation }) => {
//   const [smsMessage, setSmsMessage] = useState(null);
//   const [hasPermissions, setHasPermissions] = useState(false);

//   // Request SMS permissions
//   const requestPermissions = async () => {
//     try {
//       const granted = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.READ_SMS,
//         PermissionsAndroid.PERMISSIONS.SEND_SMS,
//         PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
//       ]);

//       if (
//         granted["android.permission.READ_SMS"] === PermissionsAndroid.RESULTS.GRANTED &&
//         granted["android.permission.SEND_SMS"] === PermissionsAndroid.RESULTS.GRANTED &&
//         granted["android.permission.RECEIVE_SMS"] === PermissionsAndroid.RESULTS.GRANTED
//       ) {
//         setHasPermissions(true);
//         Alert.alert("Permissions Granted", "You can now read and send SMS.");
//       } else {
//         Alert.alert(
//           "Permissions Denied",
//           "App requires SMS permissions to work properly."
//         );
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   useEffect(() => {
//     requestPermissions(); // Request permissions when the component mounts
//   }, []);

//   const sendSms = () => {
//     if (!hasPermissions) {
//       Alert.alert(
//         "Permission Required",
//         "Please grant SMS permissions to use this feature."
//       );
//       return;
//     }

//     SendSMS.send(
//       {
//         body: "Hello, this is an automated message from Prachar App, Welcome to Prachar App!",
//         recipients: ["1234567890"], // Replace with actual recipient numbers
//         successTypes: ["sent", "queued"],
//       },
//       (completed, cancelled, error) => {
//         if (completed) {
//           Alert.alert("SMS Sent", "Message sent successfully!");
//         } else if (cancelled) {
//           Alert.alert("SMS Cancelled", "Message sending was cancelled.");
//         } else if (error) {
//           Alert.alert("SMS Error", "Failed to send the message.");
//         }
//       }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Welcome to Prachar App!</Text>
//       <Text style={styles.defaultMessage}>
//         Default Message: "Hello! This is an automated reply from Prachar."
//       </Text>
//       {smsMessage ? (
//         <Text style={styles.smsMessage}>Received SMS: {smsMessage}</Text>
//       ) : (
//         <Text style={styles.smsMessage}>Waiting for incoming SMS...</Text>
//       )}

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Settings")}
//       >
//         <Text style={styles.buttonText}>Edit Default Message</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={sendSms}>
//         <Text style={styles.buttonText}>Send SMS</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Permissions")}
//       >
//         <Text style={styles.buttonText}>Manage Permissions</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#ffffff",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "700",
//     marginBottom: 20,
//     color: "#333",
//     textAlign: "center",
//   },
//   defaultMessage: {
//     fontSize: 16,
//     color: "#666",
//     marginBottom: 24,
//     textAlign: "center",
//   },
//   smsMessage: {
//     fontSize: 18,
//     color: "#444",
//     marginTop: 10,
//     textAlign: "center",
//   },
//   button: {
//     backgroundColor: "#6200EE",
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     marginVertical: 10,
//     borderRadius: 8,
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "500",
//   },
// });

// export default HomeScreen;



import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient"; // For gradient background
import Icon from "react-native-vector-icons/MaterialIcons"; // For modern icons
import SendSMS from "react-native-sms";

const HomeScreen = ({ navigation }) => {
  const [hasPermissions, setHasPermissions] = useState(false);

  // Request SMS permissions
  const requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
      ]);

      if (
        granted["android.permission.READ_SMS"] === PermissionsAndroid.RESULTS.GRANTED &&
        granted["android.permission.SEND_SMS"] === PermissionsAndroid.RESULTS.GRANTED &&
        granted["android.permission.RECEIVE_SMS"] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        setHasPermissions(true);
        Alert.alert("Permissions Granted", "You can now read and send SMS.");
      } else {
        Alert.alert(
          "Permissions Denied",
          "App requires SMS permissions to work properly."
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestPermissions(); // Request permissions when the component mounts
  }, []);

  const sendSms = () => {
    if (!hasPermissions) {
      Alert.alert(
        "Permission Required",
        "Please grant SMS permissions to use this feature."
      );
      return;
    }

    SendSMS.send(
      {
        body: "Hello, this is an automated message from Prachar App, Welcome to Prachar App!",
        recipients: ["1234567890"], // Replace with actual recipient numbers
        successTypes: ["sent", "queued"],
      },
      (completed, cancelled, error) => {
        if (completed) {
          Alert.alert("SMS Sent", "Message sent successfully!");
        } else if (cancelled) {
          Alert.alert("SMS Cancelled", "Message sending was cancelled.");
        } else if (error) {
          Alert.alert("SMS Error", "Failed to send the message.");
        }
      }
    );
  };

  return (
    <LinearGradient
      colors={["#6200EE", "#3700B3", "#03DAC5"]}
      style={styles.container}
    >
      <Icon name="message" size={70} color="#fff" style={styles.icon} />
      <Text style={styles.header}>Welcome to Prachar App!</Text>
      <Text style={styles.defaultMessage}>
        Default Message: "Hello! This is an automated reply from Prachar."
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Settings")}
      >
        <Icon name="edit" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Edit Default Message</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={sendSms}>
        <Icon name="send" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Send SMS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Permissions")}
      >
        <Icon name="security" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Manage Permissions</Text>
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
  defaultMessage: {
    fontSize: 16,
    color: "#E0E0E0",
    marginBottom: 24,
    textAlign: "center",
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

export default HomeScreen;



// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage"; // For persistent login state
// import LinearGradient from "react-native-linear-gradient"; // For gradient background

// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   // Check for saved login state on app load
//   useEffect(() => {
//     const checkLoginState = async () => {
//       const savedRole = await AsyncStorage.getItem("userRole");
//       if (savedRole) {
//         navigation.replace("HomeScreen", { role: savedRole });
//       }
//     };
//     checkLoginState();
//   }, []);

//   const handleLogin = async () => {
//     // Hardcoded credentials for demonstration purposes
//     if (username === "admin" && password === "admin123") {
//       await AsyncStorage.setItem("userRole", "Admin"); // Save role to AsyncStorage
//       navigation.replace("HomeScreen", { role: "Admin" });
//     } else if (username === "user" && password === "user123") {
//       await AsyncStorage.setItem("userRole", "User"); // Save role to AsyncStorage
//       navigation.replace("HomeScreen", { role: "User" });
//     } else {
//       Alert.alert("Login Failed", "Invalid username or password.");
//     }
//   };

//   return (
//     <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={styles.container}>
//       <View>
//         <Text style={styles.title}>Login</Text>
//         <TextInput
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           style={styles.input}
//         />
//         <Button title="Login" onPress={handleLogin} />
//       </View>
//     </LinearGradient>
//   );
// };

// const HomeScreen = ({ route, navigation }) => {
//   const { role } = route.params; // Role passed from LoginScreen

//   const handleLogout = async () => {
//     await AsyncStorage.removeItem("userRole"); // Clear the saved login state
//     navigation.replace("LoginScreen");
//   };

//   return (
//     <LinearGradient colors={["#ff7e5f", "#feb47b"]} style={styles.container}>
//       <Text style={styles.title}>Welcome, {role}!</Text>
//       {role === "Admin" ? (
//         <View>
//           <Text style={styles.subtitle}>Admin Options</Text>
//           <Button title="Manage Users" onPress={() => Alert.alert("Manage Users")} />
//           <Button title="View Reports" onPress={() => Alert.alert("View Reports")} />
//         </View>
//       ) : (
//         <View>
//           <Text style={styles.subtitle}>User Options</Text>
//           <Button title="View Profile" onPress={() => Alert.alert("View Profile")} />
//           <Button title="Update Info" onPress={() => Alert.alert("Update Info")} />
//         </View>
//       )}
//       <Button title="Logout" onPress={handleLogout} color="red" />
//     </LinearGradient>
//   );
// };

// const App = () => {
//   const [currentScreen, setCurrentScreen] = useState("LoginScreen");

//   const renderScreen = () => {
//     if (currentScreen === "LoginScreen") {
//       return <LoginScreen navigation={{ replace: setCurrentScreen }} />;
//     } else if (currentScreen === "HomeScreen") {
//       return (
//         <HomeScreen
//           route={{ params: { role: "User" } }}
//           navigation={{ replace: setCurrentScreen }}
//         />
//       );
//     }
//   };

//   return <>{renderScreen()}</>;
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 20,
//   },
//   subtitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//     marginVertical: 10,
//   },
//   input: {
//     width: 300,
//     height: 40,
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
// });

// export default App;
