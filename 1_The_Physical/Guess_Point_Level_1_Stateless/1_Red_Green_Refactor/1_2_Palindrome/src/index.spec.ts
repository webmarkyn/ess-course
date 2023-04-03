import isPalindrome from './index';

describe('palindrome checker', () => {
    describe('Should tell that the word is a palindrome', () => {
        const palindromes = ['mom', 'racecar', 'bob', 'level'];
        it.each(palindromes)('knows that "%s" is a palindrome', (str) => {
            expect(isPalindrome(str)).toBeTruthy();
        });
    })
    describe('Should tell that the word is a palindrome', () => {
        const nonPalindromes = ['mark', 'house', 'book', 'dog'];
        it.each(nonPalindromes)('knows that "%s" isn\'t a palindrome', (str) => {
            expect(isPalindrome(str)).toBeFalsy();
        });
    })
    describe('Should ignore the casing of characters', () => {
        const palindromes = ['Mom', 'RaceCar', 'lEVel', 'bOB']
        it.each(palindromes)('knows that "%s" is a palindrome', (str) => {
            expect(isPalindrome(str)).toBeTruthy()
        })
    })
    describe('Should ignore spaces', () => {
        const palindromeSentences = ['mr owl ate my metal worm', 'do geese see god', 'was it a car or a cat i saw'];
        it.each(palindromeSentences)('knows that "%s" is a palindrome', (str) => {
            expect(isPalindrome(str)).toBeTruthy()
        })
    })
})