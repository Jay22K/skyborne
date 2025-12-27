import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import Button from '../../components/Button';
import GradientBackground from '../../components/GradientBackground';

type Props = NativeStackScreenProps<RootStackParamList, 'AuthOptions'>;

export default function AuthOptionsScreen({ navigation }: Props) {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Let's Get Started</Text>
        <Text style={styles.subtitle}>Create an account to save your progress</Text>

        <Button title="Create account" onPress={() => navigation.navigate('Signup')} />
        <View style={{ height: 12 }} />
        <Button title="Sign in (placeholder)" variant="ghost" onPress={() => navigation.navigate('Welcome')} />
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', padding: 24, flex: 1 },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 6 },
  subtitle: { color: '#666', marginBottom: 18 },
});
