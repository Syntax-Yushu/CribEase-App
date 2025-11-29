import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function More({ navigation }) {

  return (
    <View style={styles.container}>
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
});
