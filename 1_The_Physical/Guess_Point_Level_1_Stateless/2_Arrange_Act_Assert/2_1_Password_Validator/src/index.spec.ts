import validatePassword from './index';

describe('password validator', () => {
    describe('output', () => {
        it('returns an object', () => {
            expect(typeof validatePassword('test')).toEqual('object');
        })
    })
})

