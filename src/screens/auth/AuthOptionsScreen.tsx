import React from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image, ImageSourcePropType } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import GradientBackground from '../../components/GradientBackground';

type Props = NativeStackScreenProps<RootStackParamList, 'AuthOptions'>;

type AuthButtonProps = {
  icon: string | ImageSourcePropType;
  text: string;
}

const AuthButton = ({ icon, text }: AuthButtonProps) => (
  <TouchableOpacity style={styles.authButton}>
    {typeof icon === 'string' ? (
      <ThemedText style={styles.authButtonIcon}>
        {icon}
      </ThemedText>
    ) : (
      <Image source={icon} style={styles.authButtonImage} />
    )}
    <ThemedText weight="medium" style={styles.authButtonText}>
      {text}
    </ThemedText>
  </TouchableOpacity>
);

export default function AuthOptionsScreen({ navigation }: Props) {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          <ThemedText weight="medium" style={styles.appName}>Skyborne Drop</ThemedText>
        </View>

        <View style={styles.content}>
          <ThemedText weight="bold" style={styles.title}>Let’s Get Started</ThemedText>
          <ThemedText style={styles.subtitle}>Let’s dive into your account</ThemedText>

          <View style={styles.authButtonsContainer}>
            <AuthButton icon={require('../../assets/icons/apple.png')} text="Continue with Apple" />
            <AuthButton icon={require('../../assets/icons/google.png')} text="Continue with Google" />
            <AuthButton icon={require('../../assets/icons/facebook.png')} text="Continue with Facebook" />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Welcome')}>
            <ThemedText weight="medium" style={styles.loginButtonText}>Login</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <ThemedText weight="medium" style={styles.signupText}>Signup</ThemedText>
          </TouchableOpacity>
        </View>

        <ThemedText style={styles.legalText}>
          By continuing, you agree to Skyborne drop Terms of Service and Privacy Policy
        </ThemedText>
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',        // 👈 puts logo + text in one row
    alignItems: 'center',        // vertical alignment
    justifyContent: 'center',    // center horizontally
    marginTop: 40,
    marginBottom: 70,
  },
  logo: {
    width: 70,
    height: 75,
    resizeMode: 'contain',
    marginRight: 8,              // spacing between logo and text
  },
  appName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3C3C3C',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 30,
  },
  authButtonsContainer: {
    width: '85%',
    marginBottom: 20,
  },
  authButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    backgroundColor: '#F7F7F7',
    borderRadius: 27,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  authButtonIcon: {
    fontSize: 22,
    marginRight: 12,
  },
  authButtonImage: {
    width: 24, // Example width
    height: 24, // Example height
    marginRight: 12,
    resizeMode: 'contain',
  },
  authButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  loginButton: {
    width: '85%',
    height: 56,
    backgroundColor: '#b95d82',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signupText: {
    color: '#b95d82',
    fontSize: 16,
    fontWeight: '500',
  },
  legalText: {
    position: 'absolute',
    bottom: 30,
    fontSize: 12,
    color: '#AAAAAA',
    textAlign: 'center',
    width: '80%',
  },
});
