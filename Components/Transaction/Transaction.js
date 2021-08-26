import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { FONTS, SHADOW } from "../../constants/theme";
import CurrencyLabel from "../CurrencyLabel/CurrencyLabel";
import DefaultTextBTn from "../DefaultTextBtn/DefaultTextBTn";
import HeaderBar from "../HeaderBar/HeaderBar";
import TransHis from "../TransjectionHistory/TransHis";

const Transaction = ({ route }) => {
  const { image, currency, code, wallet, transactionHistory } = route.params.selectedData;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar right={false} />

      <ScrollView>
        <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
          <View style={styles.topContainer}>
            <CurrencyLabel icon={image} currency={currency} code={code} />

            <View style={styles.valuePart}>
              <Text style={{ ...FONTS.h2 }}>
                {wallet.crypto} {code}
              </Text>
              <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                ${wallet.value}
              </Text>
            </View>

            <DefaultTextBTn label="Trade" onPress={() => Alert.alert(
              `Trading ${currency}`,
              `Are you sure to trade ${currency}?`,
            )} />
          </View>
          <TransHis history={transactionHistory} />
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
  topContainer: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    ...SHADOW,
  },
  valuePart: {
    marginTop: SIZES.padding,
    marginBottom: SIZES.padding * 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Transaction;
