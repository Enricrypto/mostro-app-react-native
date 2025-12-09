import { StyleSheet, View } from "react-native"

interface ProgressBarProps {
  progress: number // 0 to 1
  color: string
  backgroundColor: string
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color,
  backgroundColor
}) => {
  return (
    <View style={[styles.progressBarContainer, { backgroundColor }]}>
      <View
        style={[
          styles.progressBar,
          { width: `${progress * 100}%`, backgroundColor: color }
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 12,
    borderRadius: 6,
    overflow: "hidden"
  },
  progressBar: {
    height: "100%",
    borderRadius: 6
  }
})
