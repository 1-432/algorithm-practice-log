///Problem 6: Palindrome check. Write a function that returns true if a string reads the same forwards and backwards, false otherwise.

///isPalindrome("racecar") → true
///isPalindrome("hello") → false

///Hint: you can reuse your reverseString function from the last problem — a string is a palindrome if it equals its own reverse.

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

function isPalindrome(str) {
  return str === reverseString(str);
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false