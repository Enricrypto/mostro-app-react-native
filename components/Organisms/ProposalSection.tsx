import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { ProposalDataCard } from "../atoms/ProposalDataCard"
import { RequestedAmountCard } from "../atoms/RequestedAmountCard"
import { FundAllocationCard } from "../molecules/FundAllocationCard"

const fundAllocations = [
  {
    title: "Live Recording costs",
    tokens: 15000,
    perk: "Live Album produced from the recording",
    status: "Planned"
  },
  {
    title: "Limited edition merch costs",
    tokens: 15000,
    perk: "Limited edition tour hoodie",
    status: "Planned"
  },
  {
    title: "VIP concert package",
    tokens: 15000,
    perk: "4 tickets + a meet and greet with Luna",
    status: "Planned"
  }
]

export const ProposalSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>MROIDS NEW EP</Text>
      <Text style={styles.subtitle}>By Luna Eclipse</Text>
      <Text style={styles.description}>
        Fund a 10-city European tour across major venues. This tour will include
        stops in Berlin, Amsterdam, Paris, London and more. Ticket holders with
        50+ tokens get priority access to meets and greets.
      </Text>

      <View style={styles.dataCardsContainer}>
        <RequestedAmountCard
          title='Requested Amount'
          amount='$2000'
          tokens='15,000 Tokens'
        />
        <ProposalDataCard title='Deadline' description='November 15, 2025' />
      </View>

      <Text style={styles.fundAllocationTitle}>Fund Allocation</Text>

      <View style={styles.fundAllocationContainer}>
        {fundAllocations.map((item, index) => (
          <FundAllocationCard key={index} {...item} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0A111F",
    padding: 24,
    borderRadius: 24,
    width: "100%"
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4
  },
  subtitle: {
    fontSize: 16,
    color: "#DCFD63",
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    color: "#B3B3B3",
    marginBottom: 24,
    lineHeight: 24
  },
  dataCardsContainer: {
    gap: 16,
    marginBottom: 24
  },
  fundAllocationTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 16
  },
  fundAllocationContainer: {
    gap: 16
  }
})
