import React, { useMemo } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from "react-native"

type AvatarVariant =
  | "big-square"
  | "large-square"
  | "medium-square"
  | "small-square"
  | "xs-square"
  | "small-rounded"

interface AvatarProps {
  src?: string
  fallback?: string
  variant?: AvatarVariant
  style?: StyleProp<ViewStyle>
  border?: boolean
  shadow?: boolean
  accessibilityLabel?: string
}

const baseAvatar: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden"
}

const VARIANT_STYLES: Record<AvatarVariant, ViewStyle> = {
  "big-square": {
    width: 151,
    height: 151,
    borderRadius: 26,
    backgroundColor: "rgba(220, 253, 99, 0.2)"
  },
  "large-square": {
    width: 247,
    height: 247,
    borderRadius: 26,
    backgroundColor: "rgba(220, 253, 99, 0.2)"
  },
  "medium-square": {
    width: 92,
    height: 92,
    borderRadius: 16,
    backgroundColor: "rgba(220, 253, 99, 0.2)"
  },
  "small-square": {
    width: 76,
    height: 76,
    borderRadius: 12,
    backgroundColor: "rgba(220, 253, 99, 0.2)"
  },
  "xs-square": {
    width: 41,
    height: 41,
    borderRadius: 8,
    backgroundColor: "rgba(220, 253, 99, 0.2)"
  },
  "small-rounded": {
    width: 40,
    height: 40,
    borderRadius: 26,
    backgroundColor: "#DCFD63"
  }
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  fallback,
  variant = "medium-square",
  style,
  border,
  shadow,
  accessibilityLabel
}) => {
  const variantStyle = VARIANT_STYLES[variant]

  // Generate initials if fallback not provided
  const fallbackText = useMemo(() => {
    if (fallback) return fallback
    if (accessibilityLabel) {
      const words = accessibilityLabel.trim().split(" ")
      const initials = words
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join("")
      return initials || "?"
    }
    return "?"
  }, [fallback, accessibilityLabel])

  return (
    <View
      style={[
        baseAvatar,
        variantStyle,
        border && styles.border,
        shadow && styles.shadow,
        style
      ]}
      accessibilityRole='image'
      accessibilityLabel={accessibilityLabel || fallbackText}
    >
      {src ? (
        <Image
          source={{ uri: src }}
          style={[
            StyleSheet.absoluteFillObject as ImageStyle,
            { borderRadius: variantStyle.borderRadius }
          ]}
          resizeMode='cover'
        />
      ) : (
        <View style={styles.fallbackContainer}>
          <Text style={styles.fallbackText}>{fallbackText}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: "#71D6FB"
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4
  },
  fallbackContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  fallbackText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 18
  }
})