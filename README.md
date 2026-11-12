# Conversor de Moedas

Aplicativo React Native com Expo para converter entre Real brasileiro (BRL), Dólar americano (USD) e Peso argentino (ARS).

## Estrutura

```text
app/
  _layout.tsx
  index.tsx
assets/
components/
  CurrencyPicker.tsx
  PrimaryButton.tsx
constants/
  theme.ts
data/
  currencyApi.ts
  currencyUtils.ts
  useCurrencyConverter.ts
screens/
  CurrencyConverterScreen.tsx
styles/
  styles.ts
tests/
  currencyConverter.test.ts
```

## Instalação

```bash
npm install
```

Se estiver usando pnpm:

```bash
pnpm install
```

## Execução

```bash
npm run dev
```

Ou:

```bash
pnpm dev
```

O aplicativo usa a API pública Frankfurter para consultar as taxas de câmbio.
