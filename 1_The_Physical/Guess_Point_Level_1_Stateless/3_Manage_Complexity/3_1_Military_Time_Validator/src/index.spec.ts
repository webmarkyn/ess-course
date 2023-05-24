import { validateMilitaryTime } from './index';

describe('military time validator', () => {
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

    it('knows that input "24:39 - 20:42" is invalid military time', () => {
        const output = validateMilitaryTime('24:39 - 20:42');
        expect(output).toBeFalsy();
    })
})
