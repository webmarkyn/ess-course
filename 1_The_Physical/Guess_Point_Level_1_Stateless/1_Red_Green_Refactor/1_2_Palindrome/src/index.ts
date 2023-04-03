function isPalindrome(str: string): boolean {
    const lowerCaseStr = str.toLowerCase();
    return lowerCaseStr === lowerCaseStr.split('').reverse().join('');
}

export default isPalindrome;