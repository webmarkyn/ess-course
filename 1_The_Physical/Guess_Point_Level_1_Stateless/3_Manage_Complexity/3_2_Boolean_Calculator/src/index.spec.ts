import BooleanCalculator from './index';

describe('boolean calculator', () => {
    it('returns a boolean', () => {
        const output = BooleanCalculator.calculate('TRUE');
        expect(output).toBe(true);
    })
    describe('Singular operations', () => {
        it.each([
            ['FALSE', false],
            ['TRUE', true],
            ['NOT TRUE', false],
            ['NOT FALSE', true],
            ['TRUE AND FALSE', false],
        ])('is able to evaluate "%s" expression', (expression, expectedOutput) => {
            const output = BooleanCalculator.calculate(expression);
            expect(output).toBe(expectedOutput);
        })
    })
})
