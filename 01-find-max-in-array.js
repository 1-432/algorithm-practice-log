// Problem: Find the largest number in an array without using Math.max()
// Approach: loop through the array, keep track of the largest value seen so far
// Time complexity: O(n)
function findMax(_arr) {
 let max = _arr[0];
 for (let i = 1; i < _arr.length; i++) {
  if (_arr[i] > max) max = _arr[i];
 }
 return max;
}
console.log(findMax([3,7,2,9,4]));

