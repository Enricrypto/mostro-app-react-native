import { Badge } from "@/components/atoms/Badge"
import { ArrowUpIcon, CheckIcon } from "phosphor-react-native"
import React from "react"
import { ScrollView, StyleSheet, View } from "react-native"

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Genre Profile */}
      <View style={styles.row}>
        <Badge variant='genre-profile'>Genre Profile</Badge>
      </View>

      {/* Price Increase */}
      <View style={styles.row}>
        <Badge variant='price-increase'>Price ↑</Badge>
      </View>

      {/* Profile Label */}
      <View style={styles.row}>
        <Badge variant='profile-label'>Profile Label</Badge>
        <Badge
          variant='profile-label'
          icon={<CheckIcon color='#000' size={12} />}
        >
          Verified
        </Badge>
      </View>

      {/* Neutral */}
      <View style={styles.row}>
        <Badge variant='neutral'>Neutral</Badge>
      </View>

      {/* Genre Selector */}
      <View style={styles.row}>
        <Badge variant='genre-selector' selected={false}>
          Not Selected
        </Badge>
        <Badge variant='genre-selector' selected={true}>
          Selected
        </Badge>
      </View>

      {/* Green */}
      <View style={styles.row}>
        <Badge variant='green'>Green</Badge>
      </View>

      {/* Red */}
      <View style={styles.row}>
        <Badge variant='red'>Red</Badge>
      </View>

      {/* Example with icon */}
      <View style={styles.row}>
        <Badge variant='green' icon={<CheckIcon color='#DCFD63' size={12} />}>
          With Icon
        </Badge>
        <Badge variant='red' icon={<ArrowUpIcon color='#FD6363' size={12} />}>
          Alert
        </Badge>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 12
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center"
  }
})
