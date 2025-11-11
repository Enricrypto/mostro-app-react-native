import { Avatar } from "@/components/atoms/Avatar"
import { Button } from "@/components/atoms/Button"
import { LinearGradient } from "expo-linear-gradient"
import { ArrowSquareOutIcon, WalletIcon } from "phosphor-react-native"
import { StyleSheet, Text, View } from "react-native"

type ProfileCardProps = {
  imageUrl: string
  Name: string
  userName: string
  urlLink: string
  onDisconnect?: () => void
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  Name,
  userName,
  urlLink,
  onDisconnect
}) => {
  return (
    <LinearGradient
      colors={["#352B6D", "#6654D3"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.layout}>
        {/* Avatar */}
        <Avatar src={imageUrl} variant='big-square' shadow />

        {/* Name and Username */}
        <View>
          <Text style={styles.name}>{Name}</Text>
        </View>
        <View>
          <Text style={styles.username}>{userName}</Text>
        </View>

        {/* URL row */}
        <View style={styles.inlineRow}>
          <WalletIcon size={24} color='#FFFFFF' />
          <Text style={styles.urlLink}>{urlLink}</Text>
          <ArrowSquareOutIcon size={24} color='#FFFFFF' />
        </View>
        {/* Disconnect Button */}
        <Button
          title='Disconnect'
          variant='view-artist'
          onPress={onDisconnect}
          style={{ minWidth: 170 }}
        />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 361,
    height: 372,
    borderRadius: 10,
    paddingTop: 24,
    paddingRight: 16,
    paddingBottom: 24,
    paddingLeft: 16,
    opacity: 1,
    transform: [{ rotate: "0deg" }],
    flexDirection: "column",
    gap: 24
  },
  layout: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    gap: 8
  },
  name: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.6,
    color: "#FFFFFF"
  },
  username: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    color: "#FFFFFF"
  },
  inlineRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  urlLink: {
    fontFamily: "Inter",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    color: "#FFFFFF",
    textOverflow: "ellipsis"
  }
})
