import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ProfileDataCardProps = {
  name: string;
  value: string;
};

export const ProfileDataCard: React.FC<ProfileDataCardProps> = ({ name, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    width: 176,
    height: 88,
    gap: 14, 
    transform: [{ rotate: '0deg' }],
    opacity: 1,
    borderRadius: 10,
    paddingTop: 16,
    paddingRight: 24,
    paddingBottom: 16,
    paddingLeft: 24,
    backgroundColor: '#998CE1',
    flexDirection: 'column', 
  },
  name: {
    fontSize: 12,
     color: '#0a0000ff',
  },
  value: {
    fontSize: 20,
    color: '#0a0000ff',
    fontWeight: 'bold',
    
  },
});
