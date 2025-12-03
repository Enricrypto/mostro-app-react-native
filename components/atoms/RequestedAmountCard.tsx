import { StyleSheet, Text, View } from "react-native"

type RequestedAmountCardProps = {
  title: string
  amount: string
  tokens: string
}

export const RequestedAmountCard: React.FC<RequestedAmountCardProps> = ({
  title,
  amount,
  tokens
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.tokens}>{tokens}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121B2B", // Darker card background
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    color: "#B3B3B3",
    fontSize: 14,
    marginBottom: 4,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  amount: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  tokens: {
    color: "#B3B3B3",
    fontSize: 14,
  }
})
