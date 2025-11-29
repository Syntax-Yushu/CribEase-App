import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { LineChart } from "react-native-chart-kit";

export default function BabyTemp() {
  const navigation = useNavigation();
  const [tempHistory, setTempHistory] = useState([]);
  const [currentTemp, setCurrentTemp] = useState(0);

  useEffect(() => {
    const sensorRef = ref(db, "sensor");
    onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const temp = Number(data.temperature) || 0;
        setCurrentTemp(temp);

        setTempHistory((prev) => {
          const newHistory = [...prev, temp];
          if (newHistory.length > 20) newHistory.shift();
          return newHistory;
        });
      }
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        {/* ✅ BACK BUTTON */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Text style={styles.header}>🌡 Baby Temperature History</Text>

        <LineChart
          data={{
            labels: tempHistory.map((_, i) => i + 1),
            datasets: [{ data: tempHistory }],
          }}
          width={300}
          height={500}
          yAxisSuffix="°C"
          chartConfig={{
            backgroundGradientFrom: "#f2f2f2",
            backgroundGradientTo: "#f2f2f2",
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(163, 79, 159, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
          }}
          style={{
            marginVertical: 10,
            borderRadius: 16,
          }}
        />

        <View style={styles.currentContainer}>
          <Text style={styles.label}>Current Temperature:</Text>
          <Text style={styles.current}>{currentTemp}°C</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#ddd",
  },

  container: {
    width: 360,
    backgroundColor: "#f2f2f2",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
    flex: 1,
  },

  backButton: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  backText: {
    fontSize: 18,
    color: "#a34f9f",
    fontWeight: "bold",
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#a34f9f",
    marginBottom: 10,
    textAlign: "center",
  },

  currentContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  label: { fontSize: 16, color: "#666" },
  current: { fontSize: 22, fontWeight: "bold", color: "#333" },
});
