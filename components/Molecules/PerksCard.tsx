import { Badge } from "@/components/atoms/Badge"
import { StyleSheet, Text, View } from "react-native"

interface PerksCardProps {
  title: string
  description: string
  rewards: string
}

export const PerksCard: React.FC<PerksCardProps> = ({
  title,
  description,
  rewards
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Badge variant='neutral' style={styles.rewardsBadge}>
        {rewards}
      </Badge>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121B2B", // Similar to SongCard background
    borderRadius: 16,
    padding: 24,
    width: "70%"
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8
  },
  description: {
    color: "#B3B3B3", // Similar to subtitle color
    fontSize: 16,
    marginBottom: 24
  },
  rewardsBadge: {
    alignSelf: "flex-start", // Align badge to the left
    height: 32, // Adjust height to match the image
    borderRadius: 10, // Adjust border radius to match the image
    paddingVertical: 6,
    paddingHorizontal: 12
  }
})
