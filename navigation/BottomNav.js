import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Components/Home/HomeScreen";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS } from "../constants";
import { SHADOW } from "../constants/theme";
import AllinOne from "../Components/AllInOne/AllinOne";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.fullBtmNav,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../Assets/icons/home.png")}
                  resizeMode="contain"
                  style={{
                    ...styles.iconStyle,
                    tintColor: focused ? COLORS.primary : COLORS.black,
                  }}
                />
                <Text
                  style={{
                    color: focused ? COLORS.primary : COLORS.black,
                    ...FONTS.body5,
                  }}
                >
                  HOME
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Portfolio"
          component={AllinOne}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../Assets/icons/pie_chart.png")}
                  resizeMode="contain"
                  style={{
                    ...styles.iconStyle,
                    tintColor: focused ? COLORS.primary : COLORS.black,
                  }}
                />
                <Text
                  style={{
                    color: focused ? COLORS.primary : COLORS.black,
                    ...FONTS.body5,
                  }}
                >
                  PORTFOLIO
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Transaction"
          component={AllinOne}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity style={styles.linearCustomBtn}>
                <LinearGradient
                  colors={[COLORS.primary, COLORS.secondary]}
                  style={styles.linearGradient}
                >
                  <Image
                    source={require("../Assets/icons/transaction.png")}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? COLORS.lightGray1 : COLORS.white,
                    }}
                  />
                </LinearGradient>
              </TouchableOpacity>
            ),
          }}
        />

        <Tab.Screen
          name="Prices"
          component={AllinOne}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../Assets/icons/line_graph.png")}
                  resizeMode="contain"
                  style={{
                    ...styles.iconStyle,
                    tintColor: focused ? COLORS.primary : COLORS.black,
                  }}
                />
                <Text
                  style={{
                    color: focused ? COLORS.primary : COLORS.black,
                    ...FONTS.body5,
                  }}
                >
                  PRICES
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={AllinOne}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../Assets/icons/settings.png")}
                  resizeMode="contain"
                  style={{
                    ...styles.iconStyle,
                    tintColor: focused ? COLORS.primary : COLORS.black,
                  }}
                />
                <Text
                  style={{
                    color: focused ? COLORS.primary : COLORS.black,
                    ...FONTS.body5,
                  }}
                >
                  SETTINGS
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    
  );
};

const styles = StyleSheet.create({
  fullBtmNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: COLORS.white,
    borderTopColor: "transparent",
    height: 70,
  },
  iconStyle: {
    width: 26,
    height: 26,
  },
  linearGradient: {
    padding: 15,
    borderRadius: 50,
    ...SHADOW
  },
  linearCustomBtn: {
    alignItems: "center",
    justifyContent: "center",
    top: -30,
  },
});

export default BottomNav;
