import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "../atoms/Avatar";
import { Badge } from "../atoms/Badge";
import { Medal } from "phosphor-react-native"; // Using Medal icon for "Perks Unlocked"

interface TokenHoldingsUserCardProps {
  avatarUrl: string;
  userName: string;
  tokenCount: string;
  changePercentage: string;
  currentValue: string;
  perksUnlocked: number;
}

export const TokenHoldingsUserCard: React.FC<TokenHoldingsUserCardProps> = ({
  avatarUrl,
  userName,
  tokenCount,
  changePercentage,
  currentValue,
  perksUnlocked,
}) => {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Avatar src={avatarUrl} variant="medium-square" />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.tokenCount}>{tokenCount} tokens</Text>
        </View>
        <Badge variant="green" style={styles.badge}>{changePercentage}</Badge>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{currentValue}</Text>
          <Text style={styles.statLabel}>Current Value</Text>
        </View>
        <View style={styles.statItem}>
          <View style={styles.perksContainer}>
            <Medal size={24} color="#71D6FB" />
            <Text style={styles.statValue}>{perksUnlocked}</Text>
          </View>
          <Text style={styles.statLabel}>Perks Unlocked</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0A111F",
    borderRadius: 16,
    padding: 24,
    width: "100%",
  },
  topSection: {
    flexDirection: "row",
    alignItems: "flex-start", // Align items to the top
    marginBottom: 20,
  },
  userInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center", // Vertically center name and token count
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  tokenCount: {
    color: "#B3B3B3",
    fontSize: 14,
  },
  badge: {
    alignSelf: "flex-start", // Align badge to the top
  },
  divider: {
    height: 1,
    backgroundColor: "#2D3953",
    marginVertical: 20,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    alignItems: "flex-start",
  },
  statValue: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#B3B3B3",
    fontSize: 14,
  },
  perksContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
