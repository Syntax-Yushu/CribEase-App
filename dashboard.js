import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

export default function Dashboard({ navigation }) {   
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [soundLevel, setSoundLevel] = useState("Quiet");

  const [fallStatus, setFallStatus] = useState("Loading...");
  const [fallCount, setFallCount] = useState(0);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const sensorRef = ref(db, "sensor");

    onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTemp(Number(data.temperature) || 0);
        setHumidity(Number(data.humidity) || 0);
        setSoundLevel(String(data.sound) || "Quiet");

        setFallStatus(String(data.fallStatus) || "Present");
        setFallCount(Number(data.fallCount) || 0);

       
        setCards([
          {
            id: "1",
            icon: "🌡",
            title: "Baby Temperature",
            status: "Status:",
            value: `${data.temperature || 0}°C`,
            onPress: () => navigation.navigate("BabyTemp"),
          },
          {
            id: "2",
            icon: "⚠️",
            title: "Fall Detection",
            status: "Status:",
            value: data.fallStatus?.toLowerCase() === "present" ? "Present" : "Absent",
          },
          {
            id: "3",
            icon: "🔊",
            title: "Sound Level",
            status: "Status:",
            value: data.sound || "Quiet",
          },
          {
            id: "4",
            icon: "📉",
            title: "Number of Falls",
            status: "Status:",
            value: data.fallCount || 0,
          },
          {
            id: "5",
            icon: "📉", 
            title: "Sleeping Patterns",
            status: "Status:",
            value: data.fallCount || 0,
          },
        ]);
      }
    });
  }, []);

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.cardRow}
      onPress={item.onPress ? item.onPress : null}
    >
      <Text style={styles.cardIcon}>{item.icon}</Text>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardStatus}>{item.status}</Text>
        <Text
          style={[
            styles.value,
            item.title === "Fall Detection" && item.value === "Absent"
              ? styles.fallText
              : item.title === "Fall Detection" && item.value === "Present"
              ? styles.safeText
              : null,
          ]}
        >
          {item.value}
        </Text>
      </View>
    </TouchableOpacity>
    
  );

  return (
    <View style={styles.mobileWrapper}>
      <View style={styles.container}>
        <Text style={styles.header}>Sensors Dashboard</Text>
        <FlatList
          data={cards}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardIcon: {
    fontSize: 40,
    marginRight: 15,
    color: "#a34f9f",
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#a34f9f",
  },
  cardStatus: {
    fontSize: 18,
  },
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
    padding: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
    flex: 1,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#a34f9f",
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  safeText: { color: "green" },
  fallText: { color: "red" },
});
