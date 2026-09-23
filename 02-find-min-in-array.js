//Problem:find the smallest number in an array
// Approach: loop through the array, keep track of the largest value seen so far
// Time complexity: O(n)

function findMin(_arr){

    let min = _arr[0];
 for (let i = 1; i < _arr.length; i++) {
  if (_arr[i]  < min) min = _arr[i];
 }
 return min;
}
console.log(findMin([3,7,2,9,4]));
