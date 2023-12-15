import { validateZIPCode } from '../Functions/validateZIPCode';

describe('validateZip', () => {
    it('returns true for a valid 5-digit ZIP code', () => {
      expect(validateZIPCode('12345')).toBe(true);
    });

    it('returns false for a ZIP code with less than 5 digits', () => {
      expect(validateZIPCode('1234')).toBe(false);
    });

    it('returns false for a ZIP code with more than 5 digits', () => {
      expect(validateZIPCode('123456')).toBe(false);
    });

    it('returns false for a non-numeric ZIP code', () => {
      expect(validateZIPCode('abcde')).toBe(false);
    });
  });
