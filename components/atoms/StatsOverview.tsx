import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface PhosphorIconProps {
  color?: string;
  size?: number;
  weight?: string;
}

interface StatsOverviewProps {
  title: string
  mainStat: string | number
  secondaryStat: string
  icon?: React.ReactElement<PhosphorIconProps>;
  iconColor?: string;
  iconSize?: number;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({
  title,
  mainStat,
  secondaryStat,
  icon,
  iconColor,
  iconSize
}) => {
  const defaultIconColor = '#DCFD63';
  const defaultIconSize = 20;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {icon && React.cloneElement(icon, {
          color: iconColor || icon.props.color || defaultIconColor,
          size: iconSize || icon.props.size || defaultIconSize,
        })}
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.mainStat}>{mainStat}</Text>
        <Text style={styles.secondaryStat}>{secondaryStat}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0A111F",
    borderRadius: 16,
    padding: 24,
    width: "100%"
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  title: {
    color: "#B3B3B3",
    fontSize: 16,
  },
  iconContainer: {
    // No specific styling needed for now, the icon itself will have its size/color
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "baseline",
    flexWrap: "wrap",
  },
  mainStat: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "bold",
    marginRight: 8
  },
  secondaryStat: {
    color: "#DCFD63",
    fontSize: 16,
    flexShrink  : 1,
    fontWeight: "bold"
  }
})