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
import { COLORS, FONTS, SIZES } from "../../../constants";
import { chartOptions } from "../../../constants/dummy";
import DefaultTextBTn from "../../DefaultTextBtn/DefaultTextBTn";

const Chart = ({ data }) => {
  const { image, currency, code, amount, changes, type, chartData } = data;
  const scrollX = new Animated.Value(0);
  const numberOfCharts = [1, 2, 3];

  const [chartOption, setChartOption] = useState(chartOptions);
  const [selectedOption, setSelectedOption] = useState(chartOption[0]);

  const [mainData, setMainData] = useState(chartData);

  const dotPosition = Animated.divide(scrollX, SIZES.width);

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
                  data={mainData}
                  categories={{
                    x: ["15 min", "30 min", "45 min", "60 min"],
                    y: ["15", "30", "45"],
                  }}
                />

                <VictoryScatter
                  data={mainData}
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

      {/* options */}
      <View style={styles.timeOfChart}>
        {chartOption.map((timeStamp) => (
          <DefaultTextBTn
            key={timeStamp.id}
            label={timeStamp.label}
            customTextContainerStyle={{
              height: 30,
              width: 60,
              borderRadius: SIZES.radius,
              backgroundColor:
                selectedOption.id === timeStamp.id
                  ? COLORS.primary
                  : COLORS.lightGray,
            }}
            customLabelStyle={{
              color:
                selectedOption.id === timeStamp.id ? COLORS.white : COLORS.gray,
              ...FONTS.body5,
            }}
            onPress={() => setSelectedOption(timeStamp)}
          />
        ))}
      </View>

      {/* dots */}
      <View style={{ height: 30, marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {chartOption.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: "clamp",
            });

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
              extrapolate: "clamp",
            });

            return (
              <Animated.View 
                key={index}
                opacity={opacity}
                style={{ 
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor
                }}
              />
            )
          })}
        </View>
      </View>
    </View>
  );
};

export default Chart;
