import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
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

interface ButtonProps {
  title?: string
  variant?: ButtonVariant
  selected?: boolean // for section-selector
  onPress?: (event: GestureResponderEvent) => void
  icon?: React.ReactNode
}

const variantStyles: Record<
  ButtonVariant,
  { style: ViewStyle; textStyle: TextStyle }
> = {
  "share-follow": {
    style: {
      minWidth: 101,
      height: 40,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: "#71D6FB",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#FFFFFF" }
  },
  "view-artist": {
    style: {
      minWidth: 288,
      height: 40,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: "#71D6FB",
      backgroundColor: "#71D6FB",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#FFFFFF" }
  },
  "view-artist-no-bg": {
    style: {
      minWidth: 329,
      height: 40,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: "#71D6FB",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#FFFFFF" }
  },
  "social-icons": {
    style: {
      minWidth: 44,
      height: 32,
      borderRadius: 34,
      borderWidth: 1,
      borderColor: "#2D3953",
      backgroundColor: "#0A111F",
      paddingHorizontal: 12,
      paddingVertical: 8
    },
    textStyle: { color: "#FFFFFF" }
  },
  "buy-token": {
    style: {
      minWidth: 330,
      height: 40,
      borderRadius: 6,
      backgroundColor: "#71D6FB",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#000000" }
  },
  "view-all": {
    style: {
      minWidth: 116,
      height: 40,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: "#71D6FB",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#FFFFFF" }
  },
  play: {
    style: {
      minWidth: 91,
      height: 40,
      borderRadius: 6,
      backgroundColor: "#71D6FB",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#000000" }
  },
  "claim-access": {
    style: {
      minWidth: 153,
      height: 40,
      borderRadius: 6,
      backgroundColor: "#71D6FB",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#000000" }
  },
  "add-to-calendar": {
    style: {
      minWidth: 141,
      height: 40,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: "#71D6FB",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#FFFFFF" }
  },
  "section-selector": {
    style: {
      minWidth: 56,
      height: 32,
      borderRadius: 3,
      paddingHorizontal: 8,
      paddingVertical: 6
    },
    textStyle: { color: "#B3B3B3" }
  },
  "view-proposal": {
    style: {
      minWidth: 140,
      height: 36,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: "#71D6FB",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#FFFFFF" }
  },
  "vote-yes": {
    style: {
      minWidth: 329,
      height: 40,
      borderRadius: 6,
      backgroundColor: "#71D6FB",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#000000" }
  },
  "vote-no": {
    style: {
      minWidth: 329,
      height: 40,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: "#FD6363",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#FD6363" }
  },
  "sell-token": {
    style: {
      minWidth: 123,
      height: 40,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: "#FD6363",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#FD6363" }
  },
  cancel: {
    style: {
      minWidth: 79,
      height: 40,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: "#71D6FB",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#FFFFFF" }
  },
  "confirm-purchase": {
    style: {
      minWidth: 152,
      height: 40,
      borderRadius: 6,
      backgroundColor: "#71D6FB",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#000000" }
  },
  "close-view": {
    style: {
      minWidth: 137,
      height: 40,
      borderRadius: 6,
      backgroundColor: "#121B2B",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#FFFFFF" }
  },
  connected: {
    style: {
      minWidth: 164,
      height: 40,
      borderRadius: 6,
      backgroundColor: "#71D6FB",
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    textStyle: { color: "#000000" }
  },
  menu: {
    style: {
      minWidth: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "#71D6FB",
      paddingHorizontal: 8,
      paddingVertical: 8
    },
    textStyle: { color: "#000000" }
  }
}

export const Button = ({
  title,
  variant = "view-artist",
  selected,
  onPress,
  icon
}: ButtonProps) => {
  const { style, textStyle } = variantStyles[variant]

  // handle section-selector selected state
  const finalStyle =
    variant === "section-selector" && selected
      ? { ...style, backgroundColor: "#6654D3" }
      : style
  const finalTextStyle =
    variant === "section-selector" && selected
      ? { ...textStyle, color: "#FFFFFF" }
      : textStyle

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, finalStyle]}>
      {icon && <>{icon}</>}
      {title && <Text style={[styles.text, finalTextStyle]}>{title}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10 // spacing between icon & text
  },
  text: {
    fontSize: 16,
    fontWeight: "600"
  }
})
