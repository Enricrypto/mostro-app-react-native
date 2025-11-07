import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { Text, TextStyle, View, ViewStyle } from "react-native"

type BadgeVariant =
  | "genre-profile"
  | "price-increase"
  | "profile-label"
  | "neutral"
  | "genre-selector"
  | "green"
  | "red"
  | "tokens-info"

interface BadgeProps {
  variant?: BadgeVariant
  selected?: boolean
  children: React.ReactNode
  icon?: React.ReactNode
  style?: ViewStyle
  textStyle?: TextStyle
}

export function Badge({
  variant = "neutral",
  selected = false,
  children,
  icon,
  style,
  textStyle
}: BadgeProps) {
  const baseStyle: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1
  }

  const variantStyles: Record<BadgeVariant, ViewStyle> = {
    "genre-profile": createBadgeStyle("#71D6FB", "rgba(113,214,251,0.3)"),
    "price-increase": createBadgeStyle("#DCFD63", "rgba(220,253,99,0.3)"),
    "profile-label": {
      height: 24,
      borderRadius: 28,
      paddingVertical: 2,
      paddingHorizontal: 8
    },
    neutral: createBadgeStyle("#F5F5F5", "rgba(245,245,245,0.3)"),
    "genre-selector": {
      height: 32,
      borderRadius: 26,
      paddingVertical: 6,
      paddingHorizontal: 12,
      backgroundColor: selected ? "#6654D3" : "#272659"
    },
    green: createBadgeStyle("#DCFD63", "rgba(220,253,99,0.3)"),
    red: createBadgeStyle("#FD6363", "rgba(253,99,99,0.3)"),
    "tokens-info": {
      width: 361,
      height: 32,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#42EE5C",
      paddingVertical: 6,
      paddingHorizontal: 8,
      backgroundColor: "rgba(66,238,92,0.3)"
    }
  }

  const textColors: Record<BadgeVariant, string> = {
    "genre-profile": "#71D6FB",
    "price-increase": "#DCFD63",
    "profile-label": "#000000",
    neutral: "#FFFFFF",
    "genre-selector": selected ? "#FFFFFF" : "#B3B3B3",
    green: "#DCFD63",
    red: "#FD6363",
    "tokens-info": "#42EE5C"
  }

  const textBase: TextStyle = {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0
  }

  const content = (
    <>
      {icon && <View style={{ marginRight: 4 }}>{icon}</View>}
      <Text style={[textBase, { color: textColors[variant] }, textStyle]}>
        {children}
      </Text>
    </>
  )

  // Profile label uses gradient
  if (variant === "profile-label") {
    return (
      <LinearGradient
        colors={["#71D6FB", "#DCFD63"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[baseStyle, variantStyles[variant], style]}
      >
        {content}
      </LinearGradient>
    )
  }

  return (
    <View style={[baseStyle, variantStyles[variant], style]}>{content}</View>
  )
}

/** Helper to generate consistent badge style */
function createBadgeStyle(
  borderColor: string,
  backgroundColor: string
): ViewStyle {
  return {
    minHeight: 22,
    borderRadius: 10,
    borderWidth: 1,
    borderColor,
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor
  }
}
