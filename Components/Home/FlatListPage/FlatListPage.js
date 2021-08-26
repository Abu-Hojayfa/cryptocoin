import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { dummyData, SIZES } from "../../../constants";
import { styles } from "./FlatListPageStyle";
import { useNavigation } from "@react-navigation/native";

const FlatListPage = () => {
  const navigation = useNavigation();
  const [trending, setTrending] = useState(dummyData.trendingCurrencies);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={{
        marginLeft: index == 0 ? SIZES.padding : 0,
        ...styles.touchAbleComp,
      }}
      onPress={() => navigation.navigate("CryptoDetail", { currency: item })}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={item.image}
            resizeMode="cover"
            style={styles.iconImage}
          />
        </View>
        <View style={styles.currencyValueNdName}>
          <Text style={styles.currencyValue}>{item.currency}</Text>
          <Text style={styles.currencyCode}>{item.code}</Text>
        </View>
      </View>

      <View style={{ marginTop: 8, ...styles.currencyValueNdName }}>
        <Text style={{ marginLeft: 25, ...styles.currencyValue }}>
          ${item.amount}
        </Text>
        <Text
          style={{
            color: item.type == "I" ? "green" : "red",
            ...styles.currencyChanges,
          }}
        >
          {item.changes}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{ position: "absolute", marginTop: "50%" }}>
      <Text style={styles.topText}>Trending</Text>
      <ScrollView>
        <FlatList
          contentContainerStyle={styles.flatPAge}
          data={trending}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default FlatListPage;
