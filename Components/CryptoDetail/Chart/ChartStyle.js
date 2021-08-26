import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding * 0.8,
    marginHorizontal: SIZES.radius,
    alignItems: "center",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.35,
    elevation: 8,
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
