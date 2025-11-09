import { ProgressBar } from "@/components/atoms/ProgressBar"
import { ThumbsDownIcon, ThumbsUpIcon } from "phosphor-react-native"
import { StyleSheet, Text, View } from "react-native"

interface VotingProgressProps {
  variant: "yes" | "no"
  value: number
  max: number
  votes: number
}

export const VotingProgress: React.FC<VotingProgressProps> = ({
  variant,
  value,
  max,
  votes
}) => {
  const percentage = max > 0 ? (value / max) * 100 : 0
  const progress = max > 0 ? value / max : 0

  const color = variant === "yes" ? "#42EE5C" : "#FD6363"
  const backgroundColor =
    variant === "yes" ? "rgba(66, 238, 92, 0.3)" : "rgba(253, 99, 99, 0.3)"

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.labelContainer}>
          {variant === "yes" ? (
            <ThumbsUpIcon size={24} color={color} weight='bold' />
          ) : (
            <ThumbsDownIcon size={24} color={color} weight='bold' />
          )}
          <Text style={[styles.label, { color }]}>
            {variant === "yes" ? "Yes" : "No"}
          </Text>
        </View>
        <Text style={[styles.percentage, { color }]}>{`${Math.round(
          percentage
        )}%`}</Text>
      </View>
      <ProgressBar
        progress={progress}
        color={color}
        backgroundColor={backgroundColor}
      />
      <Text style={styles.votes}>{`${votes} votes`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8
  },
  percentage: {
    fontSize: 18,
    fontWeight: "bold"
  },
  votes: {
    fontSize: 14,
    color: "#8A8A8A",
    marginTop: 4
  }
})
