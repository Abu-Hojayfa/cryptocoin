import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { SIZES, COLORS, FONTS } from "../../../constants";

const NoticeArea = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Investing Safety</Text>
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.body4,
          marginTop: SIZES.base,
          lineHeight: 18,
        }}
      >
        It's a very difficult to time an investment, especially when the market
        value is volatile. Learn how to use dollar cost averaging to your
        advantages.
      </Text>

      <TouchableOpacity
        style={{ marginTop: SIZES.base }}
        onPress={() => Linking.openURL("https://cutt.ly/AQ84ZBu")}
      >
        <Text
          style={{
            color: COLORS.green,
            ...FONTS.h3,
            textDecorationLine: "underline",
          }}
        >
          Learn More
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding * 0.8,
    marginHorizontal: SIZES.padding,
    padding: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.secondary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.35,
    elevation: 8,
  },
});

export default NoticeArea;
