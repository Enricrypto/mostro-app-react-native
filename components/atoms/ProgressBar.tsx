import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThumbsUp, ThumbsDown } from "phosphor-react-native";

interface ProgressBarProps {
  variant: 'yes' | 'no';
  value: number;
  max: number;
  votes: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ variant, value, max, votes }) => {
  const percentage = (value / max) * 100;
  const color = variant === 'yes' ? '#42EE5C' : '#FD6363';
  const backgroundColor = variant === 'yes' ? 'rgba(66, 238, 92, 0.3)' : 'rgba(253, 99, 99, 0.3)';

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.labelContainer}>
          {variant === 'yes' ? (
            <ThumbsUp size={24} color={color} weight="bold" />
          ) : (
            <ThumbsDown size={24} color={color} weight="bold" />
          )}
          <Text style={[styles.label, { color }]}>{variant === 'yes' ? 'Yes' : 'No'}</Text>
        </View>
        <Text style={[styles.percentage, { color }]}>{`${Math.round(percentage)}%`}</Text>
      </View>
      <View style={[styles.progressBarContainer, { backgroundColor }]}>
        <View style={[styles.progressBar, { width: `${percentage}%`, backgroundColor: color }]} />
      </View>
      <Text style={styles.votes}>{`${votes} votes`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  percentage: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    height: 12,
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 6,
  },
  votes: {
    fontSize: 14,
    color: '#8A8A8A',
    marginTop: 4,
  },
});
