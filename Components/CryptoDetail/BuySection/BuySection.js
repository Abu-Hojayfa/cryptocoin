import React from "react";
import { Image, Text, View } from "react-native";
import { COLORS, icons, SIZES } from "../../../constants";
import { FONTS, SHADOW } from "../../../constants/theme";
import CurrencyLabel from "../../CurrencyLabel/CurrencyLabel";
import DefaultTextBTn from "../../DefaultTextBtn/DefaultTextBTn";
import { useNavigation } from '@react-navigation/native';

const BuySection = ({ data }) => {
  const { image, currency, code,  wallet } = data;
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: SIZES.padding * 0.8,
        marginHorizontal: SIZES.radius,
        padding: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...SHADOW,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: SIZES.radius,
          marginTop: SIZES.radius * 0.4,
        }}
      >
        {/* currency */}
        <View style={{ flex: 1 }}>
          <CurrencyLabel
            icon={image}
            currency={`${currency} Wallet`}
            code={code}
          />
        </View>

        {/* amount */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginRight: SIZES.base }}>
            <Text style={{ ...FONTS.h3 }}>${wallet.value}</Text>
            <Text
              style={{ ...FONTS.body4, textAlign: "right", color: COLORS.gray }}
            >
              {wallet.crypto} {code}
            </Text>
          </View>
          <Image 
            source={icons.right_arrow}
            resizeMode="cover"
            style={{ 
              width: 20,
              height: 20,
              tintColor: COLORS.gray
            }}
          />
        </View>
      </View>

      <DefaultTextBTn 
        label="Buy"
        onPress={()=> navigation.navigate("Transaction" , {selectedData: data})}
      />
    </View>
  );
};

export default BuySection;
