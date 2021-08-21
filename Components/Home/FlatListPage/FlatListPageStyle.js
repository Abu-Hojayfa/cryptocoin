import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  topText: {
    marginLeft: SIZES.padding,
    color: COLORS.white,
    ...FONTS.h2,
  },
  flatPAge: {
    marginTop: SIZES.base,
    
  },
  touchAbleComp: {
    width: 178,
    paddingVertical: SIZES.radius * 1.4,
    paddingHorizontal: SIZES.padding,
    borderRadius: 10,
    marginRight: SIZES.radius,
    backgroundColor: COLORS.white,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 16,
  },
  iconImage: {
    width: 26,
    height: 26,
    marginTop: 5,
  },
  currencyValueNdName: {
    marginLeft: SIZES.base,
  },
  currencyValue: {
    ...FONTS.h3
  },
  currencyCode: {
    color: COLORS.gray,
    ...FONTS.body4
  },
  currencyChanges : {
    marginLeft: 25, 
    ...FONTS.body4
  }
});
