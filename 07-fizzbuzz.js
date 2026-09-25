//Problem 7: FizzBuzz — a classic that still shows up in real interviews. Print numbers 1 to 20, but:

//If divisible by 3, print "Fizz" instead of the number
//If divisible by 5, print "Buzz" instead of the number
//i divisible by both 3 and 5, print "FizzBuzz"
//Otherwise, print the number itself

///Hint: use the modulo operator % to check divisibility — num % 3 === 0 means num divides evenly by 3.

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}