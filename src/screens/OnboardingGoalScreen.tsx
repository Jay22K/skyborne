import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { useOnboardingStore } from '../store/onboardingSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useDispatch } from 'react-redux';
import { setOnboardingCompleted } from '../store/authSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'OnboardingGoal'>;

export default function OnboardingGoalScreen({ navigation }: Props) {
  const [goal, setGoal] = useState('');
  const { setFirstGoal } = useOnboardingStore();
  const dispatch = useDispatch();

  const next = () => {
    setFirstGoal(goal || 'Learn something new');
    // mark onboarding completed in persisted auth slice
    try {
      dispatch(setOnboardingCompleted(true));
    } catch (e) {
      // ignore in tests
      console.warn('Could not persist onboarding flag', e);
    }
    navigation.replace('Welcome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your first goal?</Text>
      <TextInput placeholder="E.g., Read 12 books" value={goal} onChangeText={setGoal} />
      <Button title="Finish" onPress={next} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
});
