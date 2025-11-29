import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; 

import Dashboard from "./dashboard";
import History from "./history";
import Notifications from "./notifications";
import More from "./more";


const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <View style={styles.mobileWrapper}>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: "#a349f9",
            tabBarInactiveTintColor: "#353333ff",
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "Dashboard") iconName = "home";
              else if (route.name === "History") iconName = "stats-chart";
              else if (route.name === "Notifications") iconName = "notifications";
              else if (route.name === "More") iconName = "menu";
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 60,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            },
          })}>
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="History" component={History} />
          <Tab.Screen name="Notifications" component={Notifications} />
          <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
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
    width: 360,
    height: 640,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    overflow: "hidden",
    flex: 1, 
  },
});
