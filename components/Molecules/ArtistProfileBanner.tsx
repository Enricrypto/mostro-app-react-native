import { ArrowUpRight } from "phosphor-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";

interface ArtistProfileBannerProps {
  artist: {
    name: string;
    avatarUrl: string;
    description: string;
    tokenHolders: string;
    marketCap: string;
    loremIpsum: string;
  };
  onViewArtist?: () => void;
}

export const ArtistProfileBanner: React.FC<ArtistProfileBannerProps> = ({ artist, onViewArtist }) => {
  return (
    <View style={styles.container}>
      <Avatar src={artist.avatarUrl} variant="large-square" style={styles.avatar} />
      <Text style={styles.artistName}>{artist.name}</Text>
      <Text style={styles.description}>{artist.description}</Text>
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{artist.tokenHolders}</Text>
          <Text style={styles.statLabel}>Token Holders</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{artist.marketCap}</Text>
          <Text style={styles.statLabel}>Market Cap</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{artist.loremIpsum}</Text>
          <Text style={styles.statLabel}>Lorem Ipsum</Text>
        </View>
      </View>
      <Button
        title="View Artist"
        variant="view-artist"
        icon={<ArrowUpRight size={24} color="#fff" />}
        onPress={onViewArtist}
        style={{ width: '100%' }}
      />
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCFD63',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    marginBottom: 24,
  },
  artistName: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 32,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#000',
    fontSize: 14,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 24,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});
