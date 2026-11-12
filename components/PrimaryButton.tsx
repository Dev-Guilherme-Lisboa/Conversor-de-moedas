import { Pressable, Text } from 'react-native';

import { styles } from '@/styles/styles';

type PrimaryButtonProps = {
  label: string;
  disabled?: boolean;
  onPress: () => void;
};

export function PrimaryButton({ label, disabled = false, onPress }: PrimaryButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [styles.button, disabled && styles.disabled, pressed && styles.pressed]}
    >
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
}
