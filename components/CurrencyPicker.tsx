import { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

import { CurrencyCode, CurrencyOption } from '@/data/currencyApi';
import { styles } from '@/styles/styles';

type CurrencyPickerProps = {
  label: string;
  value: CurrencyCode;
  options: CurrencyOption[];
  disabled?: boolean;
  onChange: (value: CurrencyCode) => void;
};

export function CurrencyPicker({ label, value, options, disabled = false, onChange }: CurrencyPickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.pickerWrapper}>
      <Text style={styles.pickerLabel}>{label}</Text>
      <Pressable
        disabled={disabled}
        onPress={() => setOpen(true)}
        style={({ pressed }) => [styles.pickerField, disabled && styles.pickerDisabled, pressed && styles.pressed]}
      >
        <Text style={styles.pickerCode}>{value}</Text>
        <View style={styles.pickerSpacer} />
        <Text style={styles.pickerArrow}>▼</Text>
      </Pressable>

      <Modal animationType="fade" transparent visible={open} onRequestClose={() => setOpen(false)}>
        <Pressable onPress={() => setOpen(false)} style={styles.overlay}>
          <Pressable onPress={(event) => event.stopPropagation()} style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalKicker}>ESCOLHA UMA MOEDA</Text>
                <Text style={styles.modalTitle}>{label}</Text>
              </View>
              <Pressable onPress={() => setOpen(false)} style={styles.closeButton}>
                <Text style={styles.closeText}>Fechar</Text>
              </Pressable>
            </View>
            {options.map((option) => (
              <Pressable
                key={option.code}
                onPress={() => { onChange(option.code); setOpen(false); }}
                style={({ pressed }) => [styles.option, option.code === value && styles.selectedOption, pressed && styles.pressed]}
              >
                <Text style={styles.optionCode}>{option.code}</Text>
                <Text style={styles.optionName}>{option.name}</Text>
                {option.code === value ? <Text style={styles.selectedText}>Selecionada</Text> : null}
              </Pressable>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
