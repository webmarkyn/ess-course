import validatePassword from './index';

const hasError = (result: { isValid: boolean, errors: string[] }, error: string) => {
    return result.errors.includes(error) && !result.isValid;
}

const isValid = (result: {isValid: boolean, errors: string[] }) => result.isValid && result.errors.length === 0;

describe('password validator', () => {
    const validPwd = 'bc2Eg';
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
            const invalidPwd = 'abcdf';
            it(`knows that password "${invalidPwd}" is invalid`, () => {
                const output = validatePassword(invalidPwd);
                expect(hasError(output, 'NO_UPPERCASE')).toBeTruthy();
            })
        })

        it(`knows that password "${validPwd}" is valid`, () => {
            const output = validatePassword(validPwd);
            expect(isValid(output)).toBeTruthy();
        })
    })
})

