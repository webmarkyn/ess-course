function isPalindrome(str: string): boolean {
    const lowerCaseStr = str.toLowerCase().replace(/[ ]/g, '');
    return lowerCaseStr === lowerCaseStr.split('').reverse().join('');
}

export default isPalindrome;