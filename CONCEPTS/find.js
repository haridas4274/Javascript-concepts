// Problem: Given an array of numbers, find the largest number.
// Solution: Iterate through the array, keeping track of the largest number found so far.

function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}