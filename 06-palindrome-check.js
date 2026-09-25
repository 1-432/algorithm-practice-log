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