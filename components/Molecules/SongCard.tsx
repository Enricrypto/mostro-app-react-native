import { Badge } from "@/components/atoms/Badge"
import { Button } from "@/components/atoms/Button"
import { PlayIcon } from "phosphor-react-native"
import { StyleSheet, Text, View } from "react-native"

interface SongCardProps {
  title: string
  subtitle: string
  duration: string
  tokenValue: string
  onPressPlay?: () => void
}

export const SongCard: React.FC<SongCardProps> = ({
  title,
  subtitle,
  duration,
  tokenValue,
  onPressPlay
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>
        {subtitle} - {duration}
      </Text>
      <View style={styles.bottomRow}>
        <Button
          icon={<PlayIcon size={24} color='#fff' weight='fill' />}
          onPress={onPressPlay}
          variant='play-circle'
        />
        <Badge variant='song-token-info' style={styles.tokenBadge}>
          {tokenValue}
        </Badge>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121B2B",
    borderRadius: 16,
    padding: 24,
    width: "100%"
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8
  },
  subtitle: {
    color: "#B3B3B3",
    fontSize: 16,
    marginBottom: 24
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16
  },
  tokenBadge: {
    height: 32,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12
  }
})
