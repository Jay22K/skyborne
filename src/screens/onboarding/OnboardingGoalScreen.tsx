import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/Button';
import { useOnboardingStore } from '../../store/onboardingSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useDispatch } from 'react-redux';
import { setOnboardingCompleted } from '../../store/authSlice';
import GradientBackground from '../../components/GradientBackground';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'OnboardingGoal'
>;

const GOALS = [
  'Attend my first session',
  'Build a 7-day streak',
  'Try something new each week',
  'Join a group challenge',
  "I'll decide later",
];

export default function OnboardingGoalScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<string>('Join a group challenge');
  const { setFirstGoal } = useOnboardingStore();
  const dispatch = useDispatch();

  const next = () => {
    setFirstGoal(selected);
    dispatch(setOnboardingCompleted(true));
    navigation.replace('Home');
  };

  return (
    <GradientBackground>
      <View style={styles.screen}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>

          <View style={{ width: 24 }} />
        </View>

        {/* CONTENT */}
        <View style={styles.container}>
          <Text style={styles.title}>Set Your First Goal!</Text>

          <View style={styles.options}>
            {GOALS.map((goal) => {
              const isSelected = selected === goal;
              return (
                <TouchableOpacity
                  key={goal}
                  style={[
                    styles.optionCard,
                    isSelected && styles.optionSelected,
                  ]}
                  onPress={() => setSelected(goal)}
                >
                  <Text style={styles.optionText}>{goal}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* CTA */}
          <View style={styles.footer}>
            <Button title="Continue" onPress={next} />
          </View>
        </View>
      </View>
    </GradientBackground >
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 110,
    paddingHorizontal: 16,
  },
  backIcon: {
    fontSize: 28,
    color: '#3A3A3A',
  },
  progressTrack: {
    flex: 1,
    height: 6,
    backgroundColor: '#E6E6E6',
    borderRadius: 3,
    marginHorizontal: 72,
  },
  progressFill: {
    width: '35%', // later step than inspiration screen
    height: '100%',
    backgroundColor: '#3A3A3A',
    borderRadius: 3,
  },
  container: {
    paddingHorizontal: 22,
    paddingTop: 20,
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#3A3A3A',
    marginBottom: 24,
    textAlign: 'center',

  },
  options: {
    flex: 1,
  },
  optionCard: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
  optionSelected: {
    backgroundColor: 'rgba(181,100,126,0.08)',
    borderWidth: 1,
    borderColor: '#B5647E',
  },
  optionText: {
    fontSize: 15,
    color: '#3A3A3A',
  },
  footer: {
    paddingHorizontal: 6,
    paddingBottom: 24,
    // marginTop: 'auto',
  },
});
