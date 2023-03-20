import { fizzbuzz } from './fizzbuzz';

describe("fizzbuzz", () => {
  it('returns a string', () => {
    expect(typeof fizzbuzz([1,3,5])).toBe('string')
  })
});
