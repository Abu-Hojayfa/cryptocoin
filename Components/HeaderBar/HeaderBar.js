import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../../constants";

const HeaderBar = ({ right }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back_arrow}
            style={styles.backBtnImg}
            resizeMode="contain"
          />
          <Text style={{ marginLeft: SIZES.radius, ...FONTS.h2 }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>

      {right && (
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={icons.star}
              style={styles.rightBtnImg}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    flexDirection: "row",
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  backBtnImg: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray,
  },
  rightBtnImg: {
    width: 30,
    height: 30,
  },
});

export default HeaderBar;
