import { Badge } from "@/components/atoms/Badge"
import { Button } from "@/components/atoms/Button"
import { ArrowDown, Wallet, X } from "phosphor-react-native"
import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

interface TransactionCardProps {
  tokenName: string
  usdBalance: number
  tokenPrice: number // Price of 1 token in USDC
  platformFeePercent: number
  networkFee: number
  onClose: () => void
  onConfirm: (amount: number) => void
}

export const TransactionCard: React.FC<TransactionCardProps> = ({
  tokenName,
  usdBalance,
  tokenPrice,
  platformFeePercent,
  networkFee,
  onClose,
  onConfirm
}) => {
  const [amount, setAmount] = useState("")
  const numericAmount = parseFloat(amount) || 0

  const platformFee = numericAmount * (platformFeePercent / 100)
  const amountToReceive =
    numericAmount > 0 && tokenPrice > 0
      ? (numericAmount - platformFee) / tokenPrice
      : 0

  return (
    <View style={styles.container}>
      <Button
        title='Close View'
        variant='close-view'
        onPress={onClose}
        icon={<X color='#fff' size={16} />}
        style={styles.closeButton}
      />

      <View style={styles.card}>
        <Text style={styles.title}>
          Buy <Text style={styles.tokenName}>${tokenName}</Text>
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
            keyboardType='numeric'
            placeholder='0.00'
            placeholderTextColor='#8A8A8A'
          />
          <Badge variant='neutral'>USDC</Badge>
        </View>
        <Text style={styles.balance}>Balance {usdBalance.toFixed(2)} USDC</Text>
      </View>

      <View style={styles.arrowContainer}>
        <ArrowDown color='#fff' size={20} />
      </View>

      <View style={styles.card}>
        <Text style={styles.receiveTitle}>You will receive</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.receiveAmount}>
            {amountToReceive > 0 ? amountToReceive.toFixed(2) : "0.00"}
          </Text>
          <Badge variant='green'>${tokenName}</Badge>
        </View>
        <Text style={styles.balance}>~ {numericAmount.toFixed(2)} USDC</Text>
      </View>

      <View style={styles.feeContainer}>
        <View style={styles.feeRow}>
          <Text style={styles.feeLabel}>
            Platform Fee ({platformFeePercent}%)
          </Text>
          <Text style={styles.feeValue}>$ {platformFee.toFixed(2)}</Text>
        </View>
        <View style={styles.feeRow}>
          <Text style={styles.feeLabel}>Network Fee</Text>
          <Text style={styles.feeValue}>$ {networkFee.toFixed(2)}</Text>
        </View>
      </View>

      <Badge
        variant='tokens-info'
        icon={<Wallet color='#42EE5C' size={16} />}
        style={styles.infoBadge}
        textStyle={styles.infoBadgeText}
      >
        Tokens will be received in your wallet instantly
      </Badge>

      <View style={styles.buttonContainer}>
        <Button
          title='Cancel'
          variant='cancel'
          onPress={onClose}
          style={{ flex: 1 }}
        />
        <Button
          title='Confirm Purchase'
          variant='confirm-purchase'
          onPress={() => onConfirm(numericAmount)}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 24,
    width: "100%"
  },
  closeButton: {
    alignSelf: "flex-start",
    marginBottom: 16
  },
  card: {
    backgroundColor: "#121B2B",
    borderRadius: 16,
    padding: 20
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16
  },
  tokenName: {
    color: "#DCFD63"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    //color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    flex: 1,
    borderWidth: 0, // Remove border
    
  
  },
  balance: {
    color: "#8A8A8A",
    fontSize: 14,
    marginTop: 4
  },
  arrowContainer: {
    alignItems: "center",
    marginVertical: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#2D3953",
    justifyContent: "center",
    alignSelf: "center"
  },
  receiveTitle: {
    color: "#8A8A8A",
    fontSize: 16
  },
  receiveAmount: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold"
  },
  feeContainer: {
    backgroundColor: "#121B2B",
    borderRadius: 16,
    padding: 20,
    marginVertical: 16
  },
  feeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12
  },
  feeLabel: {
    color: "#8A8A8A",
    fontSize: 16
  },
  feeValue: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  infoBadge: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(66, 238, 92, 0.1)",
    borderColor: "#42EE5C",
    marginBottom: 24
  },
  infoBadgeText: {
    color: "#42EE5C"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12
  }
})
