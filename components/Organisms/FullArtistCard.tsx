import { LinearGradient } from "expo-linear-gradient";
import { CurrencyDollar, InstagramLogo, MusicNote, ShareNetwork, Star, UserPlus } from "phosphor-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "../atoms/Avatar";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

interface FullArtistCardProps {
  artist: {
    name: string;
    avatarUrl: string;
    genre: string;
    description: string;
    token: string;
    price: string;
    holders: string;
  };
}

export const FullArtistCard: React.FC<FullArtistCardProps> = ({ artist }) => {
  return (
    <LinearGradient
      colors={['#0A111F', '#0A111F', '#DCFD63','#4995E0']}
      locations={[0, 0.7, 0.9, 0.94]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <Badge variant="featured-artist" icon={<Star color="#DCFD63" weight="regular" />}>
          Featured Artist of the Month
        </Badge>
        <View style={styles.socials}>
          <Button variant="social-icons" icon={<InstagramLogo color="#fff" />} />
          <Button variant="social-icons" icon={<MusicNote color="#fff" />} />
          <Button variant="social-icons" icon={<MusicNote color="#fff" />} />
        </View>
        <View style={styles.actions}>
          <Button title="Follow" variant="share-follow" icon={<UserPlus color="#fff" />} style={{ flex: 1 }} />
          <Button title="Share" variant="share-follow" icon={<ShareNetwork color="#fff" />} style={{ flex: 1 }} />
        </View>
      </View>
      <Avatar src={artist.avatarUrl} variant="large-square" style={styles.avatar} />
      <Text style={styles.artistName}>{artist.name}</Text>
      <Badge variant="genre-profile" style={styles.genreBadge}>{artist.genre}</Badge>
      <Text style={styles.description}>{artist.description}</Text>
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{artist.token}</Text>
          <Text style={styles.statLabel}>Token</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{artist.price}</Text>
          <Text style={styles.statLabel}>Price</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{artist.holders}</Text>
          <Text style={styles.statLabel}>Holders</Text>
        </View>
      </View>
      <Button
        title="Buy Token"
        variant="buy-token"
        icon={<CurrencyDollar color="#000" />}
        style={{ width: '100%' }}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 24,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    width: '100%',
  },
  socials: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 16,
  },
  actions: {
    flexDirection: 'row',
    gap: 16,
  },
  avatar: {
    marginBottom: 24,
  },
  artistName: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  genreBadge: {
    marginBottom: 16,
  },
  description: {
    color: '#B3B3B3',
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
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#B3B3B3',
    fontSize: 14,
  },
});
