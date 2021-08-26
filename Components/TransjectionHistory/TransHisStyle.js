import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../constants";
import { SHADOW } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding * 0.8,
    marginHorizontal: SIZES.padding,
    padding: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white
  },
  shadow: {
    ...SHADOW
  },
  flatListData: {
    marginTop: SIZES.padding * 0.8,
  },
  flatDataSeparate: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.lightGray
  },
  flatListPerItem : {
    flexDirection : "row",
    alignItems: "center",
    paddingVertical: SIZES.base
  },
  flatListPerItemHistory : {
    flex : 1,
    marginLeft :SIZES.radius
  },
  flatImageLeft: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary
  },
  flatListDate : {
    color: COLORS.gray,
    ...FONTS.body4
  },
  flatImageRight : {
    width: 20,
    height: 20,
    tintColor: COLORS.gray
  }
});
