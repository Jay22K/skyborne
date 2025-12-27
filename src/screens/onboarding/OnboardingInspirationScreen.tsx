import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import { useOnboardingStore } from '../../store/onboardingSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import GradientBackground from '../../components/GradientBackground';

type Props = NativeStackScreenProps<RootStackParamList, 'OnboardingInspiration'>;

export default function OnboardingInspirationScreen({ navigation }: Props) {
  const { setInspiration } = useOnboardingStore();

  const next = () => {
    setInspiration('I want to build a better life');
    navigation.navigate('OnboardingGoal');
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>What inspires you?</Text>
        <Text style={styles.subtitle}>Pick one to get a tailored experience.</Text>
        {/* Replace with selectable options in a real app */}
        <Button title="I want to grow personally" onPress={next} />
        <View style={{ height: 10 }} />
        <Button title="I want to improve my career" onPress={next} />
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, justifyContent: 'center', flex: 1 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  subtitle: { color: '#666', marginBottom: 18 },
});
