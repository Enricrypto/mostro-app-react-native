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
  selected?: boolean // for genre-selector
  children: React.ReactNode
  icon?: React.ReactNode
  style?: ViewStyle
  textStyle?: TextStyle
}

export function Badge({
  variant = "neutral",
  selected,
  children,
  icon,
  style,
  textStyle
}: BadgeProps) {
  // Base styles for all badges
  const baseStyle: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    opacity: 1
  }

  // Variant-specific styles
  const variantStyles: Record<BadgeVariant, ViewStyle> = {
    "genre-profile": {
      height: 22,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#71D6FB",
      paddingVertical: 2,
      paddingHorizontal: 8,
      backgroundColor: "rgba(113,214,251,0.3)"
    },
    "price-increase": {
      height: 22,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#DCFD63",
      paddingVertical: 2,
      paddingHorizontal: 8,
      backgroundColor: "rgba(220,253,99,0.3)"
    },
    "profile-label": {
      height: 24,
      borderRadius: 28,
      paddingVertical: 2,
      paddingHorizontal: 8,
      borderWidth: 0
    },
    neutral: {
      height: 22,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#F5F5F5",
      paddingVertical: 2,
      paddingHorizontal: 8,
      backgroundColor: "rgba(245,245,245,0.3)"
    },
    "genre-selector": {
      height: 32,
      borderRadius: 26,
      paddingVertical: 6,
      paddingHorizontal: 12,
      backgroundColor: selected ? "#6654D3" : "#272659"
    },
    green: {
      height: 22,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#DCFD63",
      paddingVertical: 2,
      paddingHorizontal: 8,
      backgroundColor: "rgba(220,253,99,0.3)"
    },
    red: {
      height: 22,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#FD6363",
      paddingVertical: 2,
      paddingHorizontal: 8,
      backgroundColor: "rgba(253,99,99,0.3)"
    },
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

  const textStyles: TextStyle = {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0
  }

  // Profile label gradient
  if (variant === "profile-label") {
    return (
      <LinearGradient
        colors={["#71D6FB", "#DCFD63"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[baseStyle, variantStyles[variant], style]}
      >
        {icon && <View style={{ marginRight: 4 }}>{icon}</View>}
        <Text style={[textStyles, { color: textColors[variant] }, textStyle]}>
          {children}
        </Text>
      </LinearGradient>
    )
  }

  return (
    <View style={[baseStyle, variantStyles[variant], style]}>
      {icon && <View style={{ marginRight: 4 }}>{icon}</View>}
      <Text style={[textStyles, { color: textColors[variant] }, textStyle]}>
        {children}
      </Text>
    </View>
  )
}
