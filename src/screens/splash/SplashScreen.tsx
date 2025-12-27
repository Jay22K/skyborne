import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import GradientBackground from '../../components/GradientBackground';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const t = setTimeout(() => {
      // Decide where to go based on persisted state
      try {
        // Dynamic import to avoid requiring store in tests too early
        const { store } = require('../../store');
        const state = store.getState();
        const loggedIn = state.auth?.loggedIn;
        const onboardingCompleted = state.auth?.onboardingCompleted;

        if (loggedIn) {
          if (onboardingCompleted) navigation.replace('Home');
          else navigation.replace('OnboardingInspiration');
        } else {
          navigation.replace('AuthOptions');
        }
      } catch (e) {
        navigation.replace('AuthOptions');
      }
    }, 1400);
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <GradientBackground>
      <View style={styles.container}>
        {/* Simple inline logo so the app doesn't require an external asset during development */}
        <View style={styles.logo}>
          <Text style={styles.logoText}>SB</Text>
        </View>
        <Text style={styles.title}>Skyborne</Text>
        <Text style={styles.subtitle}>Lift your goals higher ✨</Text>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', flex: 1 },
  logo: { width: 120, height: 120, borderRadius: 24, backgroundColor: '#2f6df6', alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
  logoText: { color: '#fff', fontWeight: '800', fontSize: 28 },
  title: { fontSize: 28, fontWeight: '700' },
  subtitle: { marginTop: 8, color: '#666' },
});
