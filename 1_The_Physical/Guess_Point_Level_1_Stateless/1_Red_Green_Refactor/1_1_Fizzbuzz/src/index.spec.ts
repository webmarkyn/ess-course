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

  it('returns a "fizzbuzz" for multiples of both 3 and 5', () => {
    const input = [15,30,45];
    expect(fizzbuzz(input)).toBe('fizzbuzz'.repeat(input.length))
  })

  it('returns a number for numbers that are not multiples of 3 or 5', () => {
    const input = [1,2,4,8];
    expect(fizzbuzz(input)).toBe(input.join(''))
  })
});
