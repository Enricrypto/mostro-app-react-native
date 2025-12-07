import { Badge } from "@/components/atoms/Badge"
import { ThumbsUpIcon } from "phosphor-react-native"
import { StyleSheet, Text, View } from "react-native"

export interface VotingHistoryCardProps {
  title: string
  userName: string
  timeAgo: string
  voteStatus: "yes" | "no" // Assuming 'yes' or 'no' based on the image
  proposalStatus: "active" | "closed" // Assuming 'active' or 'closed'
}

export const VotingHistoryCard: React.FC<VotingHistoryCardProps> = ({
  title,
  userName,
  timeAgo,
  voteStatus,
  proposalStatus
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttonsContainer}>
          {voteStatus === "yes" && (
            <Badge
              variant='green'
              icon={<ThumbsUpIcon size={12} color='#fff' />}
            >
              Yes
            </Badge>
          )}
          <Badge variant='neutral'>
            {proposalStatus === "active" ? "Active" : "Closed"}
          </Badge>
        </View>
      </View>
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.timeAgo}>{timeAgo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121B2B",
    borderColor: "#2D3953",
    borderWidth: 2,
    borderRadius: 16,
    padding: 24,
    width: "100%"

  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start", // Changed to flex-start to align buttons to the top
    marginBottom: 8
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    // Removed flexShrink: 1 to prevent excessive shrinking
    marginRight: 10, // Space between title and buttons
    flex: 1 // Allow title to take available space
  },
  buttonsContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 8
  },
  userName: {
    color: "#B3B3B3",
    fontSize: 16,
    marginBottom: 4
  },
  timeAgo: {
    color: "#B3B3B3",
    fontSize: 14
  }
})
