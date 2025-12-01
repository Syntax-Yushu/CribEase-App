import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Logo({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("HomePage"); // redirect after splash
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
  source={require("./assets/logo.png")}
  style={styles.logo}
  resizeMode="contain"
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
