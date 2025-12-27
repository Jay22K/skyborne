import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

export default function Button({ title, onPress, variant }: { title: string; onPress?: () => void; variant?: 'primary' | 'ghost' }) {
  const style: ViewStyle = variant === 'ghost' ? styles.ghost : styles.primary;
  return (
    <TouchableOpacity activeOpacity={0.85} style={[styles.button, style]} onPress={onPress}>
      <Text style={variant === 'ghost' ? styles.ghostText : styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { padding: 12, borderRadius: 8, alignItems: 'center' },
  primary: { backgroundColor: '#2f6df6' },
  ghost: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#2f6df6' },
  text: { color: '#fff', fontWeight: '700' },
  ghostText: { color: '#2f6df6', fontWeight: '700' },
});
