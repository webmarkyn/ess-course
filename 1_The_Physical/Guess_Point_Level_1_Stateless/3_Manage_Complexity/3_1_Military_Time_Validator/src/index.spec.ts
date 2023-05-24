import { validateMilitaryTime } from './index';

describe('military time validator', () => {
    it('knows when input is "05:39 - 20:42" in valid time-range format', () => {
        const output = validateMilitaryTime('05:39 - 20:42');
        expect(output).toBeTruthy();
    })
})
