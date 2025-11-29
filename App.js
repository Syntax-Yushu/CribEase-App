import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./homePage";
import Login from "./login";
import Signup from "./signup";
import MainTabs from "./mainTabs"; 
import BabyTemp from "./babyTemp";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={MainTabs} />
        <Stack.Screen name="BabyTemp" component={BabyTemp}/>
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
