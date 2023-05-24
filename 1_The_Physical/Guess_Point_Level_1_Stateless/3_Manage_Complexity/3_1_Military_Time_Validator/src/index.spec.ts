import { validateMilitaryTime } from './index';

describe('military time validator', () => {
    it('knows when input is "05:39 - 20:42" in valid time-range format', () => {
        const output = validateMilitaryTime('05:39 - 20:42');
        expect(output).toBeTruthy();
    })
    it('knows when input "3:20-20:42" is in invalid time-range format', () => {
        const output = validateMilitaryTime('3:20-20:42');
        expect(output).toBeFalsy();
    })
})
