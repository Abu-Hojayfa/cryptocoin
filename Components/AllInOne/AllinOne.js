import React from "react";
import { Text, View } from "react-native";
import { styles } from "./AllinOneStyle";

const Settings = ({ route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textMain}>{route.name}</Text>
        <Text style={styles.textSecondary}>Coming Soon ❤!</Text>
      </View>
    </View>
  );
};

export default Settings;
