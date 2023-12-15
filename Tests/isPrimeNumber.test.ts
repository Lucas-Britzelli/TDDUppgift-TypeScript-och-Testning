import { isPrimeNumber } from '../Functions/isPrimeNumber';

test ('isPrimeNumber', () => {
    expect(isPrimeNumber(2)).toBe(true);
    expect(isPrimeNumber(1)).toBe(false);
})
