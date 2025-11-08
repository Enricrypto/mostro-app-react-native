import { MusicNote, Play } from "phosphor-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../atoms/Button";

interface FeaturedSongCardProps {
  songTitle: string;
  artistName: string;
  duration: string;
  onPressPlay?: () => void;
}

export const FeaturedSongCard: React.FC<FeaturedSongCardProps> = ({
  songTitle,
  artistName,
  duration,
  onPressPlay,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View style={styles.iconCircle}>
          <MusicNote size={24} color="#000" weight="fill" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.songTitle}>{songTitle}</Text>
          <Text style={styles.artistName}>{artistName} - {duration}</Text>
        </View>
      </View>
      <Button
        title="Play"
        variant="play-featured"
        icon={<Play size={20} color="#000" weight="fill" />}
        onPress={onPressPlay}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121B2B",
    borderRadius: 16,
    padding: 16,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#DCFD63", // Light green with some transparency
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  songTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  artistName: {
    color: "#B3B3B3",
    fontSize: 14,
  },
});
