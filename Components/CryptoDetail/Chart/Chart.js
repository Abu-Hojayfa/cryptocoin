import React, { useState } from "react";
import { Animated, Text, View } from "react-native";
import CurrencyLabel from "../../CurrencyLabel/CurrencyLabel";
import { styles } from "./ChartStyle";
import VictoryTheme from "./VictoryTheme";
import {
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryAxis,
} from "victory-native";
import { COLORS, SIZES } from "../../../constants";

const Chart = ({ data }) => {
  const {
    image,
    currency,
    code,
    amount,
    changes,
    type,
    chartData,
    chartOptions,
  } = data;
  const scrollX = new Animated.Value(0);
  const numberOfCharts = [1, 2, 3];

  const [chartOption, setChartOption] = useState(chartOptions);
  const [selectedOption, setSelectedOption] = useState(chartOption[0]);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headerPart}>
        <View style={{ flex: 1 }}>
          <CurrencyLabel icon={image} currency={currency} code={code} />
        </View>
        <View>
          <Text style={styles.amountHead}>${amount}</Text>
          <Text
            style={{
              ...styles.changesHead,
              color: type == "I" ? "green" : "red",
            }}
          >
            {changes}
          </Text>
        </View>
      </View>

      {/* Chart */}
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        snapToInterval={SIZES.width - 30}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {numberOfCharts.map((item, index) => (
          <View
            key={`chart-${index}`}
            style={{ marginLeft: index == 0 ? SIZES.base : 0 }}
          >
            <View style={{ marginTop: -25 }}>
              <VictoryChart
                theme={VictoryTheme}
                height={220}
                width={SIZES.width - 30}
              >
                <VictoryLine
                  style={{
                    data: { stroke: COLORS.secondary },
                    parent: { border: " 1px solid #ccc" },
                  }}
                  data={chartData}
                  categories={{
                    x: ["15 min", "30 min", "45 min", "60 min"],
                    y: ["15", "30", "45"],
                  }}
                />

                <VictoryScatter
                  data={chartData}
                  size={7}
                  style={{
                    data: { fill: COLORS.secondary },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  style={{
                    grid: { stroke: "grey" },
                    axis: { stroke: "transparent" },
                  }}
                />
                <VictoryAxis style={{ grid: { stroke: "transparent" } }} />
              </VictoryChart>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default Chart;
