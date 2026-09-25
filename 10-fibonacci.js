//Problem 10 — the last one for this round: Fibonacci sequence (recursive).

//The Fibonacci sequence: each number is the sum of the two before it — 0, 1, 1, 2, 3, 5, 8, 13...

//Recursive idea, same shape as factorial:

//Base case: fibonacci(0) returns 0, fibonacci(1) returns 1 (these don't need any calculation)
//Recursive case: fibonacci(n) equals fibonacci(n-1) + fibonacci(n-2)

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));