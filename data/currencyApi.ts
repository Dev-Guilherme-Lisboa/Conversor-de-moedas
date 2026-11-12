export type CurrencyCode = 'BRL' | 'USD' | 'ARS';

export type CurrencyOption = {
  code: CurrencyCode;
  name: string;
  symbol: string;
};

type CurrencyApiItem = {
  iso_code: string;
};

export type CurrencyRate = {
  date: string;
  base: CurrencyCode;
  quote: CurrencyCode;
  rate: number;
};

const API_URL = 'https://api.frankfurter.dev/v2';

export const supportedCurrencies: Record<CurrencyCode, CurrencyOption> = {
  BRL: { code: 'BRL', name: 'Real brasileiro', symbol: 'R$' },
  USD: { code: 'USD', name: 'Dólar americano', symbol: 'US$' },
  ARS: { code: 'ARS', name: 'Peso argentino', symbol: 'ARS$' },
};

export async function getAvailableCurrencies(): Promise<CurrencyCode[]> {
  const response = await fetch(`${API_URL}/currencies`);
  if (!response.ok) throw new Error('Não foi possível carregar as moedas.');

  const data = (await response.json()) as CurrencyApiItem[];
  const available = new Set(data.map((item) => item.iso_code));
  const codes = (Object.keys(supportedCurrencies) as CurrencyCode[]).filter((code) => available.has(code));

  if (codes.length !== 3) throw new Error('A API não disponibilizou BRL, USD e ARS.');
  return codes;
}

export async function getCurrencyRate(base: CurrencyCode, quote: CurrencyCode): Promise<CurrencyRate> {
  const response = await fetch(`${API_URL}/rates?base=${base}&quotes=${quote}`);
  if (!response.ok) throw new Error('Não foi possível consultar a taxa de câmbio.');

  const data = (await response.json()) as CurrencyRate[];
  if (!data[0] || typeof data[0].rate !== 'number') {
    throw new Error('A API retornou uma taxa inválida.');
  }

  return data[0];
}
