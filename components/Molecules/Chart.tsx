import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

interface ChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
    }[];
  };
  onDataPointClick?: (data: any) => void;
}

export const Chart: React.FC<ChartProps> = ({ data, onDataPointClick }) => {
  const chartConfig = {
    backgroundColor: "#0D1117",
    backgroundGradientFrom: "#0D1117",
    backgroundGradientTo: "#0D1117",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(28, 100, 242)`, // #1C64F2
    labelColor: (opacity = 1) => `rgba(200, 200, 200, ${opacity})`,
    strokeWidth: 3,
    propsForDots: {
      r: "0",
    },
    propsForBackgroundLines: {
      strokeDasharray: "4 4",
      stroke: "rgba(255, 255, 255, 0.15)",
    },
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={screenWidth - 32} // responsive width
        height={(screenWidth - 32) * 0.6} // dynamic height based on width
        chartConfig={chartConfig}
        style={styles.chartStyle}
        withInnerLines={true}
        withOuterLines={false}
        withVerticalLabels={true}
        withHorizontalLabels={true}
        fromZero
        formatYLabel={(y) => `$${Number(y).toLocaleString()}`}
        onDataPointClick={onDataPointClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D1117",
    borderRadius: 12,
    padding: 8,
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  chartStyle: {
    borderRadius: 12,
  },
});
