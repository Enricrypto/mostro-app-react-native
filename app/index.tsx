import { Badge } from "@/components/atoms/Badge"
import { ConnectButton } from "@/components/atoms/ConnectButton"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner"
import { ProfileDataCard } from "@/components/atoms/ProfileDataCard"
import { Tooltip } from "@/components/atoms/Tooltip"
import { ArtistCard } from "@/components/molecules/ArtistCard"
import { ArtistProfileBanner } from "@/components/molecules/ArtistProfileBanner"
import { Chart } from "@/components/molecules/Chart"
import { FeaturedSongCard } from "@/components/molecules/FeaturedSongCard"
import { LeaderboardCard } from "@/components/molecules/LeaderboardCard"
import { MusicPlayer } from "@/components/molecules/MusicPlayer"
import { NewLaunchCard } from "@/components/molecules/NewLaunchCard"
import { PerksCard } from "@/components/molecules/PerksCard"
import { ProfileCard } from "@/components/molecules/ProfileCard"
import { ProposalStatusCard } from "@/components/molecules/ProposalStatusCard"
import { SongCard } from "@/components/molecules/SongCard"
import { TokenHoldingsUserCard } from "@/components/molecules/TokenHoldingsUserCard"
import { TrendingTokenCard } from "@/components/molecules/TrendingTokenCard"
import { UpcomingEventCard } from "@/components/molecules/UpcomingEventCard"
import {
  VotingHistoryCard,
  VotingHistoryCardProps
} from "@/components/molecules/VotingHistoryCard"
import { FullArtistCard } from "@/components/organisms/FullArtistCard"
import { StatsOverview } from "@/components/organisms/StatsOverview" // Added this line
import { VotingSection } from "@/components/organisms/VotingSection"
import { ArrowUpIcon, CheckIcon } from "phosphor-react-native"
import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"

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

  const handleConnect = () => {
    setIsConnected(true)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* ProfileCard Test */}
      <View style={styles.row}>
        <ProfileCard
          Name='Dhasan'
          userName='@Dhasan123'
          imageUrl='https://www.inria.fr/sites/default/files/2021-01/A_FranceisAITalks_Unsplash_1826x1026.jpg'
          urlLink='0x742d...9c8a'
        />
      </View>

      {/* ProfileDataCard Test */}
      <View style={styles.row}>
        <ProfileDataCard name='Total Artist' value='$45,234' />
      </View>
      {/* SongCard Test */}
      <View style={styles.row}>
        <SongCard
          {...songCardData}
          onPressPlay={() => console.log("Play Song")}
        />
      </View>
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
      {/* VotingHistoryCard Test */}
      <View style={styles.row}>
        <VotingHistoryCard {...votingHistoryCardData} />
      </View>
      {/* TokenHoldingsUserCard Test */}
      <View style={styles.row}>
        <TokenHoldingsUserCard {...tokenHoldingsUserData} />
      </View>
      {/* PerksCard Test */}
      <View style={styles.row}>
        <PerksCard {...perksCardData} />
      </View>
      {/* FeaturedSongCard Test */}
      <View style={styles.row}>
        <FeaturedSongCard
          {...featuredSongCardData}
          onPressPlay={() => console.log("Play Featured Song")}
        />
      </View>
      {/* UpcomingEventCard Test */}
      <View style={styles.row}>
        <UpcomingEventCard
          {...upcomingEventCardData}
          onClaimAccess={() => console.log("Claim Access")}
          onAddToCalendar={() => console.log("Add to Calendar")}
        />
      </View>
      {/* Chart Test */}
      <View style={styles.row}>
        <Chart data={chartData} />
      </View>
      {/* Genre Profile */}
      <View style={styles.row}>
        <Badge variant='genre-profile'>Genre Profile</Badge>
      </View>

      {/* Price Increase */}
      <View style={styles.row}>
        <Badge variant='price-increase'>Price ↑</Badge>
      </View>

      {/* Profile Label */}
      <View style={styles.row}>
        <Badge variant='profile-label'>Profile Label</Badge>
        <Badge
          variant='profile-label'
          icon={<CheckIcon color='#000' size={12} />}
        >
          Verified
        </Badge>
      </View>

      {/* Neutral */}
      <View style={styles.row}>
        <Badge variant='neutral'>Neutral</Badge>
      </View>

      {/* Genre Selector */}
      <View style={styles.row}>
        <Badge variant='genre-selector' selected={false}>
          Not Selected
        </Badge>
        <Badge variant='genre-selector' selected={true}>
          Selected
        </Badge>
      </View>

      {/* Green */}
      <View style={styles.row}>
        <Badge variant='green'>Green</Badge>
      </View>

      {/* Red */}
      <View style={styles.row}>
        <Badge variant='red'>Red</Badge>
      </View>

      {/* Example with icon */}
      <View style={styles.row}>
        <Badge variant='green' icon={<CheckIcon color='#DCFD63' size={12} />}>
          With Icon
        </Badge>
        <Badge variant='red' icon={<ArrowUpIcon color='#FD6363' size={12} />}>
          Alert
        </Badge>
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
  }
})
