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
import GradientBackground from '../../components/GradientBackground';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'OnboardingInspiration'
>;

const OPTIONS = [
  'Move more & improve flexibility',
  'Get fit & stronger',
  'Eat healthy & feel better',
  'Reduce stress',
  'Build a lasting habit',
  'Just exploring',
];

export default function OnboardingInspirationScreen({
  navigation,
}: Props) {
  const { setInspiration } = useOnboardingStore();
  const [selected, setSelected] = useState<string>('Reduce stress');

  const next = () => {
    setInspiration(selected);
    navigation.navigate('OnboardingGoal');
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
          <Text style={styles.title}>
            What inspired you{'\n'}to join Skyborne?
          </Text>

          {OPTIONS.map((item) => {
            const isSelected = item === selected;
            return (
              <TouchableOpacity
                key={item}
                onPress={() => setSelected(item)}
                style={[
                  styles.optionCard,
                  isSelected && styles.optionSelected,
                ]}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* CTA */}
        <View style={styles.footer}>
          <Button title="Continue" onPress={next} />
        </View>
      </View>
    </GradientBackground>
  );
}



const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  /* HEADER */
  header: {
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
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
    width: '15%',
    height: '100%',
    backgroundColor: '#3A3A3A',
    borderRadius: 3,
  },

  /* CONTENT */
  container: {
    paddingHorizontal: 19,
    paddingTop: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#3A3A3A',
    marginBottom: 24,
    lineHeight: 34,
    textAlign: 'center',
  },

  optionCard: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    marginBottom: 14,
  },
  optionSelected: {
    backgroundColor: 'rgba(181,100,126,0.12)',
    borderWidth: 1,
    borderColor: '#B5647E',
  },
  optionText: {
    fontSize: 15,
    color: '#333',
  },

  /* FOOTER */
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    marginTop: 'auto',
  },
});
