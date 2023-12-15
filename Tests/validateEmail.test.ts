import { validateEmail } from '../Functions/validateEmail';

test('Invalid email returns false', () => {
    expect(validateEmail('invalidemail')).toBe(false);
  });

  test('Email without domain returns false', () => {
    expect(validateEmail('test@')).toBe(false);
  });

  test('Email with special characters returns false', () => {
    expect(validateEmail('test!@example.com')).toBe(false);
  });
