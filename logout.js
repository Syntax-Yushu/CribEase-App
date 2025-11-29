import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function Logout({ navigation }) {

  useEffect(() => {
    // Delay 500ms to show the spinner (optional)
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "HomePage" }],
      });
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#a34f9f" />
      <Text style={styles.text}>Logging out...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 15,
    fontSize: 18,
    color: "#a34f9f",
  },
});
