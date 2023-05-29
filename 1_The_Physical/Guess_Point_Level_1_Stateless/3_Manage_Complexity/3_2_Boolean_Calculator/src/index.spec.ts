import BooleanCalculator from './index';

describe('boolean calculator', () => {
    it('returns a boolean', () => {
        const output = BooleanCalculator.calculate('TRUE');
        expect(output).toBe(true);
    })
    it('is able to evaluate "FALSE" expression', () => {
        const output = BooleanCalculator.calculate('FALSE');
        expect(output).toBe(false);
    });
})
