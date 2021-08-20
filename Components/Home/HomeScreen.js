import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import { dummyData, COLORS, FONTS, images, icons, SIZES } from "../../constants";
import HeaderTop from "./HeaderTop/HeaderTop";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={{flex:1, paddingBottom: 130}}>
        <HeaderTop />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
