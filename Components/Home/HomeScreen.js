import React from "react";
import { View, ScrollView } from "react-native";
import AlertingBox from "../AlertingBox/AlertingBox";
import TransHis from "../TransjectionHistory/TransHis";
import HeaderTop from "./HeaderTop/HeaderTop";
import NoticeArea from "./NoticeArea/NoticeArea";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        <HeaderTop />
        <AlertingBox />
        <NoticeArea />
        <TransHis />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
