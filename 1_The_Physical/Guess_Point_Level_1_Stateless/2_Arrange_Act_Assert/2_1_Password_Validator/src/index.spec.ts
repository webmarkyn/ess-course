import validatePassword from './index';

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
            const LENGTH_VALIDATION_ERROR = {
                isValid: false,
                errors: ['PWD_LENGTH'],
            }
            it.each(['Abc2', 'A1bcdsdlfsdkfklsdlfsd'])('know thas password "%s" is invalid', (val) => {
                expect(validatePassword(val)).toEqual(LENGTH_VALIDATION_ERROR);
            })
        })
    })
})

