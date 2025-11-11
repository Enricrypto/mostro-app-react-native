import { LinearGradient } from 'expo-linear-gradient';
import { ArrowSquareOutIcon, WalletIcon } from "phosphor-react-native";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type ProfileCardProps = {
    imageUrl: string;
    Name: string;
    userName: string;
    urlLink: string;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, Name, userName, urlLink }) => {
    return (
        <LinearGradient
            colors={['#352B6D', '#6654D3']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.container}
        >
            <View style={styles.layout}>
                <Image source={{ uri: imageUrl }} style={styles.profileImage} />
                <View>
                    <Text style={styles.name}>{Name}</Text>
                </View>
                <View>
                    <Text style={styles.username}>{userName}</Text>
                </View>
                <View style={styles.inlineRow}>
                    <WalletIcon size={24} color="#FFFFFF" />
                    <Text style={styles.urlLink}>{urlLink}</Text>
                    <ArrowSquareOutIcon size={24} color="#FFFFFF" />
                </View>
                <View style={styles.buttonDisconnect}>
                    <TouchableOpacity style={styles.buttonDisconnect}>
                        <Text >Disconnect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 361,
        height: 372,
        borderRadius: 10,
        paddingTop: 24,
        paddingRight: 16,
        paddingBottom: 24,
        paddingLeft: 16,
        opacity: 1,
        transform: [{ rotate: '0deg' }],
        flexDirection: 'column',
        gap: 24,
    },
    layout: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        gap: 8,
    },
    profileImage: {
        width: 148,
        height: 148,
        borderRadius: 26,
        opacity: 1,
        transform: [{ rotate: '0deg' }],
        marginBottom: 16,
    },
    name: {
        fontFamily: 'Inter', // Make sure Inter is loaded via custom fonts
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: -0.6,
        color: '#FFFFFF',
    },
    username: {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
        color: '#FFFFFF',
    },
    inlineRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    urlLink: {
        fontFamily: 'Inter',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
        color: '#FFFFFF',
        textOverflow: 'ellipsis',
    },
    buttonDisconnect: {
        width: 170,
        height: 40,
        borderRadius: 6,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        backgroundColor: '#71D6FB',
        opacity: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    buttonText: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0,
        color: '#0A111F',
    }
});
