import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { CurrencyPicker } from '@/components/CurrencyPicker';
import { PrimaryButton } from '@/components/PrimaryButton';
import { colors } from '@/constants/theme';
import { CurrencyCode } from '@/data/currencyApi';
import { useCurrencyConverter } from '@/data/useCurrencyConverter';
import { styles } from '@/styles/styles';

const names: Record<CurrencyCode, string> = { BRL: 'Real', USD: 'Dólar', ARS: 'Peso' };

function money(value: number, currency: CurrencyCode) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency, maximumFractionDigits: 4 }).format(value);
}

function number(value: number) {
  return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 6 }).format(value);
}

export function CurrencyConverterScreen() {
  const vm = useCurrencyConverter();

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Conversor de moedas</Text>
        </View>
        <Text style={styles.subtitle}>Converta valores entre Real, Dólar e Peso Argentino.</Text>
        <View style={styles.supportedRow}>
          {(['BRL', 'USD', 'ARS'] as CurrencyCode[]).map((code) => <View key={code} style={styles.supportedPill}><Text style={styles.supportedCode}>{code}</Text><Text style={styles.supportedName}>{names[code]}</Text></View>)}
        </View>

        <View style={styles.converterCard}>
          <View style={styles.cardHeadingRow}><View><Text style={styles.cardKicker}>NOVA CONVERSÃO</Text><Text style={styles.cardTitle}>Informe os dados</Text></View></View>
          <Text style={styles.inputLabel}>VALOR</Text>
          <View style={styles.amountField}><TextInput keyboardType="decimal-pad" onChangeText={vm.setAmount} placeholder="Ex.: 100,00" placeholderTextColor={colors.muted} style={styles.amountInput} value={vm.amount} /></View>
          <Text style={styles.helperText}>Use vírgula ou ponto como separador decimal.</Text>
          <View style={styles.currencyRow}>
            <CurrencyPicker disabled={vm.loadingCurrencies} label="De" onChange={vm.setBaseCurrency} options={vm.currencies} value={vm.baseCurrency} />
            <Pressable disabled={vm.loadingCurrencies} onPress={vm.swapCurrencies} style={({ pressed }) => [styles.swapButton, pressed && styles.pressed]}><Text style={styles.swapText}>Trocar</Text></Pressable>
            <CurrencyPicker disabled={vm.loadingCurrencies} label="Para" onChange={vm.setQuoteCurrency} options={vm.currencies} value={vm.quoteCurrency} />
          </View>
          {vm.loadingCurrencies ? <View style={styles.loadingLine}><ActivityIndicator color={colors.primary} size="small" /><Text style={styles.loadingText}>Carregando moedas...</Text></View> : null}
          {vm.error ? <View style={styles.errorBox}><Text style={styles.errorText}>{vm.error}</Text></View> : null}
          <PrimaryButton disabled={vm.loadingCurrencies || vm.converting} label={vm.converting ? 'Consultando taxa...' : 'Converter'} onPress={() => void vm.convert()} />
        </View>

        {vm.result ? <View style={styles.resultCard}>
          <Text style={styles.resultKicker}>RESULTADO</Text>
          <Text style={styles.resultTitle}>{money(vm.result.output, vm.result.quote)}</Text>
          <Text style={styles.resultSummary}>{money(vm.result.input, vm.result.base)} = {money(vm.result.output, vm.result.quote)}</Text>
          <View style={styles.resultDetails}><View style={styles.detailItem}><Text style={styles.detailLabel}>TAXA</Text><Text style={styles.detailValue}>1 {vm.result.base} = {number(vm.result.rate)} {vm.result.quote}</Text></View><View style={styles.detailItem}><Text style={styles.detailLabel}>DATA</Text><Text style={styles.detailValue}>{vm.result.date}</Text></View></View>
        </View> : <View style={styles.emptyCard}><View style={styles.emptyCopy}><Text style={styles.emptyTitle}>O resultado aparecerá aqui</Text><Text style={styles.emptyText}>Informe o valor e escolha as moedas para converter.</Text></View></View>}
      </ScrollView>
    </View>
  );
}
