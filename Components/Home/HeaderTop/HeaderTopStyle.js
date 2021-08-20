import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  topHead: {
    width: "100%",
    height: 280,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
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