import { CalendarBlank, MapPin, Ticket } from "phosphor-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

interface UpcomingEventCardProps {
  title: string;
  date: string;
  location: string;
  onClaimAccess?: () => void;
  onAddToCalendar?: () => void;
}

export const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({
  title,
  date,
  location,
  onClaimAccess,
  onAddToCalendar,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Badge variant="green">On Sale</Badge>
      </View>
      <View style={styles.detailsRow}>
        <CalendarBlank size={20} color="#fff" />
        <Text style={styles.detailText}>{date}</Text>
        <MapPin size={20} color="#fff" style={styles.locationIcon} />
        <Text style={styles.detailText}>{location}</Text>
      </View>
      <View style={styles.buttonRow}>
        <Button
          title="Claim Access"
          variant="claim-access"
          icon={<Ticket size={20} color="#000" weight="fill" />}
          onPress={onClaimAccess}
          style={styles.button}
        />
        <Button
          title="Add to Calendar"
          variant="add-to-calendar"
          onPress={onAddToCalendar}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121B2B", // Similar to other cards
    borderRadius: 16,
    padding: 24,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    flexShrink: 1, // Allow title to wrap if long
    marginRight: 10,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    flexWrap: "wrap", // Allow details to wrap
  },
  detailText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
    marginRight: 16,
  },
  locationIcon: {
    marginLeft: 0, // Reset margin for location icon
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  button: {
    flex: 1, // Distribute space evenly
  },
});
