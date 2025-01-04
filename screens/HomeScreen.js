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



// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   PermissionsAndroid,
//   Alert,
// } from "react-native";
// import LinearGradient from "react-native-linear-gradient"; // For gradient background
// import Icon from "react-native-vector-icons/MaterialIcons"; // For modern icons
// import SendSMS from "react-native-sms";

// const HomeScreen = ({ navigation }) => {
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
//         recipients: ["91956653906"], // Replace with actual recipient numbers
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
//     <LinearGradient
//       colors={["#6200EE", "#3700B3", "#03DAC5"]}
//       style={styles.container}
//     >
//       <Icon name="message" size={70} color="#fff" style={styles.icon} />
//       <Text style={styles.header}>Welcome to Prachar App!</Text>
//       <Text style={styles.defaultMessage}>
//         Default Message: "Hello! This is an automated reply from Prachar."
//       </Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Settings")}
//       >
//         <Icon name="edit" size={20} color="#fff" style={styles.buttonIcon} />
//         <Text style={styles.buttonText}>Edit Default Message</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={sendSms}>
//         <Icon name="send" size={20} color="#fff" style={styles.buttonIcon} />
//         <Text style={styles.buttonText}>Send SMS</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Permissions")}
//       >
//         <Icon name="security" size={20} color="#fff" style={styles.buttonIcon} />
//         <Text style={styles.buttonText}>Manage Permissions</Text>
//       </TouchableOpacity>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 16,
//     color: "#fff",
//     textAlign: "center",
//   },
//   defaultMessage: {
//     fontSize: 16,
//     color: "#E0E0E0",
//     marginBottom: 24,
//     textAlign: "center",
//   },
//   button: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#03DAC5",
//     paddingVertical: 14,
//     paddingHorizontal: 24,
//     marginVertical: 10,
//     borderRadius: 25,
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     width: "80%",
//   },
//   buttonIcon: {
//     marginRight: 10,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "bold",
//   },
// });

// export default HomeScreen;

//th try 
// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   PermissionsAndroid,
//   Alert,
// } from "react-native";
// import LinearGradient from "react-native-linear-gradient"; // For gradient background
// import Icon from "react-native-vector-icons/MaterialIcons"; // For modern icons
// import SendSMS from "react-native-sms";

// const HomeScreen = ({ navigation }) => {
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
//         recipients: ["917602430642"], // Replace with actual recipient numbers
//         successTypes: ["sent", "queued"],
//         // This forces the message to go to the default SMS app without choosing
//         intent: "INTENT" // This will bypass the chooser
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
//     <LinearGradient
//       colors={["#6200EE", "#3700B3", "#03DAC5"]}
//       style={styles.container}
//     >
//       <Icon name="message" size={70} color="#fff" style={styles.icon} />
//       <Text style={styles.header}>Welcome to Prachar App!</Text>
//       <Text style={styles.defaultMessage}>
//         Default Message: "Hello! This is an automated reply from Prachar."
//       </Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Settings")}
//       >
//         <Icon name="edit" size={20} color="#fff" style={styles.buttonIcon} />
//         <Text style={styles.buttonText}>Edit Default Message</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={sendSms}>
//         <Icon name="send" size={20} color="#fff" style={styles.buttonIcon} />
//         <Text style={styles.buttonText}>Send SMS</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Permissions")}
//       >
//         <Icon name="security" size={20} color="#fff" style={styles.buttonIcon} />
//         <Text style={styles.buttonText}>Manage Permissions</Text>
//       </TouchableOpacity>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 16,
//     color: "#fff",
//     textAlign: "center",
//   },
//   defaultMessage: {
//     fontSize: 16,
//     color: "#E0E0E0",
//     marginBottom: 24,
//     textAlign: "center",
//   },
//   button: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#03DAC5",
//     paddingVertical: 14,
//     paddingHorizontal: 24,
//     marginVertical: 10,
//     borderRadius: 25,
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     width: "80%",
//   },
//   buttonIcon: {
//     marginRight: 10,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "bold",
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
import CallLog from "react-native-call-log"; // For accessing call logs

