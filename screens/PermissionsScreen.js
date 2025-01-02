// import React, { useState } from "react";
// import { View, StyleSheet, Button, Text } from "react-native";
// import PermissionToggle from "../components/PermissionToggle";

// const PermissionsScreen = ({ navigation }) => {
//   const [permissions, setPermissions] = useState({
//     overlay: false,
//     accessibility: false,
//     battery: false,
//   });

//   const handleToggle = (key) => {
//     setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Allow Permissions</Text>
//       <PermissionToggle
//         title="Display Over Other Apps"
//         description="Required for auto-sending WhatsApp messages."
//         enabled={permissions.overlay}
//         onToggle={() => handleToggle("overlay")}
//       />
//       <PermissionToggle
//         title="Accessibility Permission"
//         description="Required for auto-sending messages on WhatsApp."
//         enabled={permissions.accessibility}
//         onToggle={() => handleToggle("accessibility")}
//       />
//       <PermissionToggle
//         title="Unrestricted Battery Access"
//         description="Required to keep the app running in the background."
//         enabled={permissions.battery}
//         onToggle={() => handleToggle("battery")}
//       />
//       <Button
//         title="Proceed"
//         onPress={() => navigation.navigate("Home")}
//         color="#6200EE"
//       />
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
// });

// export default PermissionsScreen;


// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, Button, Text } from "react-native";
// import PermissionToggle from "../components/PermissionToggle";
// import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

// const PermissionsScreen = ({ navigation }) => {
//   const [permissions, setPermissions] = useState({
//     overlay: false,
//     accessibility: false,
//     battery: false,
//   });

//   const handleToggle = (key) => {
//     setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   useEffect(() => {
//     const requestSmsPermission = async () => {
//       const result = await request(PERMISSIONS.ANDROID.READ_SMS);
//       if (result === RESULTS.GRANTED) {
//         console.log('SMS permission granted');
//       } else {
//         console.log('SMS permission denied');
//       }
//     };

//     requestSmsPermission();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Allow Permissions</Text>
//       <PermissionToggle
//         title="Display Over Other Apps"
//         description="Required for auto-sending WhatsApp messages."
//         enabled={permissions.overlay}
//         onToggle={() => handleToggle("overlay")}
//       />
//       <PermissionToggle
//         title="Accessibility Permission"
//         description="Required for auto-sending messages on WhatsApp."
//         enabled={permissions.accessibility}
//         onToggle={() => handleToggle("accessibility")}
//       />
//       <PermissionToggle
//         title="Unrestricted Battery Access"
//         description="Required to keep the app running in the background."
//         enabled={permissions.battery}
//         onToggle={() => handleToggle("battery")}
//       />
//       <Button
//         title="Proceed"
//         onPress={() => navigation.navigate("Home")}
//         color="#6200EE"
//       />
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
// });

// export default PermissionsScreen;



// import React, { useState } from "react";
// import { View, StyleSheet, Button, Text, Alert, Linking } from "react-native";
// import PermissionToggle from "../components/PermissionToggle";
// import { request, PERMISSIONS, RESULTS } from "react-native-permissions";
// import RNAndroidOpenSettings from "react-native-android-open-settings";

// const PermissionsScreen = ({ navigation }) => {
//   const [permissions, setPermissions] = useState({
//     overlay: false,
//     accessibility: false,
//     battery: false,
//   });

//   const handleToggle = async (key) => {
//     const newPermissions = { ...permissions };
//     newPermissions[key] = !permissions[key];
//     setPermissions(newPermissions);

//     if (newPermissions[key]) {
//       switch (key) {
//         case "overlay":
//           // Redirect to Overlay Permission settings
//           RNAndroidOpenSettings.appDetailsSettings();
//           break;

//         case "accessibility":
//           // Redirect to Accessibility settings
//           Linking.openSettings();
//           break;

//         case "battery":
//           // Redirect to Battery Optimization settings
//           RNAndroidOpenSettings.ignoreBatteryOptimizationSettings();
//           break;

//         default:
//           Alert.alert("Error", "Invalid permission type");
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Allow Permissions</Text>

//       <PermissionToggle
//         title="Display Over Other Apps"
//         description="Required for auto-sending WhatsApp messages."
//         enabled={permissions.overlay}
//         onToggle={() => handleToggle("overlay")}
//       />

//       <PermissionToggle
//         title="Accessibility Permission"
//         description="Required for auto-sending messages on WhatsApp."
//         enabled={permissions.accessibility}
//         onToggle={() => handleToggle("accessibility")}
//       />

//       <PermissionToggle
//         title="Unrestricted Battery Access"
//         description="Required to keep the app running in the background."
//         enabled={permissions.battery}
//         onToggle={() => handleToggle("battery")}
//       />

//       <Button
//         title="Proceed"
//         onPress={() => navigation.navigate("Home")}
//         color="#6200EE"
//       />
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
// });

// export default PermissionsScreen;


// import React, { useState } from "react";
// import { View, StyleSheet, Button, Text, Alert, Linking, Platform } from "react-native";
// import PermissionToggle from "../components/PermissionToggle";
// import { check, request, RESULTS, PERMISSIONS } from "react-native-permissions";

// const PermissionsScreen = ({ navigation }) => {
//   const [permissions, setPermissions] = useState({
//     overlay: false,
//     accessibility: false,
//     battery: false,
//   });

