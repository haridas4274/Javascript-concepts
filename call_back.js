// // Modern callback function using filter
const numbersDemo = [1, 2, 3, 4, 5, 6];

const evenNumbersDemo = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbersDemo); // Output: [2, 4, 6]


//manual way callback function
// Older function-style approach for callback function
const numbers = [1, 2, 3, 4, 5, 6];

function isEven(num) {
    return num % 2 === 0;
}

const evenNumbers = filterArray(numbers, isEven);

console.log(evenNumbers); // Output: [2, 4, 6]

// Older implementation of filter function
function filterArray(array, callback) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
