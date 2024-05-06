// Problem: Given a string, check if it's a palindrome (reads the same forwards and backwards).
// Solution: Compare the string with its reversed version

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}