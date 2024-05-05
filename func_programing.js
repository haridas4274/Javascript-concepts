// Function that takes another function as an argument
function applyOperation(x, y, operation) {
    return operation(x, y);
}

// Functions to pass as arguments
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

// Using higher-order function
console.log(applyOperation(2, 3, add)); // Output: 5
console.log(applyOperation(2, 3, multiply)); // Output: 6