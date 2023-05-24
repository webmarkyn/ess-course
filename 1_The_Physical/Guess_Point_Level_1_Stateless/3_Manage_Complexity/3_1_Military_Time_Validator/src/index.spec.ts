import { validateMilitaryTime } from './index';

describe('military time validator', () => {
    it.each([
        ['05:39 - 20:42', 'valid', true],
        ['3:20-20:42', 'invalid', false],
        ['05:39---20:42', 'invalid', false],
    ])('knows that input is "%s" in %s time-range format', (input, _, expected) => {
        const output = validateMilitaryTime(input);
        expect(output).toBe(expected);
    })
})
