import isPalindrome from './index';

describe('palindrome checker', () => {
    describe('Palindromes', () => {
        const palindromes = ['mom', 'racecar', 'bob', 'level'];
        it.each(palindromes)('knows that "%s" is a palindrome', (str) => {
            expect(isPalindrome(str)).toBeTruthy();
        });

        describe('Casing', () => {
            const palindromes = ['Mom', 'RaceCar', 'lEVel', 'bOB']
            it.each(palindromes)('knows that "%s" is a palindrome', (str) => {
                expect(isPalindrome(str)).toBeTruthy()
            })
        })
        describe('Spaces', () => {
            const palindromeSentences = ['mr owl ate my metal worm', 'do geese see god', 'was it a car or a cat i saw'];
            it.each(palindromeSentences)('knows that "%s" is a palindrome', (str) => {
                expect(isPalindrome(str)).toBeTruthy()
            })
        })
    })
    describe('Non-palindromes', () => {
        const nonPalindromes = ['mark', 'house', 'book', 'dog'];
        it.each(nonPalindromes)('knows that "%s" isn\'t a palindrome', (str) => {
            expect(isPalindrome(str)).toBeFalsy();
        });
    })
})