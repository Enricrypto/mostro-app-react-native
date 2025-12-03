import { ArrowUpRightIcon } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Button } from '../atoms/Button';
import { ProgressBar } from '../atoms/ProgressBar';


const genres = ["Pop", "Rock", "Jazz", "Classical", "Hip Hop", "Metal"];
export const OnBoardingScreen: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    if (selected.includes(genre)) {
      setSelected(selected.filter(item => item !== genre));
    } else {
      setSelected([...selected, genre]);
    }
  };

  return (
    <Onboarding
      onSkip={onDone}
      onDone={onDone}
      pages={[
        {
          backgroundColor: '#6654D3',
          image: (
            <View style={{ alignItems: 'center', marginTop: -150 }}>

              <View style={{ alignItems: 'center' }}>
                <Image source={require("../../assets/logo.png")} style={styles.logo} />
                <Text style={styles.profileText}>Profile Setup</Text>
                <Text style={styles.stepText}> Step 1 of 4 </Text>
                <ProgressBar
                  progress={10 / 100}
                  color='#71D6FB'
                  backgroundColor='rgba(113, 214, 251, 0.3)'

                />
              </View>

            </View>
          ),
          title:
            <View style={styles.card}>

              <Image
                source={{
                  uri: "https://images.squarespace-cdn.com/content/v1/6853c3da1f8c0d662c1f3cf5/1750320145194-Y00A8JA1HRE5B1L1DZD7/Icon.png",
                }}
                style={styles.Profimage}
              />

              <Text style={{ color: "#fff", fontSize: 24 }}>Let’s get started</Text>
              <Text style={{ color: "#fff", fontSize: 16 }}>Tell us about yourself</Text>


              <View>
                <View>
                  <Text style={{ color: "#fff", fontSize: 14, marginTop: 16, marginBottom: 8 }}>Artist Name*</Text>
                </View>
                <View style={styles.searchContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Your stage name"
                    placeholderTextColor="#fffbfbff"
                  />
                </View>

                <View style={{ marginTop: 24, width: '100%' }}>
                  <Button
                    title='Continue'
                    variant='continue'
                    icon={<ArrowUpRightIcon size={24} color='#01090cff' />}
                    onPress={() => console.log('Pressed ')}
                    style={{ width: "100%" }}
                  />
                </View>
              </View>

            </View>,
          subtitle: (
            <Text style={{ color: '#fff', textAlign: 'center' }}>

            </Text>
          ),
        },
        {
          backgroundColor: '#6654D3',
          image: (
            <View >

              <View style={{ alignItems: 'center'}}>
                <Image source={require("../../assets/logo.png")} style={styles.logo} />
                <Text style={styles.profileText2}>Profile Setup</Text>
                <Text style={styles.stepText}> Step 2 of 4 </Text>
                <ProgressBar
                  progress={10 / 100}
                  color='#71D6FB'
                  backgroundColor='rgba(113, 214, 251, 0.3)' />
                <View style={styles.containerScreen2}>
                  <Text style={styles.musicText}>Your music style</Text>
                  <Text style={styles.helpText}>Help fans discover you</Text>
                  <Text style={styles.primaryGenre}>Primary Genre*</Text>

                  <View style={styles.container}>
                    {genres.map((genre) => (
                      <TouchableOpacity
                        key={genre}
                        style={[
                          styles.option,
                          selected.includes(genre) && styles.optionSelected
                        ]}
                        onPress={() => toggleGenre(genre)}
                      >
                        <Text
                          style={[
                            styles.optionText,
                            selected.includes(genre) && styles.optionTextSelected
                          ]}
                        >
                          {genre}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>View All</Text>
                  </TouchableOpacity>
                  <Text style={{ marginLeft: -280, marginTop: 10, color: '#fff' }}> Bio</Text>
                  <TextInput
                    style={styles.input2}
                    placeholder="Tell your story...What makes your music unique?"
                    placeholderTextColor="#fff"
                    multiline={true}
                    textAlignVertical="top"
                  />
                </View>
              </View>



            </View>
          ),
          title: <Text style={{ color: '#000', fontSize: 24 }}>Stay Connected</Text>,
          subtitle: (
            <Text style={{ color: '#000', textAlign: 'center' }}>
              Chat and collaborate with your team.
            </Text>
          ),
        },
        {
          backgroundColor: '#6654D3',
          image: (
            <View>
              <Text style={{ fontSize: 48 }}>🚀</Text>
            </View>
          ),
          title: <Text style={{ color: '#000', fontSize: 24 }}>Get Started</Text>,
          subtitle: (
            <TouchableOpacity
              style={{
                marginTop: 10,
                backgroundColor: '#fff',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 8,
              }}
              onPress={onDone}
            >
              <Text style={{ color: '#22bcb5', fontWeight: 'bold' }}>
                Let’s Dive In
              </Text>
            </TouchableOpacity>
          ),
        },
      ]}
    />
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 72,
    height: 71,
    resizeMode: 'contain',
  },
  profileText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.6,
    color: '#FFFFFF',
  },
  stepText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.5,
    color: '#FFFFFF',
  },

  card: {
    width: 345,
    height: 393,
    opacity: 1,
    padding: 24,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#998CE1',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Profimage: {
    width: 115,
    height: 115,
    opacity: 1,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',

  },
  searchContainer: {
    width: 297,
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#DCFD63',
    paddingTop: 8,
    paddingRight: 56,
    paddingBottom: 8,
    paddingLeft: 12,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#ffffffff',
  },

  profileText2: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.6,
    color: '#FFFFFF',
  },
  containerScreen2: {
    width: 345,
   
    padding: 24,
    opacity: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#998CE1',
    alignItems: 'center',
  },
  musicText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.5,
    color: '#FFFFFF',
    marginTop: -10,
  },
  helpText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    color: '#FFFFFF',
  },
  primaryGenre: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0,
    color: '#ffffffff',
    marginTop: 7,
    marginLeft: -200,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: -10,
    justifyContent: "center",
  },
  option: {
    width: 300,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 21,
    backgroundColor: "#272659",
    margin: 6,
    alignItems: "center",
  },
  optionSelected: {
    backgroundColor: "#DCFD63",
  },
  optionText: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    color: "#FFFFFF",
  },
  optionTextSelected: {
    color: "#000000",
    fontWeight: "600",
  },
  button: {
    width: 297,
    height: 40,
    opacity: 1,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#71D6FB',
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: "Inter",
    color: '#FFFFFF',
  },
  input2: {
    width: 297,
    height: 106,
    opacity: 1,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#DCFD63',
    paddingTop: 8,
    paddingRight: 56,
    paddingBottom: 8,
    paddingLeft: 12,
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#000000',
    marginTop: 10
  },
});