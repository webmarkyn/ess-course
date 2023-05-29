import BooleanCalculator from './index';

describe('boolean calculator', () => {
    it('returns a boolean', () => {
        const output = BooleanCalculator.calculate('TRUE');
        expect(output).toBe(true);
    })
})
