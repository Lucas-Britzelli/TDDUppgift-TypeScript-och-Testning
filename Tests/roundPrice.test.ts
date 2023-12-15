import { roundPrice } from '../Functions/roundPrice';

describe('roundPrice', () => {
    it('rounds and formats a number with several decimal places', () => {
      expect(roundPrice(232.10542)).toBe('232.11 SEK');
    });

    it('formats a whole number with two decimal places', () => {
      expect(roundPrice(14)).toBe('14.00 SEK');
    });

    it('rounds and formats a number with one decimal place', () => {
      expect(roundPrice(1024.2048)).toBe('1024.20 SEK');
    });


  });

  describe('roundPrice with custom format', () => {

    it('formats price with "kr" after the price', () => {
      expect(roundPrice(232.10542, '%PRICE% kr')).toBe('232.11 kr');
    });

    it('formats price with "$" before the price', () => {
      expect(roundPrice(14, '$%PRICE%')).toBe('$14.00');
    });

    it('formats price with "USD" before the price', () => {
      expect(roundPrice(1024.2048, 'USD %PRICE% SEK')).toBe('USD 1024.20 SEK');
    });

    it('formats price with "SEK" after the price', () => {
      expect(roundPrice(1024.2048, '%PRICE% SEK')).toBe('1024.20 SEK');
    });

  });
