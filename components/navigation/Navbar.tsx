import React, { useState } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import { ConnectButton } from "../atoms/ConnectButton";
import { Menu } from "../atoms/Menu";
import { SearchBar, SearchResult } from "../molecules/SearchBar";

const dummySearchResults: SearchResult[] = [
  { id: "1", title: "Atlas Monroe" },
  { id: "2", title: "Liz Cherry" },
  { id: "3", title: "Luna Eclipse" },
  { id: "4", title: "Song: Burning Up" },
  { id: "5", title: "Song: Deeper Kind" },
];

const menuItems = [
    { id: "1", label: "Home", onPress: () => Alert.alert("Navigate to Home") },
    { id: "2", label: "Artists", onPress: () => Alert.alert("Navigate to Artists") },
    { id: "3", label: "Proposals", onPress: () => Alert.alert("Navigate to Proposals") },
    { id: "4", label: "Tokens", onPress: () => Alert.alert("Navigate to Tokens") },
    { id: "5", label: "Profile", onPress: () => Alert.alert("Navigate to Profile") },
];

export const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleConnect = () => {
    setIsConnected(true);
    setAddress("0xf87bA51A3C55662242C244485f42f9532F2F9743");
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setAddress(undefined);
  };

  const handleSearch = (query: string) => {
    if (query) {
      const filteredResults = dummySearchResults.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <View style={styles.rightSection}>
        <SearchBar searchResults={searchResults} onSearch={handleSearch} />
        <ConnectButton
          isConnected={isConnected}
          address={address}
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
        />
        <Menu items={menuItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0A111F",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 16,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
