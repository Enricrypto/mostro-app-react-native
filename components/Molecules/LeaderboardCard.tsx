import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { Avatar } from "../atoms/Avatar"

interface LeaderboardCardProps {
  rank: number
  user: {
    name: string
    avatarUrl: string
  }
  onPress?: () => void
}

export const LeaderboardCard: React.FC<LeaderboardCardProps> = ({
  rank,
  user,
  onPress
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}
    >
      <Text style={styles.rank}>#{rank}</Text>
      <Avatar src={user.avatarUrl} variant='small-rounded' />
      <Text style={styles.username}>{user.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0A111F",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#6C5CE7",
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: "100%"
  },
  rank: {
    color: "#B3B3B3",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 16
  },
  username: {
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 12
  }
})