//   const handleOverlayPermission = async () => {
//     if (Platform.OS === "android") {
//       const result = await check(PERMISSIONS.ANDROID.SYSTEM_ALERT_WINDOW);
//       if (result === RESULTS.GRANTED) {
//         Alert.alert("Permission already granted", "Overlay permission is enabled.");
//       } else {
//         // Redirect to the overlay settings
//         Alert.alert(
//           "Permission Required",
//           "To use this feature, please allow 'Display over other apps' permission.",
//           [
//             {
//               text: "Cancel",
//               style: "cancel",
//             },
//             {
//               text: "Open Settings",
//               onPress: () => Linking.openSettings(),
//             },
//           ]
//         );
//       }
//     } else {
//       Alert.alert("Unsupported Platform", "Overlay permission is only required on Android.");
//     }
//   };

//   const handleToggle = async (key) => {
//     const newPermissions = { ...permissions };
//     newPermissions[key] = !permissions[key];
//     setPermissions(newPermissions);

//     if (newPermissions[key]) {
//       switch (key) {
//         case "overlay":
//           await handleOverlayPermission();
//           break;

//         case "accessibility":
//           // Redirect to Accessibility settings
//           Linking.openSettings();
//           break;

//         case "battery":
//           // Redirect to Battery Optimization settings
//           Linking.openSettings();
//           break;

//         default:
//           Alert.alert("Error", "Invalid permission type");
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Allow Permissions</Text>

//       <PermissionToggle
//         title="Display Over Other Apps"
//         description="Required for auto-sending WhatsApp messages."
//         enabled={permissions.overlay}
//         onToggle={() => handleToggle("overlay")}
//       />

//       <PermissionToggle
//         title="Accessibility Permission"
//         description="Required for auto-sending messages on WhatsApp."
//         enabled={permissions.accessibility}
//         onToggle={() => handleToggle("accessibility")}
//       />

//       <PermissionToggle
//         title="Unrestricted Battery Access"
//         description="Required to keep the app running in the background."
//         enabled={permissions.battery}
//         onToggle={() => handleToggle("battery")}
//       />

//       <Button
//         title="Proceed"
//         onPress={() => navigation.navigate("Home")}
//         color="#6200EE"
//       />
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
// });

// export default PermissionsScreen;



import React, { useState } from "react";
import { View, StyleSheet, Text, Alert, Linking, Platform, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient"; // For gradient background
import Icon from "react-native-vector-icons/MaterialIcons"; // For modern icons
import { check, RESULTS, PERMISSIONS } from "react-native-permissions";

const PermissionsScreen = ({ navigation }) => {
  const [permissions, setPermissions] = useState({
    overlay: false,
    accessibility: false,
    battery: false,
  });

  const handleOverlayPermission = async () => {
    if (Platform.OS === "android") {
      const result = await check(PERMISSIONS.ANDROID.SYSTEM_ALERT_WINDOW);
      if (result === RESULTS.GRANTED) {
        Alert.alert("Permission already granted", "Overlay permission is enabled.");
      } else {
        // Redirect to the overlay settings
        Alert.alert(
          "Permission Required",
          "To use this feature, please allow 'Display over other apps' permission.",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Open Settings",
              onPress: () => Linking.openSettings(),
            },
          ]
        );
      }
    } else {
      Alert.alert("Unsupported Platform", "Overlay permission is only required on Android.");
    }
  };

  const handleToggle = async (key) => {
    const newPermissions = { ...permissions };
    newPermissions[key] = !permissions[key];
    setPermissions(newPermissions);

    if (newPermissions[key]) {
      switch (key) {
        case "overlay":
          await handleOverlayPermission();
          break;

        case "accessibility":
          // Redirect to Accessibility settings
          Linking.openSettings();
          break;

        case "battery":
          // Redirect to Battery Optimization settings
          Linking.openSettings();
          break;

        default:
          Alert.alert("Error", "Invalid permission type");
      }
    }
  };

  return (
    <LinearGradient colors={["#6200EE", "#3700B3", "#03DAC5"]} style={styles.container}>
      <Icon name="security" size={70} color="#fff" style={styles.icon} />
      <Text style={styles.header}>Allow Permissions</Text>

      <TouchableOpacity
        style={styles.permissionButton}
        onPress={() => handleToggle("overlay")}
      >
        <Icon name="desktop-mac" size={24} color="#fff" style={styles.permissionButtonIcon} />
        <Text style={styles.permissionButtonText}>Display Over Other Apps</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.permissionButton}
        onPress={() => handleToggle("accessibility")}
      >
        <Icon name="accessibility" size={24} color="#fff" style={styles.permissionButtonIcon} />
        <Text style={styles.permissionButtonText}>Accessibility Permission</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.permissionButton}
        onPress={() => handleToggle("battery")}
      >
        <Icon name="battery-full" size={24} color="#fff" style={styles.permissionButtonIcon} />
        <Text style={styles.permissionButtonText}>Unrestricted Battery Access</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.proceedButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.proceedButtonText}>Proceed</Text>
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
  permissionButton: {
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
  permissionButtonIcon: {
    marginRight: 10,
  },
  permissionButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  proceedButton: {
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginVertical: 20,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: "80%",
  },
  proceedButtonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default PermissionsScreen;

