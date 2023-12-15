import { createGenetiveName } from '../Functions/createGenetiveName';

test ('createGenetivName', () => {
    expect(createGenetiveName('Johan')).toBe('Johans');
})
