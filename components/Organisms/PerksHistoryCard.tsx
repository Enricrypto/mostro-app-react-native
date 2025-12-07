import { Badge } from "@/components/atoms/Badge"
import { LockSimple, LockSimpleOpen } from "phosphor-react-native"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface PerksHistoryCardProps {
  title: string
  description: string
  rewards: string
  locked: boolean
  progress?: number // from 0 to 100
  onPress?: () => void
}

export const PerksHistoryCard: React.FC<PerksHistoryCardProps> = ({
  title,
  description,
  rewards,
  locked,
  progress = 0,
  onPress
}) => {
  const containerStyle = [
    styles.container,
    locked ? styles.lockedContainer : styles.unlockedContainer
  ]

  return (
    <TouchableOpacity onPress={onPress} disabled={locked} style={containerStyle}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.milestone}>{title}</Text>
          {locked ? (
            <LockSimple color='#8A8A8A' size={24} />
          ) : (
            <LockSimpleOpen color='#fff' size={24} />
          )}
        </View>
        <Text style={styles.description}>{description}</Text>
        <Badge variant='neutral' style={styles.badge}>
          {rewards}
        </Badge>
      </View>
      {locked && (
        <View style={styles.progressContainer}>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.progressText}>{progress}% Complete</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 20,
    width: "100%",
    borderColor: "#6654D3",
    borderWidth: 2,
    backgroundColor: "#121B2B"
  
  },
  unlockedContainer: {
    backgroundColor: "#1C1C3A",
    borderBottomWidth: 3,
    borderBottomColor: "#6654D3"
  },
  lockedContainer: {
    backgroundColor: "#121B2B",
    opacity: 0.7
  },
  content: {
    // flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8
  },
  milestone: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold"
  },
  description: {
    color: "#B3B3B3",
    fontSize: 16,
    marginBottom: 16
  },
  badge: {
    alignSelf: "flex-start"
  },
  progressContainer: {
    marginTop: 16
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: "#333",
    borderRadius: 4,
    overflow: "hidden"
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#6654D3"
  },
  progressText: {
    color: "#B3B3B3",
    fontSize: 12,
    marginTop: 4,
    alignSelf: "flex-end"
  }
})
