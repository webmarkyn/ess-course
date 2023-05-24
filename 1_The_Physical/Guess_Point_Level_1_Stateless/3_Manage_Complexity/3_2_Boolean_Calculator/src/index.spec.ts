import { BooleanCalculator } from './index';

describe('boolean calculator', () => {
    it('returns a boolean', () => {
        const output = BooleanCalculator.calculate('TRUE')
        expect(typeof output).toBe('boolean');
    })

    it('returns false for "FALSE" expression', () => {
        const output = BooleanCalculator.calculate('FALSE');
        expect(output).toBe(false);
    })
})
