function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}

export default isPalindrome;