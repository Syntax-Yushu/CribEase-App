import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDs6eEpYkKzOIbit60mitGDY6qbLMclxvs",
  authDomain: "esp32-connecttest.firebaseapp.com",
  databaseURL: "https://esp32-connecttest-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp32-connecttest",
  storageBucket: "esp32-connecttest.firebasestorage.app",
  messagingSenderId: "950000610308",
  appId: "1:950000610308:web:a39583249e23784128d951"
};


/*
Mao ni ang toggle mode sa firebase
true  = para emulator (offline)
false = pang live Firebase (online)
*/                      
const USE_EMULATOR = false; 

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getDatabase(app);

// --------------------------------------
// CONNECT TO EMULATORS (only if enabled)
// --------------------------------------
if (USE_EMULATOR) {
  console.log("Using Firebase Emulator Mode");

  // Auth Emulator
  connectAuthEmulator(auth, "http://127.0.0.1:9099");

  // Realtime Database Emulator
  connectDatabaseEmulator(db, "127.0.0.1", 9000);
} else {
  console.log("Using LIVE Firebase");
}
