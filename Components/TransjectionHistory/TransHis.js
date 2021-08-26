import React, { useEffect, useState } from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { dummyData, FONTS, icons } from "../../constants";
import { styles } from "./TransHisStyle";

const TransHis = ({ history }) => {
  const [transitionHistory, setTransitionHistory] = useState(
    dummyData.transactionHistory
  );
  
  useEffect(() => {
    if (history) {
      setTransitionHistory(history);
    }
  },[history]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.flatListPerItem}>
      <Image source={icons.transaction} style={styles.flatImageLeft} />
      <View style={styles.flatListPerItemHistory}>
        <Text style={{ ...FONTS.h3 }}>{item.description}</Text>
        <Text style={styles.flatListDate}>{item.date}</Text>
      </View>

      <View style={{ ...styles.flatListPerItem, height: "100%" }}>
        <Text
          style={{ color: item.type == "B" ? "green" : "red", ...FONTS.h4 }}
        >
          {item.amount} {item.currency}
        </Text>

        <Image source={icons.right_arrow} style={styles.flatImageRight} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ ...styles.container, ...styles.shadow }}>
      <Text style={{ ...FONTS.h2 }}>Transition History</Text>
      <FlatList
        contentContainerStyle={styles.flatListData}
        scrollEnabled={false}
        data={transitionHistory}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return <View style={styles.flatDataSeparate}></View>;
        }}
      />
    </View>
  );
};

export default TransHis;
