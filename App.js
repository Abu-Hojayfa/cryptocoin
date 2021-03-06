import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./navigation/BottomNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CryptoDetail from './Components/CryptoDetail/CryptoDetail';
import Transaction from './Components/Transaction/Transaction';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeScreen">{() => <BottomNav />}</Stack.Screen>
        <Stack.Screen name="CryptoDetail" component= {CryptoDetail} />
        <Stack.Screen name="Transaction" component= {Transaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
