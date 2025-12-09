import { Badge } from "@/components/atoms/Badge"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

interface FundAllocationCardProps {
  title: string
  tokens: number
  perk: string
  status: string
}

export const FundAllocationCard: React.FC<FundAllocationCardProps> = ({
  title,
  tokens,
  perk,
  status
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{title}</Text>
        <Badge variant='neutral'>{status}</Badge>
      </View>
      <Text style={styles.tokens}>{tokens.toLocaleString()} Tokens</Text>
      <Text style={styles.perk}>
        <Text style={{ color: "#B3B3B3" }}>Perk: </Text>
        {perk}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121B2B",
    borderRadius: 16,
    padding: 24,
    width: "100%"
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold"
  },
  tokens: {
    color: "#B3B3B3",
    fontSize: 16,
    marginBottom: 16
  },
  perk: {
    color: "#DCFD63",
    fontSize: 16
  }
})
