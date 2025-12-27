import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import TextInput from '../../components/TextInput.tsx';
import Button from '../../components/Button.tsx';
import { useAuthViewModel } from '../../viewmodels/useAuthViewModel';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import GradientBackground from '../../components/GradientBackground';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

type FormData = { name: string; phone: string };

export default function SignupScreen({ navigation }: Props) {
  const { control, handleSubmit } = useForm<FormData>({ defaultValues: { name: '', phone: '' } });
  const { signup } = useAuthViewModel();

  const onSubmit = async (data: FormData) => {
    const res = await signup(data);
    if (res?.success) {
      navigation.navigate('OTP', { phone: data.phone });
    }
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <TextInput placeholder="Full name" value={value} onChangeText={onChange} />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <TextInput placeholder="Phone number" keyboardType="phone-pad" value={value} onChangeText={onChange} />
          )}
        />
        <Button title="Next" onPress={handleSubmit(onSubmit)} />
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, justifyContent: 'center', flex: 1 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
});
