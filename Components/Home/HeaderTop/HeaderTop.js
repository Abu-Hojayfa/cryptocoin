import React from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import {
  dummyData,
  COLORS,
  FONTS,
  images,
  icons,
  SIZES,
} from "../../../constants";
import { styles } from "./HeaderTopStyle";

const HeaderTop = () => {
  return (
    <View style={styles.topHead}>
      <ImageBackground
        source={images.banner}
        resizeMode="cover"
        style={styles.bGTop}
      >
        <View style={styles.notificationBar}>
          <TouchableOpacity
            style={styles.notifyBtn}
            onPress={() => {
              console.log("okay. u got this");
            }}
          >
            <Image
              source={icons.notification_white}
              resizeMode="contain"
              style={{ flex: 1 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            Your Portfolio Balance
          </Text>
          <Text
            style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h1 }}
          >
            ${dummyData.portfolio.balance}
          </Text>
          <Text style={{ marginTop: 2, color: COLORS.white, ...FONTS.h3 }}>{dummyData.portfolio.changes} Last 24 hours</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeaderTop;
