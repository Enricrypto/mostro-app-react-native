import { ArrowRightIcon, ClockIcon } from "phosphor-react-native"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Badge } from "../atoms/Badge"
import { Button } from "../atoms/Button"
import { ProgressBar } from "../atoms/ProgressBar"

interface ProposalStatusCardProps {
  proposal: {
    title: string
    requesting: string
    yesPercentage: number
    noPercentage: number
  }
  onViewProposal?: () => void
}

export const ProposalStatusCard: React.FC<ProposalStatusCardProps> = ({
  proposal,
  onViewProposal
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{proposal.title}</Text>
        <Badge variant='green' icon={<ClockIcon size={16} color='#DCFD63' />}>
          Ongoing
        </Badge>
      </View>
      <Text style={styles.requesting}>{proposal.requesting}</Text>
      <ProgressBar
        progress={proposal.yesPercentage / 100}
        color='#71D6FB'
        backgroundColor='rgba(113, 214, 251, 0.3)'
      />
      <View style={styles.bottomRow}>
        <View>
          <Text style={styles.yesPercentageText}>
            {proposal.yesPercentage}% Yes
          </Text>
          <Text style={styles.noPercentageText}>
            {proposal.noPercentage}% No
          </Text>
        </View>
        <Button
          title='View Proposal'
          variant='view-proposal'
          icon={<ArrowRightIcon size={20} color='#71D6FB' />}
          onPress={onViewProposal}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0A111F",
    borderRadius: 16,
    padding: 24,
    width: "100%"
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold"
  },
  requesting: {
    color: "#B3B3B3",
    fontSize: 14,
    marginBottom: 16
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16
  },
  yesPercentageText: {
    color: "#FFFFFF",
    fontSize: 16
  },
  noPercentageText: {
    color: "#B3B3B3",
    fontSize: 16
  }
})
