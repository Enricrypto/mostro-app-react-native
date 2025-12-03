import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Badge } from '../atoms/Badge';

const genres = ["All Genres", "Pop", "Rock", "Hip Hop", "Electronic", "Jazz", "Classical", "RnB"];

interface GenreSearchBarProps {
    onSelectGenre?: (genre: string) => void;
}

export const GenreSearchBar: React.FC<GenreSearchBarProps> = ({ onSelectGenre }) => {
    const [selectedGenre, setSelectedGenre] = useState("All Genres");

    const handleSelectGenre = (genre: string) => {
        setSelectedGenre(genre);
        if (onSelectGenre) {
            onSelectGenre(genre);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={true} contentContainerStyle={styles.scrollContainer}>
                {genres.map((genre) => (
                    <TouchableOpacity key={genre} onPress={() => handleSelectGenre(genre)} activeOpacity={0.8}>
                        <Badge
                            variant="genre-selector"
                            selected={selectedGenre === genre}
                        >
                            {genre}
                        </Badge>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    scrollContainer: {
        flexDirection: 'row',
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
