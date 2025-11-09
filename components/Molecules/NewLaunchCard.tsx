import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "../atoms/Avatar";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { CalendarBlank, ArrowUpRight } from "phosphor-react-native";

interface NewLaunchCardProps {
  token: {
    artistName: string;
    avatarUrl: string;
    genre: string;
    launchDate: string; // e.g., "in 2 days"
    initialPrice: string;
    totalSupply: string;
  };
  onViewArtist?: () => void;
}

export const NewLaunchCard: React.FC<NewLaunchCardProps> = ({ token, onViewArtist }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Avatar src={token.avatarUrl} variant="medium-square" />
        <View style={styles.infoContainer}>
          <View style={styles.launchInfo}>
            <CalendarBlank size={16} color="#DCFD63" />
            <Text style={styles.launchText}>Launch {token.launchDate}</Text>
          </View>
          <Text style={styles.artistName}>{token.artistName}</Text>
          <Badge variant="genre-profile" style={{ alignSelf: 'flex-start' }}>{token.genre}</Badge>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{token.initialPrice}</Text>
          <Text style={styles.statLabel}>Initial Price</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{token.totalSupply}</Text>
          <Text style={styles.statLabel}>Total Supply</Text>
        </View>
      </View>
      <Button
        title="View Artist"
        variant="view-artist-no-bg"
        icon={<ArrowUpRight size={24} color="#71D6FB" />}
        onPress={onViewArtist}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A111F',
    borderRadius: 16,
    padding: 24,
    width: '100%',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  infoContainer: {
    marginLeft: 16,
    flex: 1,
  },
  launchInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  launchText: {
    color: '#DCFD63',
    fontSize: 12,
    marginLeft: 4,
  },
  artistName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#2D3953',
    marginVertical: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  stat: {
    alignItems: 'flex-start', // Align text to the left
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#B3B3B3',
    fontSize: 12,
  },
});
