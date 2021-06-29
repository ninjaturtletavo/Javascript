//Intro
let total = 0;
let count = 1;

while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total);

//Chapter 2
// while loop
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}

console.log(result);

//for loop
let forLoopResult = 1;
for (
  let forLoopCounter = 0;
  forLoopCounter < 10;
  forLoopCounter = forLoopCounter + 1
) {
  forLoopResult = forLoopResult * 2;
}

console.log(forLoopResult);

// Ch 2 Exercises
//Write a loop that makes seven calls to console.log to output the following triangle
/*
#
##
###
####
#####
######
#######
*/

for (let line = "#"; line.length < 8; line += "#") console.log(line);

/*
FizzBuzz

Write a progrm that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 
(and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by
both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";

  if (i % 5 === 0) output += "Buzz";

  if (i % 3 === 0 && i % 5 === 0) output += "FizzBuzz";

  console.log(output || i);
}
