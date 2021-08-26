import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";
import { SHADOW } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding * 0.8,
    marginHorizontal: SIZES.radius,
    alignItems: "center",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    ...SHADOW
  },
  headerPart: {
    flexDirection: "row",
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  amountHead: {
    ...FONTS.h3
  },
  changesHead: {
    ...FONTS.body3
  },
  timeOfChart:{
    width : "100%",
    paddingHorizontal: SIZES.padding,
    flexDirection: "row",
    justifyContent: "space-between"
  }

  
});
