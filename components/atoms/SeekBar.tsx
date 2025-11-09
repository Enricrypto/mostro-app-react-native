import Slider from "@react-native-community/slider"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

interface SeekBarProps {
  duration: number
  value: number
  onValueChange: (value: number) => void
}

// This function should go to utils directory
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

export const SeekBar: React.FC<SeekBarProps> = ({
  duration,
  value,
  onValueChange
}) => {
  return (
    <View style={styles.bottomRow}>
      <Text style={styles.timeText}>{formatTime(value)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor='#6654D3'
        maximumTrackTintColor='rgba(0, 0, 0, 0.1)'
        thumbTintColor='#6654D3'
      />
      <Text style={styles.timeText}>{formatTime(duration)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  slider: {
    flex: 1,
    height: 20,
    marginHorizontal: 10
  },
  timeText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500"
  }
})
