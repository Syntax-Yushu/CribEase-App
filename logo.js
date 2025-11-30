import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Logo({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home"); // auto-redirect
    }, 2000); // 2 seconds splash duration
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
