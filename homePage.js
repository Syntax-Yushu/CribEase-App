import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <View style={styles.mobileWrapper}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Welcome To</Text>
          <Text style={styles.title}>CribEase</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mobileWrapper: {
    flex: 1,
    // height: "100%",
    // weidth: "100%",
    alignItems: "center",       
    justifyContent: "center",  
    backgroundColor: "#ddd",    
    paddingVertical: 20,
  },
  container: {
    width: 360, //pwede e change to 100%   para web view              
    maxWidth: "100%",
    height: 710, //pwede e change to 100%   para web view            
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    borderRadius: 20, 
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
    flex: 1,
  },
  subtitle: {
    fontSize: 18,
    color: "#a34f9f",
    marginTop: 10,
  },
  title: {
    fontFamily: "IrishGrover-Regular",
    fontSize: 40,
    color: "#a34f9f",
    marginVertical: 20,
  },
  button: {
    width: "80%",
    backgroundColor: "#a34f9f",
    paddingVertical: 12,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
