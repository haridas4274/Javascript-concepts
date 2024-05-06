// Advanced Level Explanation: reduce executes a reducer function on each element of the array, resulting in a single output value. It's versatile and can be used for various tasks like summing up values, flattening arrays, or accumulating data.


const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// Output: 15 (1 + 2 + 3 + 4 + 5)
