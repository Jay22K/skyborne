import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { useAuthViewModel } from '../../viewmodels/useAuthViewModel';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import GradientBackground from '../../components/GradientBackground';

type Props = NativeStackScreenProps<RootStackParamList, 'OTP'>;

export default function OTPVerificationScreen({ navigation, route }: Props) {
  const [code, setCode] = useState('');
  const { verifyOtp } = useAuthViewModel();

  const onVerify = async () => {
    const res = await verifyOtp({ code, phone: route.params?.phone });
    if (res?.success) {
      navigation.replace('OnboardingInspiration');
    }
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>Enter the code sent to {route.params?.phone ?? 'your phone'}</Text>
        <TextInput placeholder="Enter OTP" value={code} onChangeText={setCode} keyboardType="number-pad" />
        <Button title="Verify" onPress={onVerify} />
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, justifyContent: 'center', flex: 1 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  subtitle: { color: '#666', marginBottom: 12 },
});
