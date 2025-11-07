import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Avatar } from "../atoms/Avatar"
import { Badge } from "../atoms/Badge"

interface TrendingTokenCardProps {
  token: {
    artistName: string
    tokenName: string
    avatarUrl: string
    price: string
    change: string
  }
  onPress?: () => void
}

export const TrendingTokenCard: React.FC<TrendingTokenCardProps> = ({
  token,
  onPress
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}
    >
      <View style={styles.topRow}>
        <Avatar src={token.avatarUrl} variant='small-square' />
        <View style={styles.infoContainer}>
          <Text style={styles.artistName}>{token.artistName}</Text>
          <Text style={styles.tokenName}>{token.tokenName}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.bottomRow}>
        <Text style={styles.price}>{token.price}</Text>
        <Badge variant='green'>{token.change}</Badge>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0A111F",
    borderRadius: 16,
    padding: 16,
    width: "100%"
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12
  },
  infoContainer: {
    marginLeft: 12
  },
  artistName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  },
  tokenName: {
    color: "#B3B3B3",
    fontSize: 14
  },
  divider: {
    height: 1,
    backgroundColor: "#2D3953",
    marginVertical: 12
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  price: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  }
})
