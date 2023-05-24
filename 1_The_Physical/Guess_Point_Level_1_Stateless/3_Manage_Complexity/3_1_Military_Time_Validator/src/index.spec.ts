import { validateMilitaryTime } from './index';

describe('military time validator', () => {
    describe('validates time range format', () => {
        it.each([
            ['05:39 - 20:42', 'valid', true],
            ['20:30 - 02:15', 'valid', true],
            ['3:20-20:42', 'invalid', false],
            ['05:39---20:42', 'invalid', false],
            ['abc', 'invalid', false],
            ['ab:cd - ef:gh', 'invalid', false],
        ])('knows that input "%s" is in %s time-range format', (input, _, expected) => {
            const output = validateMilitaryTime(input);
            expect(output).toBe(expected);
        })
    })

    describe('validates military time range', () => {
        it.each([
            ['24:39 - 20:42', 'invalid', false],
            ['22:29 - 00:61', 'invalid', false],
            ['-2:29 - 00:-1', 'invalid', false],
            ['01:12 - 14:32', 'valid', true],
            ['22:00 - 23:12', 'valid', true],
        ])('knows that input "%s" is %s military time', (input, _, expected) => {
            const output = validateMilitaryTime(input);
            expect(output).toBe(expected);
        })
    })
})
