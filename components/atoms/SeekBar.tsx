import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { Pause, Play, SkipBack, SkipForward } from "phosphor-react-native";
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Track {
  title: string;
  subtitle: string;
  imageUrl: any;
  duration: number;
}

interface SeekBarProps {
  track: Track;
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export const SeekBar: React.FC<SeekBarProps> = ({ track }) => {
  const [seekValue, setSeekValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isPlaying) {
      interval = setInterval(() => {
        setSeekValue(prevValue => {
          if (prevValue < track.duration) {
            return prevValue + 1;
          } else {
            setIsPlaying(false);
            return prevValue;
          }
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, track.duration]);

  const handlePlayPause = () => {
    if (seekValue >= track.duration) {
      setSeekValue(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (value: number) => {
    setSeekValue(value);
  };

  const handleNext = () => {
    setSeekValue(v => Math.min(v + 10, track.duration));
  };

  const handlePrevious = () => {
    setSeekValue(v => Math.max(v - 10, 0));
  };

  return (
    <LinearGradient
      colors={["#93E1FA", "#CAFB7E"]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Image source={track.imageUrl} style={styles.artwork} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{track.title}</Text>
            <Text style={styles.subtitle}>{track.subtitle}</Text>
          </View>
          <View style={styles.controls}>
            <TouchableOpacity onPress={handlePrevious}>
              <SkipBack size={32} color="#000" weight="fill" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePlayPause} style={styles.playPauseButton}>
              {isPlaying ? (
                <Pause size={24} color="#fff" weight="fill" />
              ) : (
                <Play size={24} color="#fff" weight="fill" />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext}>
              <SkipForward size={32} color="#000" weight="fill" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.timeText}>{formatTime(seekValue)}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={track.duration}
            value={seekValue}
            onValueChange={handleSeek}
            minimumTrackTintColor="#6654D3"
            maximumTrackTintColor="rgba(0, 0, 0, 0.1)"
            thumbTintColor="#6654D3"
          />
          <Text style={styles.timeText}>{formatTime(track.duration)}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 24,
    padding: 20,
    width: '100%',
  },
  container: {
    // The container inside the gradient doesn't need much styling
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  artwork: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
    opacity: 0.7,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  playPauseButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#6C5CE7",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  slider: {
    flex: 1,
    height: 20,
    marginHorizontal: 10,
  },
  timeText: {
    color: "#000",
    fontSize: 14,
    fontWeight: '500',
  },
});