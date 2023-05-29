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
            ['TRUE AND TRUE', true],
            ['TRUE OR FALSE', true]
        ])('is able to evaluate "%s" expression', (expression, expectedOutput) => {
            const output = BooleanCalculator.calculate(expression);
            expect(output).toBe(expectedOutput);
        })
    })

    describe('Multiple operations', () => {
        it.each([
            ['FALSE OR TRUE AND TRUE', true],
            ['TRUE OR TRUE AND FALSE', false],
            ['TRUE AND NOT FALSE', true],
            ['FALSE OR FALSE OR NOT FALSE', true]
        ])('is able to evaluate "%s" expression', (expression, expectedOutput) => {
            const output = BooleanCalculator.calculate(expression);
            expect(output).toBe(expectedOutput);
        })
    })
})
