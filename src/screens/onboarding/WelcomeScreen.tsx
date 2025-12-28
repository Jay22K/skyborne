import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import { useOnboardingStore } from '../../store/onboardingSlice';
import GradientBackground from '../../components/GradientBackground';

export default function WelcomeScreen({ navigation }: any) {
  const { inspiration, firstGoal } = useOnboardingStore();

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>We're excited to help you reach: </Text>
        <Text style={{ marginTop: 8, fontWeight: '600' }}>{inspiration}</Text>
        <Text style={{ marginTop: 4, color: '#444' }}>{firstGoal}</Text>
        <View style={{ height: 18 }} />
        <Button title="Go to Home" onPress={() => navigation.replace('Home')} />
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, justifyContent: 'center', flex: 1 },
  title: { fontSize: 26, fontWeight: '800' },
  subtitle: { color: '#666' },
});

