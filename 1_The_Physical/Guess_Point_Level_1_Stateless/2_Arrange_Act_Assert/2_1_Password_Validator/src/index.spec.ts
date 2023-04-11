import validatePassword from './index';

const hasError = (result: { isValid: boolean, errors: string[] }, error: string) => {
    return result.errors.includes(error) && !result.isValid;
}

describe('password validator', () => {
    describe('output', () => {
        it('returns an object', () => {
            expect(typeof validatePassword('test')).toEqual('object');
        })
        it('returns an object with "isValid" property of boolean type', () => {
            expect(typeof validatePassword('test')?.isValid).toEqual('boolean');
        })
        it('returns an object with "errors" property of array type', () => {
            expect(Array.isArray(validatePassword('test')?.errors)).toBeTruthy();
        })
    })
    describe('logic', () => {
        describe('length validation', () => {
            it.each(['Abc2', 'A1bcdsdlfsdkfklsdlfsd'])('know thas password "%s" is invalid', (val) => {
                const output = validatePassword(val);
                expect(hasError(output, 'PWD_LENGTH')).toBeTruthy();
            })
        })
        describe('uppercase validation', () => {
            const INVALID_PWD = 'abcdf';
            it(`knows that password "${INVALID_PWD}" is invalid`, () => {
                const output = validatePassword(INVALID_PWD);
                expect(hasError(output, 'NO_UPPERCASE')).toBeTruthy();
            })
        })
    })
})

