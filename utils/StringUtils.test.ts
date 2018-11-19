import { capitalizeFirstLetter } from './StringUtils';

describe('capitalizeFirstLetter', () => {
  test('invalid string', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  test('one char string', () => {
    expect(capitalizeFirstLetter('a')).toBe('A');
  });

  test('normal string', () => {
    expect(capitalizeFirstLetter('a test')).toBe('A test');
  });
});
