import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import AlertingBox from "../AlertingBox/AlertingBox";
import HeaderBar from "../HeaderBar/HeaderBar";
import BuySection from "./BuySection/BuySection";
import Chart from "./Chart/Chart";
import Description from "./Description/Description";

const CryptoDetail = ({ route }) => {
  const data = route.params.currency;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar right={true} />

      <ScrollView>
        <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
          <Chart data={data} />
          <BuySection data={data} />
          <Description data={data} />
          <AlertingBox
            customContainerStyle={{
              marginTop: SIZES.padding * 0.8,
              marginHorizontal: SIZES.radius,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default CryptoDetail;
