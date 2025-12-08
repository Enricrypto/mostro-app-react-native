import { ChartLineUp, HandCoins, MusicNotes, Star, TrendUp, Users } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatsOverview } from '../atoms/StatsOverview';

const statsData = [
    {
        title: 'Market Cap',
        mainStat: '$155K',
        secondaryStat: '+12.5%',
        icon: <ChartLineUp size={20} color="#178875ff" />
    },
    {
        title: 'Token Holders',
        mainStat: '1,247',
        secondaryStat: '+32 this week',
        icon: <Users size={20} color="#DCFD63" />
    },
    {
        title: 'Total Supply',
        mainStat: '100K',
        secondaryStat: 'Fixed',
        icon: <MusicNotes size={20} color="#fff" />
    },
    {
        title: 'Holder Royalties',
        mainStat: '5%',
        secondaryStat: 'per stream',
        icon: <HandCoins size={20} color="#ca7026ff" />
    },
    {
        title: 'Volume (24h)',
        mainStat: '$12.3K',
        secondaryStat: '-5.2%',
        icon: <TrendUp size={20} color="#1b58a7ff" />
    },
    {
        title: 'Featured In',
        mainStat: '3 Plays',
        secondaryStat: 'this month',
        icon: <Star size={20} color="#DCFD63" />
    }
];

export const ArtistStats = () => {
    return (
        <View style={styles.container}>
            {statsData.map((stat, index) => (
                <View key={index} style={styles.statItem}>
                    <StatsOverview {...stat} />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        rowGap: 12,
    },
    statItem: {
        width: '48%', // Roughly 50% to fit two in a row with some gap
    }
});
