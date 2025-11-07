import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface StatsOverviewProps {
  title: string;
  mainStat: string | number;
  secondaryStat: string;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ title, mainStat, secondaryStat }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.statsRow}>
        <Text style={styles.mainStat}>{mainStat}</Text>
        <Text style={styles.secondaryStat}>{secondaryStat}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A111F',
    borderRadius: 16,
    padding: 24,
    width: '100%',
  },
  title: {
    color: '#B3B3B3',
    fontSize: 16,
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  mainStat: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginRight: 8,
  },
  secondaryStat: {
    color: '#DCFD63',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
