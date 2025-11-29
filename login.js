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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { CommonActions } from "@react-navigation/native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const login = () => {
    setErrorMsg("");
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Dashboard" }],
          })
        );
      })
      .catch(err => setErrorMsg(err.message));
  };

  return (
    <View style={styles.mobileWrapper}>
      <KeyboardAvoidingView
        style={styles.container}
      >
        <Text style={styles.title}>SIGN IN{"\n"}TO CONTINUE</Text>

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

        {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.link}>Don't have an account? Register here</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Forgot Password clicked")}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  mobileWrapper: {
    flex: 1,
    alignItems: "center",       // center horizontally
    justifyContent: "center",   // center vertically
    backgroundColor: "#ddd",    // outside phone background
    paddingVertical: 20,
  },
  container: {
    width: 360,                 // simulate mobile width
    maxWidth: "100%",
    height: 710,                // simulate mobile height
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
