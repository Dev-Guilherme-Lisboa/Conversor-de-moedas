import { describe, expect, it } from 'vitest';

import { parseAmount } from '../data/currencyUtils';

describe('parseAmount', () => {
  it('aceita valor decimal com vírgula', () => {
    expect(parseAmount('10,50')).toBe(10.5);
  });

  it('aceita valor com milhares e decimal no padrão brasileiro', () => {
    expect(parseAmount('1.234,56')).toBe(1234.56);
  });

  it('aceita valor decimal com ponto', () => {
    expect(parseAmount('10.50')).toBe(10.5);
  });

  it('retorna NaN para texto que não representa um número', () => {
    expect(Number.isNaN(parseAmount('abc'))).toBe(true);
  });
});
