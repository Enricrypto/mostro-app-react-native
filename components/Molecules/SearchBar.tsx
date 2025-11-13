import { MagnifyingGlassIcon, XIcon } from "phosphor-react-native";
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  Modal,
} from "react-native";

export interface SearchResult {
  id: string;
  title: string;
}

interface SearchBarProps {
  searchResults: SearchResult[];
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchResults, onSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.searchIconContainer}
        onPress={() => setIsExpanded(true)}
      >
        <MagnifyingGlassIcon size={24} color="#fff" />
      </TouchableOpacity>

      <Modal
        visible={isExpanded}
        transparent
        animationType="fade"
        onRequestClose={() => setIsExpanded(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsExpanded(false)}
        >
          <View style={styles.expandedContainer}>
            <View style={styles.searchInputContainer}>
              <MagnifyingGlassIcon size={24} color="#8A8A8A" />
              <TextInput
                style={styles.input}
                placeholder="Search for artists, songs, etc."
                placeholderTextColor="#8A8A8A"
                value={query}
                onChangeText={handleSearch}
                autoFocus
              />
              <TouchableOpacity onPress={() => setIsExpanded(false)}>
                <XIcon size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={searchResults}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.resultItem}>
                  <Text style={styles.resultText}>{item.title}</Text>
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                query.length > 0 ? (
                  <View style={styles.emptyResultContainer}>
                    <Text style={styles.emptyResultText}>No results found</Text>
                  </View>
                ) : null
              }
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  searchIconContainer: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#0A111F",
    borderWidth: 1,
    borderColor: "#2D3953",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
    paddingTop: 80, // Adjust as needed
  },
  expandedContainer: {
    backgroundColor: "#0A111F",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#121B2B",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    paddingVertical: 12,
    marginLeft: 8,
  },
  resultItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#2D3953",
  },
  resultText: {
    color: "#fff",
    fontSize: 16,
  },
  emptyResultContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  emptyResultText: {
    color: "#8A8A8A",
    fontSize: 16,
  },
});
