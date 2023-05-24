import { BooleanCalculator } from './index';

describe('boolean calculator', () => {
    it('returns a boolean', () => {
        const output = BooleanCalculator.calculate('TRUE')
        expect(typeof output).toBe('boolean');
    })

    describe('Can calculate one-word expression', () => {
        it.each([
            ['TRUE', true],
            ['FALSE', false],
        ])('returns %s for %s expression', (expression, expected) => {
            const output = BooleanCalculator.calculate(expression);
            expect(output).toBe(expected);
        })
    })


    describe('Can calculate expressions with operations', () => {
        it.each([
            ['NOT TRUE', false],
            ['NOT FALSE', true],
            ['NOT NOT FALSE', false],
            ['NOT NOT NOT FALSE', true],
        ])('returns %s for %s expression', (expression, expected) => {
            const output = BooleanCalculator.calculate(expression);
            expect(output).toBe(expected);
        })
    })
})
