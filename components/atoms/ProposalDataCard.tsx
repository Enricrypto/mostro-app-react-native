import { StyleSheet, Text, TouchableOpacity } from "react-native"

type ProposalDataCardProps = {
  title: string
  description: string
  status?: string // Added status as optional prop
  onPress?: () => void
}

export const ProposalDataCard: React.FC<ProposalDataCardProps> = ({
  title,
  description,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width:"100%" ,
    backgroundColor: "#121B2B",
    borderRadius: 10,
    paddingVertical: 24,
    paddingHorizontal: 32,
  },
  title: {
    color: "#B3B3B3",
    fontSize: 14,
    marginBottom: 4,
  },
  description: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
})
