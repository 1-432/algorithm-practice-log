//Problem 8: Two Sum — Given an array of numbers and a target sum, return the two numbers that add up to the target.

//twoSum([2, 7, 11, 15], 9) → [2, 7]   (because 2 + 7 = 9)

// use a nested loop — for each number, check every other number after it, and see if the pair adds up to the target.

function twoSum(_arr, _target) {
  for (let i = 0; i < _arr.length; i++) {
    for (let j = i + 1; j < _arr.length; j++) {
      if (_arr[i] + _arr[j] === _target) {
        return [_arr[i], _arr[j]];
      }
    }
  }
}
console.log(twoSum([2,7,11,15], 9));