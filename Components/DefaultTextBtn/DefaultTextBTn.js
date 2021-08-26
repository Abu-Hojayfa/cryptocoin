import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

const DefaultTextBTn = ({
  label,
  customTextContainerStyle,
  customLabelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.green,
        ...customTextContainerStyle,
      }}
      onPress={onPress}
    >
      <Text style={{ ...FONTS.h3, color: COLORS.white, ...customLabelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default DefaultTextBTn;
