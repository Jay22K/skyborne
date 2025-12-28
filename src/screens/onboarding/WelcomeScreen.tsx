import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, StatusBar, SafeAreaView } from 'react-native';
import Button from '../../components/Button';
import GradientBackground from '../../components/GradientBackground';
import { FontFamilies } from '../../constants/fonts';

const { width } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }: any) {
  const handleGetStarted = () => {
    // Placeholder for navigation logic, e.g., to signup or home
    console.log('Get Started Pressed!');
    navigation.replace('AuthOptions'); // Example navigation
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <GradientBackground>
        <View style={styles.container}>


          {/* Image Card */}
          <View style={styles.imageCardContainer}>
            <Image
              source={require('../../assets/images/community.jpg')} // community.jpg image
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          {/* Headline */}
          <Text style={styles.headline}>Welcome to Skyborne Drop</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Your journey to holistic wellness starts here. Yoga, fitness, dance, and nutrition all in one place.
          </Text>

          {/* Call-to-action Button */}
          <Button
            title="Get Started"
            onPress={handleGetStarted}
            style={styles.getStartedButton}
            textStyle={styles.getStartedButtonText}
          />
        </View>
      </GradientBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40, // Add some bottom padding for the button
  },
  statusBarPlaceholder: {
    width: '100%',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  statusBarTime: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3A3A3A',
  },
  statusBarIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  statusBarIconText: {
    fontSize: 14,
    color: '#3A3A3A',
  },
  imageCardContainer: {
    borderRadius: 24,
    overflow: 'hidden', // Ensures the image respects borderRadius
    width: width * 0.85, // Adjust as needed
    height: width * 0.65 * 1.9, // Portrait aspect ratio (e.g., 250x350)
    marginBottom: 20,
    marginTop: 90, // Space from status bar
    // backgroundColor: '#fff', // A subtle background for elevation effect
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.05,
    // shadowRadius: 8,
    elevation: 0, // Android shadow
  },
  image: {
    width: '100%',
    height: '100%',
  },
  headline: {
    fontFamily: FontFamilies.SatoshiBold,
    fontSize: 24,
    color: '#3A3A3A',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: FontFamilies.SatoshiRegular,
    fontSize: 12,
    color: '#8A8A8A',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
    marginBottom: 40,
  },
  getStartedButton: {
    width: width * 0.85, // ~80-85% of screen width
    height: 56,
    borderRadius: 28, // Pill shape
    backgroundColor: '#B5647E', // Muted rose / mauve
  },
  getStartedButtonText: {
    color: '#fff',
    fontWeight: '600', // Medium to semi-bold
    fontSize: 16,
    fontFamily: FontFamilies.SatoshiMedium, // Using SatoshiMedium for button text
  },
});

