import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native"

type ButtonVariant =
  | "share-follow"
  | "view-artist"
  | "view-artist-no-bg"
  | "social-icons"
  | "buy-token"
  | "view-all"
  | "play"
  | "claim-access"
  | "add-to-calendar"
  | "section-selector"
  | "view-proposal"
  | "vote-yes"
  | "vote-no"
  | "sell-token"
  | "cancel"
  | "confirm-purchase"
  | "close-view"
  | "connected"
  | "menu"
  | "play-btn"
  | "skip-btn"
  | "back-btn"
  | "status-badge"
  | "play-circle"
  | "play-featured"
  | "continue"

interface ButtonProps {
  title?: string
  variant?: ButtonVariant
  selected?: boolean
  onPress?: (event: GestureResponderEvent) => void
  icon?: React.ReactNode
  badge?: string
  disabled?: boolean
  style?: ViewStyle
}

const baseButton: ViewStyle = {
  height: 40,
  borderRadius: 6,
  paddingHorizontal: 16,
  paddingVertical: 8,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row"
}

const baseText: TextStyle = {
  fontSize: 16,
  fontWeight: "600"
}

const variantStyles: Record<
  ButtonVariant,
  { style: ViewStyle; textStyle: TextStyle }
> = {
  "share-follow": {
    style: {
      ...baseButton,
      minWidth: 101,
      borderWidth: 1,
      borderColor: "#71D6FB"
    },
    textStyle: { ...baseText, color: "#FFFFFF" }
  },
  "view-artist": {
    style: {
      ...baseButton,
      minWidth: 288,
      borderWidth: 1,
      borderColor: "#71D6FB",
      backgroundColor: "#71D6FB"
    },
    textStyle: { ...baseText, color: "#FFFFFF" }
  },
  "view-artist-no-bg": {
    style: {
      ...baseButton,
      minWidth: 329,
      borderWidth: 1,
      borderColor: "#71D6FB"
    },
    textStyle: { ...baseText, color: "#FFFFFF" }
  },
  "social-icons": {
    style: {
      ...baseButton,
      minWidth: 44,
      height: 32,
      borderRadius: 34,
      borderWidth: 1,
      borderColor: "#2D3953",
      backgroundColor: "#0A111F",
      paddingHorizontal: 12
    },
    textStyle: { ...baseText, color: "#FFFFFF" }
  },
  "buy-token": {
    style: { ...baseButton, minWidth: 330, backgroundColor: "#71D6FB" },
    textStyle: { ...baseText, color: "#000000" }
  },
  "view-all": {
    style: {
      ...baseButton,
      minWidth: 116,
      borderWidth: 1,
      borderColor: "#71D6FB"
    },
    textStyle: { ...baseText, color: "#FFFFFF" }
  },
  play: {
    style: { ...baseButton, minWidth: 91, backgroundColor: "#71D6FB" },
    textStyle: { ...baseText, color: "#000000" }
  },
  "claim-access": {
    style: { ...baseButton, minWidth: 153, backgroundColor: "#71D6FB" },
    textStyle: { ...baseText, color: "#000000" }
  },
  "add-to-calendar": {
    style: {
      ...baseButton,
      minWidth: 141,
      borderWidth: 1,
      borderColor: "#71D6FB"
    },
    textStyle: { ...baseText, color: "#FFFFFF" }
  },
  "section-selector": {
    style: {
      ...baseButton,
      minWidth: 56,
      height: 32,
      borderRadius: 3,
      paddingHorizontal: 8,
      paddingVertical: 6
    },
    textStyle: { ...baseText, color: "#B3B3B3" }
  },
  "view-proposal": {
    style: {
      ...baseButton,
      minWidth: 140,
      height: 36,
      borderWidth: 1,
      borderColor: "#71D6FB"
    },
    textStyle: { ...baseText, color: "#FFFFFF" }
  },
  "vote-yes": {
    style: { ...baseButton, minWidth: 329, backgroundColor: "#71D6FB" },
    textStyle: { ...baseText, color: "#000000" }
  },
  "vote-no": {
    style: {
      ...baseButton,
      minWidth: 329,
      borderWidth: 1,
      borderColor: "#FD6363"
    },
    textStyle: { ...baseText, color: "#FD6363" }
  },
  "sell-token": {
    style: {
      ...baseButton,
      minWidth: 123,
      borderWidth: 1,
      borderColor: "#FD6363"
    },
    textStyle: { ...baseText, color: "#FD6363" }
  },
  cancel: {
    style: {
      ...baseButton,
      minWidth: 79,
      borderWidth: 1,
      borderColor: "#71D6FB"
    },
    textStyle: { ...baseText, color: "#FFFFFF" }
  },
  "confirm-purchase": {
    style: { ...baseButton, minWidth: 152, backgroundColor: "#71D6FB" },
    textStyle: { ...baseText, color: "#000000" }
  },
  "close-view": {
    style: { ...baseButton, minWidth: 137, backgroundColor: "#121B2B" },
    textStyle: { ...baseText, color: "#FFFFFF" }
  },
  connected: {
    style: { ...baseButton, minWidth: 164, backgroundColor: "#71D6FB" },
    textStyle: { ...baseText, color: "#000000" }
  },
  menu: {
    style: {
      ...baseButton,
      minWidth: 40,
      backgroundColor: "#71D6FB",
      paddingHorizontal: 8
    },
    textStyle: { ...baseText, color: "#000000" }
  },
  "play-btn": {
    style: {
      ...baseButton,
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: "#6C5CE7",
      paddingHorizontal: 0,
      paddingVertical: 0
    },
    textStyle: { ...baseText, color: "#FFFFFF" }
  },
  "skip-btn": {
    style: {
      ...baseButton,
      width: 32,
      height: 32,
      backgroundColor: "transparent",
      paddingHorizontal: 0,
      paddingVertical: 0
    },
    textStyle: { ...baseText, color: "#000000" }
  },
  "back-btn": {
    style: {
      ...baseButton,
      width: 32,
      height: 32,
      backgroundColor: "transparent",
      paddingHorizontal: 0,
      paddingVertical: 0
    },
    textStyle: { ...baseText, color: "#000000" }
  },
  "status-badge": {
    style: {
      ...baseButton,
      minWidth: 80,
      height: 32,
      borderRadius: 16,
      backgroundColor: "#B3B3B3",
      paddingHorizontal: 12,
      paddingVertical: 6
    },
    textStyle: { ...baseText, color: "#000000" }
  },
  "play-circle": {
    style: {
      width: 48,
      height: 48,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: "#71D6FB",
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 0,
      paddingVertical: 0
    },
    textStyle: { ...baseText, color: "#FFFFFF" }
  },
  "play-featured": {
    style: {
      ...baseButton,
      backgroundColor: "#71D6FB",
      borderRadius: 10,
      paddingHorizontal: 16,
      paddingVertical: 12,
      minWidth: 100,
    },
    textStyle: { ...baseText, color: "#000000" }
  },
  "continue": {
    style: {
      ...baseButton,
      minWidth: 288,
      borderWidth: 1,
      borderColor: "#DCFD63B2",
      backgroundColor: "#DCFD63B2"
    },
    textStyle: { ...baseText, color: "#000000ff" }
  },
}

export const Button = ({
  title,
  variant = "view-artist",
  selected,
  onPress,
  icon,
  badge,
  disabled,
  style
}: ButtonProps) => {
  const { style: variantStyle, textStyle } = variantStyles[variant]

  const finalStyle =
    variant === "section-selector" && selected
      ? { ...variantStyle, backgroundColor: "#6654D3" }
      : variantStyle

  const finalTextStyle =
    variant === "section-selector" && selected
      ? { ...textStyle, color: "#FFFFFF" }
      : textStyle

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      accessibilityRole='button'
      accessibilityLabel={title}
      style={[finalStyle, disabled && { opacity: 0.5 }, style]}
    >
      {/* ICON */}
      {icon && <View style={{ marginRight: title ? 8 : 0 }}>{icon}</View>}

      {/* TEXT */}
      {title && <Text style={finalTextStyle}>{title}</Text>}

      {/* BADGE */}
      {badge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#FD6363",
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700"
  }
})
