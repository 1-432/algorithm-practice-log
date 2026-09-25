///Problem 5: Reverse a string without using the built-in .reverse() method.

///Example: reverseString("hello") → "olleh"
//hint:use a loop
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}
console.log(reverseString("Leonel"));