import { Badge } from "@/components/atoms/Badge"
import { ConnectButton } from "@/components/atoms/ConnectButton"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner"
import { Tooltip } from "@/components/atoms/Tooltip"
import { ArtistCard } from "@/components/molecules/ArtistCard"
import { ArtistProfileBanner } from "@/components/molecules/ArtistProfileBanner"
import { ArtistStats } from "@/components/molecules/ArtistStats"
import { LeaderboardCard } from "@/components/molecules/LeaderboardCard"
import { MusicPlayer } from "@/components/molecules/MusicPlayer"
import { NewLaunchCard } from "@/components/molecules/NewLaunchCard"
import { ProposalStatusCard } from "@/components/molecules/ProposalStatusCard"
import { TrendingTokenCard } from "@/components/molecules/TrendingTokenCard"
import { FullArtistCard } from "@/components/organisms/FullArtistCard"
import { StatsOverview } from "@/components/organisms/StatsOverview"
import { VotingSection } from "@/components/organisms/VotingSection"
import { ArrowUpRightIcon } from "phosphor-react-native"
import React, { useState } from "react"
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

export default function Index() {
  const [isConnected, setIsConnected] = useState(false)
  const address = "0xf87b32a4E926bA49a655a9B13111d348b508f953"

  const handleConnect = () => {
    setIsConnected(true)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* StatsOverview Test */}
      <View style={styles.row}>
        <StatsOverview
          title='Total Artists'
          mainStat='247'
          secondaryStat='+12 this week'
        />
      </View>
      {/* Connect Button Test */}
      <View style={styles.row}>
        <ConnectButton
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
          isConnected={isConnected}
          address={address}
        />
      </View>
      {/* Loading Spinner Test */}
      <View style={styles.row}>
        <LoadingSpinner size='large' color='#71D6FB' speed={1} />
        <LoadingSpinner size='small' color='#DCFD63' speed={2} />
      </View>
      {/* ProgressBar Test */}
      <View style={styles.row}>
        <VotingSection />
      </View>
      {/* Tooltip Test */}
      <View style={styles.row}>
        <Tooltip content='This is a tooltip' position='top'>
          <Text style={{ color: "#ffffffff" }}>Press me for a tooltip</Text>
        </Tooltip>
      </View>
      {/* MusicPlayer Test */}
      <View style={styles.row}>
        <MusicPlayer track={track} />
      </View>
      {/* ArtistCard Test */}
      <View style={styles.row}>
        <ArtistCard artist={artist} />
      </View>
      {/* FullArtistCard Test */}
      <View style={styles.row}>
        <FullArtistCard artist={fullArtist} />
      </View>
      {/* LeaderboardCard Test */}
      <View style={styles.row}>
        <LeaderboardCard rank={1} user={leaderboardUser} />
      </View>
      {/* NewLaunchCard Test */}
      <View style={styles.row}>
        <NewLaunchCard
          token={newLaunchToken}
          onViewArtist={() => console.log("View Artist")}
        />
      </View>
      {/* TrendingTokenCard Test */}
      <View style={styles.row}>
        <TrendingTokenCard
          token={trendingToken}
          onPress={() => console.log("Pressed")}
        />
      </View>
      {/* ArtistProfileBanner Test */}
      <View style={styles.row}>
        <ArtistProfileBanner
          artist={artistProfile}
          onViewArtist={() => console.log("View Artist")}
        />
      </View>
      {/* ProposalStatusCard Test */}
      <View style={styles.row}>
        <ProposalStatusCard
          proposal={proposal}
          onViewProposal={() => console.log("View Proposal")}
        />
      </View>
      {/* Genre Profile */}
      <View style={styles.row}>
        <Badge variant='genre-profile'>Genre Profile</Badge>
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
  TockenSectionTitle: {
    color: "#ffffff",
    textAlign: "left",
    alignSelf: "flex-start",
    fontWeight: "600",
    fontSize: 20
  },
  ContainerTopholder: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    width: "100%"
  },
  rank: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600"
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
    marginTop: 16
  }
})
