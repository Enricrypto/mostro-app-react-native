import { Badge } from "@/components/atoms/Badge";
import { ConnectButton } from "@/components/atoms/ConnectButton";
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner";
import { ProgressBar } from "@/components/atoms/ProgressBar";
import { SeekBar } from "@/components/atoms/SeekBar";
import { Tooltip } from "@/components/atoms/Tooltip";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const track = {
  title: "Burning Up",
  subtitle: "Liz Cherry",
  imageUrl: require("../assets/images/liz-cherry/1. Liz Cherry - Burning Up.jpg"),
  duration: 180,
};

export default function Index() {
  const [isConnected, setIsConnected] = useState(false);
  const address = "0xf87b32a4E926bA49a655a9B13111d348b508f953";

  const handleConnect = () => {
    setIsConnected(true);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        <LoadingSpinner size="large" color="#71D6FB" speed={1} />
        <LoadingSpinner size="small" color="#DCFD63" speed={2} />
      </View>
      {/* ProgressBar Test */}
      <View style={styles.row}>
        <ProgressBar variant="yes" value={125} max={158} votes={125} />
        <ProgressBar variant="no" value={33} max={158} votes={33} />
      </View>
      {/* Tooltip Test */}
      <View style={styles.row}>
        <Tooltip content="This is a tooltip" position="top">
          <Text style={{ color: '#ffffffff' }} >Press me for a tooltip</Text>
        </Tooltip>
      </View>
      {/* SeekBar Test */}
      <View style={styles.row}>
        <SeekBar track={track} />
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
    width: "100%",
  }
})