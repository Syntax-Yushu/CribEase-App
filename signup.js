import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const signup = () => {
    setErrorMsg("");
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Account created successfully! Please log in.");
        navigation.navigate("Login"); // Go back to Login page
      })
      .catch(err => setErrorMsg(err.message));
  };

  return (
    <View style={styles.mobileWrapper}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />

        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          secureTextEntry
        />

        {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={signup}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    width: 360,                 
    maxWidth: "100%",
    height: 710,                
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.25)", 
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "#a34f9f",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "white",
  },
  button: {
    width: "80%",
    paddingVertical: 12,
    marginVertical: 15,
    borderRadius: 20,
    backgroundColor: "#a34f9f",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  linksContainer: {
    alignItems: "center",
  },
  link: {
    color: "#a34f9f",
    marginTop: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
    fontWeight: "bold",
  },
});
