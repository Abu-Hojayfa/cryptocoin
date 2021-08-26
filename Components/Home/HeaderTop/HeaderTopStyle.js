import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";
import { SHADOW } from "../../../constants/theme";

export const styles = StyleSheet.create({
  topHead: {
    width: "100%",
    height: 320,
    ...SHADOW
  },
  bGTop: {
    flex: 1,
    alignItems: "center",
  },
  notificationBar: {
    marginTop: SIZES.padding * 2,
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: SIZES.padding,
  },
  notifyBtn: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});