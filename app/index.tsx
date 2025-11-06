import { Badge } from "@/components/atoms/Badge";
import { ConnectButton } from "@/components/atoms/ConnectButton";
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner";
import { ProgressBar } from "@/components/atoms/ProgressBar";
import { SeekBar } from "@/components/atoms/SeekBar";
import { Tooltip } from "@/components/atoms/Tooltip";
import { ArrowUpIcon, CheckIcon } from "phosphor-react-native";
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
    width: "100%",
  }
})