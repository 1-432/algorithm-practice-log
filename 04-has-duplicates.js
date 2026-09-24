// Problem: Check if an array contains any duplicate values
// Approach: convert to a Set (removes duplicates automatically), compare sizes
// Time complexity: O(n)

function findDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(findDuplicates([1, 2, 3, 2])); // true
console.log(findDuplicates([1, 2, 3, 4])); // false