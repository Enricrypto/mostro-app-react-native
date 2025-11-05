import {
  Image,
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
  style
}) => {
  const variantStyle = VARIANT_STYLES[variant]

  return (
    <View style={[styles.container, variantStyle, style]}>
      {src ? (
        <Image
          source={{ uri: src }}
          style={[styles.image, { borderRadius: variantStyle.borderRadius }]}
          resizeMode='cover'
        />
      ) : fallback ? (
        <View style={styles.fallbackContainer}>
          <Text style={styles.fallbackText}>{fallback}</Text>
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  fallbackContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  fallbackText: {
    color: "#000",
    fontWeight: "bold"
  }
})
