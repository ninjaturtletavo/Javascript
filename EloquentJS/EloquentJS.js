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

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);