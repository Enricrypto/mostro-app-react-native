import { ArtistCard } from "@/components/molecules/ArtistCard"
import { ArtistProfileBanner } from "@/components/molecules/ArtistProfileBanner"
import { ArtistStats } from "@/components/molecules/ArtistStats"
import { OnBoardingScreen } from "@/components/molecules/OnBoardingScreen"
import { TrendingTokenCard } from "@/components/molecules/TrendingTokenCard"
import { VotingHistoryCardProps } from "@/components/molecules/VotingHistoryCard"
import { Navbar } from "@/components/navigation/Navbar"
import { GenreSearchBar } from "@/components/organisms/GenreSearchBar"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ArrowUpRightIcon } from "phosphor-react-native"
import React, { useEffect, useState } from "react"
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native"

const track = {
  title: "Burning Up",
  subtitle: "Liz Cherry",
  imageUrl:
    "https://images.unsplash.com/photo-1551180452-aea351b23949?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  duration: 180
}

const artist = {
  name: "Luna Eclipse",
  tokenName: "$MLuna",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  genre: "Jazz Fusion",
  description:
    "Experimental electronic artist pushing boundaries with immersive soundscapes and innovative production...",
  holders: "1,247",
  marketCap: "$155K",
  totalSupply: "100K",
  graduated: true,
  change: "+24%"
}

const fullArtist = {
  name: "Luna Eclipse",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  genre: "Electronic",
  description:
    "Experimental electronic artist pushing boundaries with immersive soundscapes and innovative production techniques. Known for sold-out shows across Europe.",
  token: "$MARTIST",
  price: "$12.45",
  holders: "1,247"
}

const leaderboardUser = {
  name: "mostrofan.eth",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
}

const newLaunchToken = {
  artistName: "John Doe",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  genre: "RnB & Hip Hop",
  launchDate: "in 2 days",
  initialPrice: "$ 1.00",
  totalSupply: "10K"
}

const trendingToken = {
  artistName: "John Doe",
  tokenName: "$MDoes",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  price: "$ 3.45",
  change: "+24%"
}

const artistProfile = {
  name: "Luna Eclipse",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  description:
    "Experimental electronic artist pushing boundaries with immersive soundscapes and innovative production techniques. Known for sold-out shows across Europe.",
  tokenHolders: "1.2K+",
  marketCap: "$155K",
  loremIpsum: "---"
}

const proposal = {
  title: "Proposal Title",
  requesting: "Requesting 1000 $TOKEN for project X",
  yesPercentage: 75,
  noPercentage: 25
}

const votingHistoryCardData: VotingHistoryCardProps = {
  title: "New Album Production",
  userName: "John Doe",
  timeAgo: "2 days ago",
  voteStatus: "yes",
  proposalStatus: "active"
}

const tokenHoldingsUserData = {
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  userName: "John Doe",
  tokenCount: "125",
  changePercentage: "+24%",
  currentValue: "$794",
  perksUnlocked: 2
}

const songCardData = {
  title: "Midnight Dreams",
  subtitle: "Latest Single",
  duration: "3:45",
  tokenValue: "5 USDC = 500 Tokens"
}

const perksCardData = {
  title: "Voting Power",
  description: "Vote on Creative Decision",
  rewards: "500 Tokens"
}

const featuredSongCardData = {
  songTitle: "Midnight Dreams",
  artistName: "Latest Single",
  duration: "3:45"
}

const upcomingEventCardData = {
  title: "Live in Berlin",
  date: "Nov 15, 2025 at 8:00 PM",
  location: "Berghain"
}

const chartData = {
  labels: ["Jan 21", "Jan 22", "Jan 23", "Jan 24", "Jan 25"],
  datasets: [
    {
      data: [
        Math.random() * 10000 + 2000,
        Math.random() * 10000 + 2000,
        Math.random() * 10000 + 2000,
        Math.random() * 10000 + 2000,
        Math.random() * 10000 + 2000,
        Math.random() * 10000 + 2000
      ]
    }
  ]
}

