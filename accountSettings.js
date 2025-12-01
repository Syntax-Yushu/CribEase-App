import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // make sure you have expo/vector-icons installed

export default function AccountSettings({ navigation }) {
  return (
    <View style={styles.mobileWrapper}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-undo-outline" size={24} color="#a34f9f" />
          <Text style={styles.backText}></Text>
        </TouchableOpacity>

        <Text style={styles.title}>Account Settings</Text>

        {/* Add more account settings fields here */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mobileWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    width: 360, // same as HomePage
    maxWidth: "100%",
    height: 710, // same as HomePage
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-start", // start from top to fit back button
    shadowColor: "#000",
    
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 5,
  },
  title: {
    fontFamily: "IrishGrover-Regular",
    fontSize: 40,
    color: "#a34f9f",
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});
