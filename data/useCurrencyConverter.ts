import { useCallback, useEffect, useState } from 'react';

import {
  CurrencyCode,
  CurrencyOption,
  getAvailableCurrencies,
  getCurrencyRate,
  supportedCurrencies,
} from '@/data/currencyApi';
import { parseAmount } from '@/data/currencyUtils';

export type ConversionResult = {
  input: number;
  output: number;
  rate: number;
  date: string;
  base: CurrencyCode;
  quote: CurrencyCode;
};

export function useCurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState<CurrencyCode>('BRL');
  const [quoteCurrency, setQuoteCurrency] = useState<CurrencyCode>('USD');
  const [currencies, setCurrencies] = useState<CurrencyOption[]>([]);
  const [loadingCurrencies, setLoadingCurrencies] = useState(true);
  const [converting, setConverting] = useState(false);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState('');

  const loadCurrencies = useCallback(async () => {
    setLoadingCurrencies(true);
    setError('');
    try {
      const codes = await getAvailableCurrencies();
      setCurrencies(codes.map((code) => supportedCurrencies[code]));
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Erro ao carregar as moedas.');
    } finally {
      setLoadingCurrencies(false);
    }
  }, []);

  useEffect(() => {
    void loadCurrencies();
  }, [loadCurrencies]);

  const convert = useCallback(async () => {
    const numericAmount = parseAmount(amount);
    setError('');
    setResult(null);

    if (!amount.trim() || Number.isNaN(numericAmount) || numericAmount <= 0) {
      setError('Digite um valor numérico maior que zero.');
      return;
    }
    if (baseCurrency === quoteCurrency) {
      setError('Escolha moedas de origem e destino diferentes.');
      return;
    }

    setConverting(true);
    try {
      const rate = await getCurrencyRate(baseCurrency, quoteCurrency);
      setResult({
        input: numericAmount,
        output: numericAmount * rate.rate,
        rate: rate.rate,
        date: rate.date,
        base: baseCurrency,
        quote: quoteCurrency,
      });
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Erro ao converter o valor.');
    } finally {
      setConverting(false);
    }
  }, [amount, baseCurrency, quoteCurrency]);

  const swapCurrencies = useCallback(() => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
    setResult(null);
    setError('');
  }, [baseCurrency, quoteCurrency]);

  return {
    amount,
    setAmount,
    baseCurrency,
    setBaseCurrency,
    quoteCurrency,
    setQuoteCurrency,
    currencies,
    loadingCurrencies,
    converting,
    result,
    error,
    convert,
    loadCurrencies,
    swapCurrencies,
  };
}
