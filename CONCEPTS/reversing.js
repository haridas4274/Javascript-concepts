// Problem: Given a string, reverse it.
// Solution: Iterate through the string and concatenate characters in reverse order.

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
