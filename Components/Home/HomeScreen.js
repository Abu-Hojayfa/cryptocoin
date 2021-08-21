import React from "react";
import { View, ScrollView } from "react-native";
import AlertingBox from "../AlertingBox/AlertingBox";

import HeaderTop from "./HeaderTop/HeaderTop";
import NoticeArea from "./NoticeArea/NoticeArea";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        <HeaderTop />
        <AlertingBox />
        <NoticeArea />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
