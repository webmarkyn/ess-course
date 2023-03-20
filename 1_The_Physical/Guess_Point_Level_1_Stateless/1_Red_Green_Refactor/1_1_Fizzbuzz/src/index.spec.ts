import { fizzbuzz } from './fizzbuzz';

describe("fizzbuzz", () => {
  it('returns a string', () => {
    expect(typeof fizzbuzz([1,3,5])).toBe('string')
  })

  it('returns a "fizz" for multiples of 3', () => {
    const input = [3,6,9,12];
    expect(fizzbuzz(input)).toBe('fizz'.repeat(input.length))
  })

  it('returns a "buzz" for multiples of 5', () => {
    const input = [5,10];
    expect(fizzbuzz(input)).toBe('buzz'.repeat(input.length))
  })
});
