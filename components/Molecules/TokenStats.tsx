import {
  ChartLineUp,
  Coins,
  CurrencyDollar,
  Users
} from "phosphor-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { StatsOverview } from "../atoms/StatsOverview";

const statsData = [
  {
    title: 'Total Price',
    mainStat: '$12.34',
    secondaryStat: '+12% (24h)',
    icon: <CurrencyDollar weight='regular' />
  },
  {
    title: 'Holders',
    mainStat: '1.2K',
    secondaryStat: '+12 this week',
    icon: <Users weight='regular' />
  },
  {
    title: 'Market Cap',
    mainStat: '$155,000',
    secondaryStat: '+12% (7d)',
    icon: <ChartLineUp weight='regular' />
  },
  {
    title: 'Total Supply',
    mainStat: '1B',
    secondaryStat: '440K circulating',
    icon: <Coins weight='regular' />
  }
];

export const TokenStats = () => {
  return (
    <View style={styles.container}>
      {statsData.map((stat, index) => (
        <View key={index} style={styles.statItem}>
          <StatsOverview {...stat} />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    rowGap: 12,
  },
  statItem: {
    width: '48%', // Roughly 50% to fit two in a row with some gap
  }
})
