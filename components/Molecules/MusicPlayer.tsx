import { LinearGradient } from "expo-linear-gradient";
import { Pause, Play, SkipBack, SkipForward } from "phosphor-react-native";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { SeekBar } from "../atoms/SeekBar";

interface Track {
  title: string;
  subtitle: string;
  imageUrl: any;
  duration: number;
}

interface MusicPlayerProps {
  track: Track;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ track }) => {
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
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Avatar src={track.imageUrl} variant="small-rounded" />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{track.title}</Text>
            <Text style={styles.subtitle}>{track.subtitle}</Text>
          </View>
          <View style={styles.controls}>
            <Button variant="back-btn" onPress={handlePrevious} icon={<SkipBack size={32} color="#000" weight="regular" />} />
            <Button variant="play-btn" onPress={handlePlayPause} icon={isPlaying ? <Pause size={24} color="#fff" weight="regular" /> : <Play size={24} color="#fff" weight="regular" />} />
            <Button variant="skip-btn" onPress={handleNext} icon={<SkipForward size={32} color="#000" weight="regular" />} />
          </View>
        </View>
        <SeekBar duration={track.duration} value={seekValue} onValueChange={handleSeek} />
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
  titleContainer: {
    flex: 1,
    marginLeft: 16,
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
});