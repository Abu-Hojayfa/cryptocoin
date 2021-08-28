import { Platform, StatusBar, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: SIZES.padding
  },
  textContainer: {
    position: "absolute",
    top: "43%",
    left: "38%",
  },
  textMain: {
    ...FONTS.h1,
    color: COLORS.white,
    textAlign: "center"
  },
  textSecondary: {
    color: COLORS.white,
    ...FONTS.body3,
    paddingTop: SIZES.radius,
    paddingLeft: SIZES.radius,
  }
});