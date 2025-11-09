import { Avatar } from "@/components/atoms/Avatar"
import { Badge } from "@/components/atoms/Badge"
import { Button } from "@/components/atoms/Button"
import { ArrowSquareOutIcon } from "phosphor-react-native"
import { StyleSheet, Text, View } from "react-native"

interface ArtistCardProps {
  artist: {
    name: string
    tokenName: string
    avatarUrl: string
    genre: string
    description: string
    holders: string
    marketCap: string
    totalSupply: string
    graduated: boolean
    change: string
  }
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Avatar src={artist.avatarUrl} variant='medium-square' />
        <View style={styles.artistInfo}>
          <Text style={styles.artistName}>{artist.name}</Text>
          <Text style={styles.tokenName}>{artist.tokenName}</Text>
          <View style={styles.badgeRow}>
            {artist.graduated && <Badge variant='neutral'>Graduated</Badge>}
            <Badge variant='green'>{artist.change}</Badge>
          </View>
        </View>
      </View>
      <View style={styles.genreRow}>
        <Badge variant='genre-profile'>{artist.genre}</Badge>
      </View>
      <Text style={styles.description}>{artist.description}</Text>
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{artist.holders}</Text>
          <Text style={styles.statLabel}>Holders</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{artist.marketCap}</Text>
          <Text style={styles.statLabel}>Market Cap</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{artist.totalSupply}</Text>
          <Text style={styles.statLabel}>Total Supply</Text>
        </View>
      </View>
      <Button
        title='View Artist'
        variant='view-artist-no-bg'
        icon={<ArrowSquareOutIcon size={24} color='#71D6FB' />}
      />
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
    alignItems: "center",
    marginBottom: 16
  },
  artistInfo: {
    marginLeft: 16
  },
  artistName: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold"
  },
  tokenName: {
    color: "#B3B3B3",
    fontSize: 16
  },
  badgeRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8
  },
  genreRow: {
    marginBottom: 16,
    alignSelf: "flex-start"
  },
  description: {
    color: "#B3B3B3",
    fontSize: 14,
    marginBottom: 24
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24
  },
  stat: {
    alignItems: "center"
  },
  statValue: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  },
  statLabel: {
    color: "#B3B3B3",
    fontSize: 12
  }
})