export default function Index() {
  const [isConnected, setIsConnected] = useState(false)
  const address = "0xf87b32a4E926bA49a655a9B13111d348b508f953"
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null)

  const handleConnect = () => {
    setIsConnected(true)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
  }
  useEffect(() => {
    const checkOnboarding = async () => {
      const value = await AsyncStorage.getItem("hasSeenOnboarding")
      setShowOnboarding(value === null)
    }
    checkOnboarding()
  }, [])

  const handleOnboardingDone = async () => {
    await AsyncStorage.setItem("hasSeenOnboarding", "true")
    setShowOnboarding(false)
  }

  if (showOnboarding === null) {
    return <Text>Loading...</Text> // splash or loader
  }

  if (showOnboarding) {
    return <OnBoardingScreen onDone={handleOnboardingDone} />
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Navbar />
      </View>

      <View style={styles.containerGenre}>
        <GenreSearchBar
          onSelectGenre={(genre: any) => console.log("Selected genre:", genre)}
        />
      </View>

      <View style={styles.ProfileCard}>
        <ArtistProfileBanner artist={artistProfile} />
      </View>

      <View style={{ marginTop: 30 }}>
        <ArtistStats />
      </View>

      <View>
        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <Text style={styles.TockenSectionTitle}>Top Artist</Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            rowGap: 20
          }}
        >
          <ArtistCard artist={artist} />
          <ArtistCard artist={artist} />
          <ArtistCard artist={artist} />
        </View>
      </View>

      <View style={{ marginTop: 30, marginBottom: 20 }}>
        <Text
          style={{
            color: "#ffffff",
            textAlign: "left",
            alignSelf: "flex-start",
            fontWeight: "600",
            fontSize: 20
          }}
        >
          Top Holders
        </Text>
      </View>

      <View style={styles.ContainerTopholder}>
        <Text style={styles.rank}>#1</Text>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s"
          }}
          style={styles.avatar}
        />
        <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "500" }}>
          {" "}
          Mostrofan.th
        </Text>
      </View>

      <View style={styles.ContainerTopholder}>
        <Text style={styles.rank}>#1</Text>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s"
          }}
          style={styles.avatar}
        />
        <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "500" }}>
          {" "}
          Mostrofan.th
        </Text>
      </View>
      <View style={styles.ContainerTopholder}>
        <Text style={styles.rank}>#1</Text>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s"
          }}
          style={styles.avatar}
        />
        <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "500" }}>
          {" "}
          Mostrofan.th
        </Text>
      </View>
      <View style={styles.ContainerTopholder}>
        <Text style={styles.rank}>#1</Text>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s"
          }}
          style={styles.avatar}
        />
        <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "500" }}>
          {" "}
          Mostrofan.th
        </Text>
      </View>

      <View>
        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <Text style={styles.TockenSectionTitle}> Trending Tokens</Text>
        </View>
        <View style={styles.row}>
          <TrendingTokenCard token={trendingToken} />
          <TrendingTokenCard token={trendingToken} />
          <TrendingTokenCard token={trendingToken} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#ffffff" }}>View All</Text>
          <ArrowUpRightIcon size={24} color='#ffffff' />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 12
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
    width: "100%"
  },
  containerGenre: {
    width: 393,
    height: 72,
    position: "absolute",
    top: 130,
    left: 1,
    opacity: 1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#121B2B",
    borderRadius: 6,
    paddingLeft: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  ProfileCard: {
    marginTop: 130
  },
  TrackSectionContainer: {
    paddingTop: 16,
    paddingBottom: 16
  },
  TopHoldersSectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
    paddingBottom: 8,
    textAlign: "left",
    alignSelf: "flex-start"
  },
  TockenSectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
    paddingBottom: 8,
    alignItems: "flex-start",
    alignSelf: "flex-start"
  },

  ContainerTopholder: {
    width: 361,
    height: 64,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2D3953",
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    flexDirection: "row", // ✅ children in a row
    alignItems: "center", // ✅ vertical centering
    justifyContent: "flex-start",
    opacity: 1,
    gap: 8 // ✅ RN 0.71+ supports gap
  },
  rank: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 0,
    color: "#B3B3B3"
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20 // ✅ half of width/height → perfect circle
  },
  VotingSectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
    color: "#FFFFFF",
    alignItems: "flex-start",
    alignSelf: "flex-start"
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
    borderRadius: 8,
    alignItems: "center",
    borderColor: "#71D6FB",
    borderWidth: 1,
    justifyContent: "center",
    flexDirection: "row",
    gap: 8
  }
})
