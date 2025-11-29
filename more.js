import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { auth } from "./firebase";
export default function More({ navigation }) {

const userEmail = auth.currentUser?.email || "User";
const initial = userEmail.charAt(0).toUpperCase();
  return (
    <View style={styles.container}>
      <View style={styles.profileCircle}>
        <Text style={styles.profileInitial}>{initial}</Text>
      </View>

      <Text style={styles.profileEmail}>{userEmail}</Text>

      <Text style={styles.menuItem}>Account Settings</Text>
      <Text style={styles.menuItem}>Device Settings</Text>
      <Text style={styles.menuItem}>Support / Help</Text>
      <Text style={styles.menuItem}>About</Text>
      <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("HomePage")}
                >
                  <Text style={[styles.menuItem, styles.logout]}>Logout</Text>
                </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20, 
    alignItems: "center"
   },
  menuItem: { 
    fontSize: 18, 
    marginVertical: 15, 
    color: "#333" 
  },
  logout: { 
    color: "red", 
    fontWeight: "bold" 
  },
    profileCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#a34f9f",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  profileInitial: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 16,
    color: "#555",
    marginBottom: 25,
  },

});
