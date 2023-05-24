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

    it('returns true for "NOT FALSE" expression', () => {
        const output = BooleanCalculator.calculate('NOT FALSE')
        expect(output).toBe(true);
    })
})
