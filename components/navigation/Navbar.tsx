import React, { useState } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import { ConnectButton } from "../atoms/ConnectButton";
import { Menu } from "../atoms/Menu";
import { SearchBar, SearchResult } from "../Molecules/SearchBar";

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
  width: 361,
    height: 73,
    backgroundColor: "#121B2B",
    flexDirection: "row",          
    alignItems: "center",         
    justifyContent: "space-between", 
    borderColor: "#2D3953",
    borderWidth: 2,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,   
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3.5,
      },
});
