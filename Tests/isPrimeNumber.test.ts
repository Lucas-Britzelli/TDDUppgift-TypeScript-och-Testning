import { isPrimeNumber } from '../Functions/isPrimeNumber';

describe('isPrimeNumber', () => {
    it('returns true for prime numbers', () => {
        const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        primeNumbers.forEach(number => {
            expect(isPrimeNumber(number)).toBe(true)
        })
    })

    it('returns false for non-prime numbers', () => {
        const nonPrimeNumbers = [1, 4, 6, 8, 9, 10, 12, 14, 15]
        nonPrimeNumbers.forEach(number => {
            expect(isPrimeNumber(number)).toBe(false)
        })
    })

    it('returns false for negative numbers', () => {
        expect(isPrimeNumber(-1)).toBe(false)
        expect(isPrimeNumber(-3)).toBe(false)
    })
})