const HomeScreen = ({ navigation }) => {
  const [hasPermissions, setHasPermissions] = useState(false);

  // Request SMS and Call Log permissions
  const requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG, // Add permission for reading call logs
      ]);

      if (
        granted["android.permission.READ_SMS"] === PermissionsAndroid.RESULTS.GRANTED &&
        granted["android.permission.SEND_SMS"] === PermissionsAndroid.RESULTS.GRANTED &&
        granted["android.permission.RECEIVE_SMS"] === PermissionsAndroid.RESULTS.GRANTED &&
        granted["android.permission.READ_CALL_LOG"] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        setHasPermissions(true);
        Alert.alert("Permissions Granted", "You can now read and send SMS and read call logs.");
      } else {
        Alert.alert(
          "Permissions Denied",
          "App requires SMS and call log permissions to work properly."
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestPermissions(); // Request permissions when the component mounts
    getCallLog(); // Automatically fetch the call log when the app starts
  }, []);

  // Automatically fetch call logs and send a message if conditions are met
  const getCallLog = () => {
    if (hasPermissions) {
      CallLog.getLogs() // Get recent call logs
        .then((callLog) => {
          if (callLog.length > 0) {
            const lastCall = callLog[0]; // Get the most recent call log
            const { number, type } = lastCall;

            // Check if it was an incoming or outgoing call
            if (type === "INCOMING" || type === "OUTGOING") {
              sendDefaultMessage(number); // Send message automatically when a contact is detected
            }
          }
        })
        .catch((error) => {
          console.error("Error getting call log: ", error);
        });
    } else {
      Alert.alert("Permissions", "Permissions not granted for reading call logs.");
    }
  };

  // Function to send the default SMS and image automatically
  const sendDefaultMessage = (number) => {
    const message = "Hello, this is an automated message from Prachar App, Welcome to Prachar App!";
    const defaultImageUri = "https://example.com/default-image.jpg"; // Image URL for the default image

    // Send the SMS message automatically
    sendSMS(number, message);

    // Send the image (you can integrate with WhatsApp, or other platforms here)
    sendImage(defaultImageUri);
  };

  // Function to send SMS
  const sendSMS = (number, message) => {
    SendSMS.send(
      {
        body: message,
        recipients: [number], // You can modify this for dynamic recipient
        successTypes: ["sent", "queued"],
        intent: "INTENT", // Force sending through default SMS app
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

  // Function to simulate sending an image (for WhatsApp or similar platforms)
  const sendImage = (imageUri) => {
    Alert.alert("Sending Image", "Image is being sent along with the message.");
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



// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   PermissionsAndroid,
//   Alert,
// } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import SendSMS from "react-native-sms";
// import CallLog from "react-native-call-log";

// const HomeScreen = ({ navigation }) => {
//   const [hasPermissions, setHasPermissions] = useState(false);
//   const [lastCheckedCallId, setLastCheckedCallId] = useState(null);

//   // Request SMS and Call Log permissions
//   const requestPermissions = async () => {
//     try {
//       const granted = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.READ_SMS,
//         PermissionsAndroid.PERMISSIONS.SEND_SMS,
//         PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
//         PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
//       ]);

//       if (
//         granted["android.permission.READ_SMS"] === PermissionsAndroid.RESULTS.GRANTED &&
//         granted["android.permission.SEND_SMS"] === PermissionsAndroid.RESULTS.GRANTED &&
//         granted["android.permission.RECEIVE_SMS"] === PermissionsAndroid.RESULTS.GRANTED &&
//         granted["android.permission.READ_CALL_LOG"] === PermissionsAndroid.RESULTS.GRANTED
//       ) {
//         setHasPermissions(true);
//         Alert.alert("Permissions Granted", "You can now read and send SMS and read call logs.");
//       } else {
//         Alert.alert(
//           "Permissions Denied",
//           "App requires SMS and call log permissions to work properly."
//         );
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   useEffect(() => {
//     requestPermissions(); // Request permissions when the component mounts
//     if (hasPermissions) {
//       const interval = setInterval(() => {
//         checkCallLog(); // Check call log periodically
//       }, 5000); // Check every 5 seconds
//       return () => clearInterval(interval); // Cleanup interval on component unmount
//     }
//   }, [hasPermissions]);

//   // Check call log periodically
//   const checkCallLog = () => {
//     CallLog.getLogs()
//       .then((callLog) => {
//         if (callLog.length > 0) {
//           const lastCall = callLog[0];
//           const { _id, number, type } = lastCall;

//           // Only process new calls
//           if (_id !== lastCheckedCallId && (type === "INCOMING" || type === "OUTGOING")) {
//             setLastCheckedCallId(_id);
//             sendDefaultMessage(number); // Send message for new call
//           }
//         }
//       })
//       .catch((error) => {
//         console.error("Error getting call log: ", error);
//       });
//   };

//   // Function to send the default SMS and image automatically
//   const sendDefaultMessage = (number) => {
//     const message = "Hello, this is an automated message from Prachar App, Welcome to Prachar App!";
//     const defaultImageUri = "https://example.com/default-image.jpg";

//     sendSMS(number, message);
//     sendImage(defaultImageUri); // Send image (placeholder functionality)
//   };

//   // Function to send SMS
//   const sendSMS = (number, message) => {
//     SendSMS.send(
//       {
//         body: message,
//         recipients: [number],
//         successTypes: ["sent", "queued"],
//         intent: "INTENT",
//       },
//       (completed, cancelled, error) => {
//         if (completed) {
//           console.log("SMS Sent");
//         } else if (cancelled) {
//           console.log("SMS Cancelled");
//         } else if (error) {
//           console.error("SMS Error: ", error);
//         }
//       }
//     );
//   };

//   // Placeholder function to simulate image sending
//   const sendImage = (imageUri) => {
//     console.log("Image is being sent: ", imageUri);
//   };

//   return (
//     <LinearGradient
//       colors={["#6200EE", "#3700B3", "#03DAC5"]}
//       style={styles.container}
//     >
//       <Icon name="message" size={70} color="#fff" style={styles.icon} />
//       <Text style={styles.header}>Welcome to Prachar App!</Text>
//       <Text style={styles.defaultMessage}>
//         Default Message: "Hello! This is an automated reply from Prachar."
//       </Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Settings")}
//       >
//         <Icon name="edit" size={20} color="#fff" style={styles.buttonIcon} />
//         <Text style={styles.buttonText}>Edit Default Message</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Permissions")}
//       >
//         <Icon name="security" size={20} color="#fff" style={styles.buttonIcon} />
//         <Text style={styles.buttonText}>Manage Permissions</Text>
//       </TouchableOpacity>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 16,
//     color: "#fff",
//     textAlign: "center",
//   },
//   defaultMessage: {
//     fontSize: 16,
//     color: "#E0E0E0",
//     marginBottom: 24,
//     textAlign: "center",
//   },
//   button: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#03DAC5",
//     paddingVertical: 14,
//     paddingHorizontal: 24,
//     marginVertical: 10,
//     borderRadius: 25,
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     width: "80%",
//   },
//   buttonIcon: {
//     marginRight: 10,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "bold",
//   },
// });

// export default HomeScreen;





// import React, { useState, useEffect } from "react";
// import { View, Text, Alert, Platform } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import SendSMS from "react-native-sms"; // To send SMS messages
// import * as ImagePicker from "react-native-image-picker"; // For picking images
// import CallLog from "react-native-call-log"; // Import the call log package
// import { request, PERMISSIONS, RESULTS } from "react-native-permissions"; // To handle permissions

// const HomeScreen = ({ navigation }) => {
//   const [hasPermissions, setHasPermissions] = useState(false);
//   const [photo, setPhoto] = useState(null);

//   useEffect(() => {
//     requestPermissions();
//     getCallLog(); // Fetch the recent call log when the component mounts
//   }, []);

//   const requestPermissions = async () => {
//     if (Platform.OS === "android") {
//       const result = await request(PERMISSIONS.ANDROID.READ_CALL_LOG);
//       if (result === RESULTS.GRANTED) {
//         setHasPermissions(true);
//         console.log("Permission granted");
//       } else {
//         setHasPermissions(false);
//         console.log("Permission denied");
//       }
//     }
//   };

//   const getCallLog = () => {
//     if (hasPermissions) {
//       CallLog.getLogs()
//         .then((callLog) => {
//           if (callLog.length > 0) {
//             const lastCall = callLog[0]; // Get the most recent call log
//             const { number, duration, type } = lastCall;

//             // Check if it was an incoming or outgoing call
//             if (type === "INCOMING" || type === "OUTGOING") {
//               handleContactDetected(number, type); // Handle contact detection
//             }
//           }
//         })
//         .catch((error) => {
//           console.error("Error getting call log: ", error);
//         });
//     } else {
//       Alert.alert("Permissions", "Permission to access call logs is denied.");
//     }
//   };

//   const handleContactDetected = (number, callType) => {
//     // Trigger message and image sending when a contact is detected
//     sendDefaultMessage(number, callType);
//   };

//   const sendDefaultMessage = (number, callType) => {
//     // Predefined message to be sent
//     const message = `Hello! This is an automatic response. I just missed a call from you. I'll get back to you soon.`;

//     // Set a default image URL
//     const defaultImageUri = "https://example.com/default-image.jpg"; // Replace with a valid image URL

//     // Send the SMS message automatically
//     sendSMS(number, message);

//     // Send the image along with the message (optional, for WhatsApp or other platforms)
//     sendImage(defaultImageUri);
//   };

//   const sendSMS = (number, message) => {
//     SendSMS.send(
//       {
//         body: message,
//         recipients: [number],
//         successTypes: ["sent", "queued"],
//         intent: "INTENT", // Make sure to use INTENT on Android
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

//   const sendImage = (imageUri) => {
//     // Logic to send the image to the recipient (via WhatsApp, etc.)
//     Alert.alert("Sending Image", "Image is being sent along with the message.");
//   };

//   return (
//     <LinearGradient colors={["#6200EE", "#3700B3", "#03DAC5"]} style={{ flex: 1 }}>
//       <Icon name="message" size={70} color="#fff" style={{ marginBottom: 20 }} />
//       <Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff" }}>
//         Welcome to Prachar App!
//       </Text>
//     </LinearGradient>
//   );
// };

// export default HomeScreen;




//5th try 
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, PermissionsAndroid } from 'react-native';
// import CallLog from 'react-native-call-log';
// import Sms from 'react-native-sms';

// const App = () => {
//   const [calls, setCalls] = useState([]);
//   const [ministerNumber] = useState('+917602430642');  // Replace with the minister's phone number

//   // Function to check permissions on Android
//   const requestPermissions = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
//         {
//           title: 'Call Log Permission',
//           message: 'This app needs access to your call log.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   // Function to get call logs
//   const getCallLogs = () => {
//     CallLog.load(10).then((logs) => {
//       setCalls(logs);
//       // Check if the minister's number exists in the logs
//       logs.forEach((log) => {
//         if (log.number === ministerNumber) {
//           sendSMS();
//         }
//       });
//     });
//   };

//   // Function to send SMS
//   const sendSMS = () => {
//     Sms.send({
//       body: 'This is the Message from Minister john , Please vote me ',
//       recipients: [ministerNumber],
//       successTypes: ['sent', 'queued'],
//     }).then((completed) => console.log('Message sent successfully!', completed));
//   };

//   useEffect(() => {
//     const checkPermissionsAndGetLogs = async () => {
//       const hasPermission = await requestPermissions();
//       if (hasPermission) {
//         getCallLogs();
//       }
//     };
//     checkPermissionsAndGetLogs();
//   }, []);

//   return (
//     <View>
//       <Text>Recent Call Logs:</Text>
//       {calls.length > 0 ? (
//         calls.map((call, index) => (
//           <View key={index}>
//             <Text>Number: {call.phoneNumber}</Text>
//             <Text>Date: {new Date(call.timestamp).toString()}</Text>
//             <Text>Type: {call.type}</Text>
//             <Text>Duration: {call.duration} seconds</Text>
//             <Text>------------------------------------</Text>
//           </View>
//         ))
//       ) : (
//         <Text>No call logs found</Text>
//       )}
//     </View>
//   );
// };

// export default App;
