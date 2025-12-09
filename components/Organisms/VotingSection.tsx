import { Button } from "@/components/atoms/Button"
import { ThumbsDownIcon, ThumbsUpIcon } from "phosphor-react-native"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { VotingProgress } from "../molecules/VotingProgress"

export const VotingSection: React.FC = () => {
  const [yesVotes, setYesVotes] = useState(125)
  const [noVotes, setNoVotes] = useState(23)

  const totalVotes = yesVotes + noVotes

  const handleVoteYes = () => {
    setYesVotes(yesVotes + 1)
  }

  const handleVoteNo = () => {
    setNoVotes(noVotes + 1)
  }

  return (
    <View style={styles.container}>
      <VotingProgress
        variant='yes'
        value={yesVotes}
        max={totalVotes}
        votes={yesVotes}
      />
      <VotingProgress
        variant='no'
        value={noVotes}
        max={totalVotes}
        votes={noVotes}
      />
      <View style={styles.buttonContainer}>
        <Button
          title='Vote Yes'
          variant='vote-yes'
          onPress={handleVoteYes}
          icon={<ThumbsUpIcon size={24} color='#000' weight='bold' />}
        />
        <Button
          title='Vote No'
          variant='vote-no'
          onPress={handleVoteNo}
          icon={<ThumbsDownIcon size={24} color='#FD6363' weight='bold' />}
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Participants</Text>
          <Text style={styles.infoText}>{totalVotes}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Total Votes</Text>
          <Text style={styles.infoText}>{totalVotes}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    backgroundColor: "#1A1A1A", // Assuming a dark background from the image
    borderRadius: 16
  },
  buttonContainer: {
    marginTop: 16,
    gap: 12
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 24
  },
  infoContainer: {
    gap: 8
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  infoText: {
    color: "#8A8A8A",
    fontSize: 16
  }
})
