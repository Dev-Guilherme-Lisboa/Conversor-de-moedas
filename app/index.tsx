import { StatusBar } from 'expo-status-bar';

import { CurrencyConverterScreen } from '@/screens/CurrencyConverterScreen';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CurrencyConverterScreen />
    </>
  );
}
