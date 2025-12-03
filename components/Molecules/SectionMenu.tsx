import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Badge } from '../atoms/Badge';

const menuItems = ["Music", "Community", "Proposals", "Token"];

interface SectionMenuProps {
    onSelectSection?: (section: string) => void;
}

export const SectionMenu: React.FC<SectionMenuProps> = ({ onSelectSection }) => {
    const [selectedSection, setSelectedSection] = useState("Music");

    const handleSelectSection = (section: string) => {
        setSelectedSection(section);
        if (onSelectSection) {
            onSelectSection(section);
        }
    };

    return (
        <View style={styles.container}>
            {menuItems.map((item) => (
                <TouchableOpacity key={item} onPress={() => handleSelectSection(item)} activeOpacity={0.8}>
                    <Badge
                        variant="section-menu-item"
                        selected={selectedSection === item}
                        textStyle={{fontSize: 16, fontWeight: '600'}}
                    >
                        {item}
                    </Badge>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#2D3953'
    },
});
