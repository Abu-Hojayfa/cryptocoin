import React from "react";
import { Text, View } from "react-native";
import { COLORS, FONTS, SHADOW, SIZES } from "../../../constants/theme";

const Description = ({ data }) => {
  const { currency, description } = data;
  return (
    <View
      style={{
        ...SHADOW,
        marginTop: SIZES.padding * 0.8,
        marginHorizontal: SIZES.radius,
        padding: SIZES.padding * 0.7,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
      }}
    >
      <Text style={{...FONTS.h3}}>About {currency}</Text>
      <Text style={{...FONTS.body3, color: COLORS.gray, marginTop: SIZES.base}}>{description}</Text>
    </View>
  );
};

export default Description;
