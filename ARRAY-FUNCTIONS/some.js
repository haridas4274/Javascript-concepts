//The some method checks if at least one element in the array satisfies a given condition specified by the provided callback function. It returns true if any element meets the condition; otherwise, it returns false.

const numbers = [1, 2, 3, 4, 5];
const hasNegative = numbers.some((num) => num < 0);
console.log(hasNegative);
// Output: false (no negative numbers)
