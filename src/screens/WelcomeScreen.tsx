import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { useOnboardingStore } from '../store/onboardingSlice';

export default function WelcomeScreen({ navigation }: any) {
  const { inspiration, firstGoal } = useOnboardingStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>We're excited to help you reach: </Text>
      <Text style={{ marginTop: 8, fontWeight: '600' }}>{inspiration}</Text>
      <Text style={{ marginTop: 4, color: '#444' }}>{firstGoal}</Text>
      <View style={{ height: 18 }} />
      <Button title="Go to Home" onPress={() => navigation.replace('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: '800' },
  subtitle: { color: '#666' },
});
