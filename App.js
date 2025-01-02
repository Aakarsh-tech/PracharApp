// import React, { useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Appbar, Button, Text, Card } from 'react-native-paper';
// import SmsListener from 'react-native-android-sms-listener';
// import { SafeAreaProvider } from 'react-native-safe-area-context'; // Import SafeAreaProvider

// const App = () => {
//   useEffect(() => {
//     const subscribe = SmsListener.addListener((message) => {
//       console.log("Received SMS:", message);
//     });
//     return () => subscribe.remove();
//   }, []);

//   return (
//     <SafeAreaProvider>  {/* Make sure SafeAreaProvider wraps the whole app */}
//       <View style={styles.container}>
//         {/* Header */}
//         <Appbar.Header>
//           <Appbar.Content 
//             title={<Text>SMS Listener</Text>} 
//             subtitle={<Text>Real-time SMS monitoring</Text>} 
//           />
//         </Appbar.Header>

//         {/* Body Content */}
//         <Card style={styles.card}>
//           <Card.Content>
//             <Text style={styles.title}>
//               Welcome to SMS Listener App
//             </Text>
//             <Text style={styles.subtitle}>
//               This app listens to incoming SMS messages and logs them in real time.
//             </Text>
//           </Card.Content>
//         </Card>

//         {/* Button */}
//         <Button
//           mode="contained"
//           onPress={() => console.log('Button Pressed')}
//           style={styles.button}
//         >
//           Start Listening
//         </Button>
//       </View>
//     </SafeAreaProvider>  /* SafeAreaProvider wraps everything */
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   card: {
//     margin: 16,
//     padding: 16,
//     borderRadius: 8,
//     backgroundColor: '#ffffff',
//     elevation: 4,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#555',
//   },
//   button: {
//     margin: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
// });

// export default App;



// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Button, Alert, Text, TextInput } from 'react-native';
// import { Appbar, Card } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SmsListener from 'react-native-android-sms-listener';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // HomeScreen Component
// const HomeScreen = ({ navigation }) => {
//   const [callEvent, setCallEvent] = useState(null);

//   useEffect(() => {
//     const fetchCallEvent = async () => {
//       const callData = await AsyncStorage.getItem('callEvent');
//       if (callData) {
//         setCallEvent(JSON.parse(callData));
//       }
//     };
//     fetchCallEvent();
//   }, []);

//   const handleCallEvent = async () => {
//     const callDetails = {
//       caller: 'John Doe',
//       message: 'Incoming Call: Please pick up.',
//       timestamp: new Date().toLocaleString(),
//     };

//     await AsyncStorage.setItem('callEvent', JSON.stringify(callDetails));
//     setCallEvent(callDetails);
//   };

//   return (
//     <View style={styles.container}>
//       <Appbar.Header>
//         <Appbar.Content title="Home" subtitle="Welcome to the App" />
//       </Appbar.Header>
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

// // CallsScreen Component
// const CallsScreen = ({ navigation }) => {
//   const [callEvent, setCallEvent] = useState(null);

//   useEffect(() => {
//     const fetchCallEvent = async () => {
//       const callData = await AsyncStorage.getItem('callEvent');
//       if (callData) {
//         setCallEvent(JSON.parse(callData));
//       }
//     };

//     fetchCallEvent();
//   }, []);

//   const clearCallEvent = async () => {
//     await AsyncStorage.removeItem('callEvent');
//     setCallEvent(null);
//     Alert.alert('Call Data Cleared', 'The call event data has been cleared.');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Calls Screen</Text>
//       {callEvent ? (
//         <View style={styles.callDetails}>
//           <Text style={styles.callText}>{callEvent.message}</Text>
//           <Text style={styles.callerText}>From: {callEvent.caller}</Text>
//           <Text style={styles.timestamp}>Time: {callEvent.timestamp}</Text>
//         </View>
//       ) : (
//         <Text>No call events recorded.</Text>
//       )}
//       <Button title="Clear Call Data" onPress={clearCallEvent} color="red" />
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

// // MessagesScreen Component
// const MessagesScreen = ({ navigation }) => {
//   useEffect(() => {
//     const subscribe = SmsListener.addListener((message) => {
//       console.log('Received SMS:', message);
//     });
//     return () => subscribe.remove();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Messages Screen</Text>
//       <Text>Listening to incoming SMS...</Text>
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

// // RegisterScreen Component
// const RegisterScreen = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = () => {
//     if (name && email && password) {
//       alert('Registration successful');
//       navigation.navigate('Login');
//     } else {
//       alert('Please fill out all fields');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Register</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <Button title="Register" onPress={handleRegister} />
//       <Button title="Login" onPress={() => navigation.navigate('Login')} />
//     </View>
//   );
// };

// // LoginScreen Component
// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (email === 'admin@example.com' && password === 'password') {
//       navigation.replace('Home');
//     } else {
//       alert('Invalid login credentials');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <Button title="Login" onPress={handleLogin} />
//       <Button title="Register" onPress={() => navigation.navigate('Register')} />
//     </View>
//   );
// };

// // Navigation Setup
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Register" component={RegisterScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Calls" component={CallsScreen} />
//         <Stack.Screen name="Messages" component={MessagesScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
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
//   input: {
//     width: '80%',
//     padding: 10,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderRadius: 5,
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

// export default App;









// import React, { useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Appbar, Button, Text, Card } from 'react-native-paper';
// import SmsListener from 'react-native-android-sms-listener';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // Import Screens
// import HomeScreen from './screens/HomeScreen';
// import PermissionsScreen from './screens/PermissionsScreen';
// import SettingsScreen from './screens/SettingsScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   useEffect(() => {
//     const subscribe = SmsListener.addListener((message) => {
//       console.log("Received SMS:", message);
//     });
//     return () => subscribe.remove();
//   }, []);

//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Permissions" component={PermissionsScreen} />
//           <Stack.Screen name="Settings" component={SettingsScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   card: {
//     margin: 16,
//     padding: 16,
//     borderRadius: 8,
//     backgroundColor: '#ffffff',
//     elevation: 4,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#555',
//   },
//   button: {
//     margin: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
// });

// export default App;



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Adjust the path as needed
import SettingsScreen from './screens/SettingsScreen';
import PermissionsScreen from './screens/PermissionsScreen';
import UserPage from './screens/UserPage';
import AdminPage from './screens/AdminPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Permissions" component={PermissionsScreen} />
        <Stack.Screen name="UserPage" component={UserPage} />
        <Stack.Screen name="AdminPage" component={AdminPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

