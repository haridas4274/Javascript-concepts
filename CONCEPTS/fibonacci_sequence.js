// Problem: Generate the Fibonacci sequence up to a certain number of terms.
// Solution: Use a loop to generate Fibonacci numbers

function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
