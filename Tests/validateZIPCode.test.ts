import { validateZip } from '../Functions/validateZIPCode';

describe('validateZip', () => {
    it('returns true for a valid 5-digit ZIP code', () => {
      expect(validateZip('12345')).toBe(true);
    });

    it('returns false for a ZIP code with less than 5 digits', () => {
      expect(validateZip('1234')).toBe(false);
    });

    it('returns false for a ZIP code with more than 5 digits', () => {
      expect(validateZip('123456')).toBe(false);
    });

    it('returns false for a non-numeric ZIP code', () => {
      expect(validateZip('abcde')).toBe(false);
    });
  });
