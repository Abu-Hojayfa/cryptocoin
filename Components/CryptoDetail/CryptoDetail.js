import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import AlertingBox from "../AlertingBox/AlertingBox";
import HeaderBar from "../HeaderBar/HeaderBar";
import Chart from "./Chart/Chart";

const CryptoDetail = ({ route }) => {
  const data = route.params.currency;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar right={true} />

      <ScrollView>
        <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
            <Chart data={data} />
          <AlertingBox />
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
