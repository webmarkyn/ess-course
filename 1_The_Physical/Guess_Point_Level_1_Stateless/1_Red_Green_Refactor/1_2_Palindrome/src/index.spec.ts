import isPalindrome from './index';

describe('palindrome checker', () => {
    it('Should know that "mom" is a palindrome', () => {
        expect(isPalindrome('mom')).toBeTruthy();
    });
    it('Should know that "mark" is not a palindrome', () => {
        expect(isPalindrome('mark')).toBeFalsy();
    })
})