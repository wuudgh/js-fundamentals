const numsZeroToThree = [];
const numsFiveToTen = [];
const evenNums = [];
const countdown = [];

// TODO: Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
// TO add array in to numZeroToThree variable i have to use  a method call .push
//i have to write a for loop and a for loop has three parts the first part is the initial part,
// the conditional part and the final part which will increase or decrease as the loop goes on
for (let i = 0; i <= 3; i++) {
  numsZeroToThree.push(i);
}

// TODO: Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
// To add an array to numFiveToTen array i have to use a prototype method call .push
// I will also need a for loop which consists of three parts
//The intial parts that is where the loop beginds
//The conditional part where you get to set conditions for loop.
//The final part is where you decide to increase or dicrease in the loop.
for (let i = 5; i <= 10; i++) {
  numsFiveToTen.push(i);
}

// TODO: Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
//To write a for loop i must first consider the 3 parts of the for loop:
// The fist part is the initail part, where the loop begins.
//The conditional part, where you make the looping conditions.
//The final part is where you increase or decrease.
//I want to loop through only even numbers from 0 to 6
//I will write an if statement to say print out numbers from 0 to 6 that can go in to 2 without a remender.
//Correction:I will write  an if statement  which will say print out all the even numbers from 0 t0 6.
//To do that i have to use the remainder operator.
//To add an array to evenNums array i have to use a prototype method call .push

for (let i = 0; i <= 6; i++) {
  const even = i;
  if (even % 2 === 0) {
    evenNums.push(even);
  }
}

// TODO: Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
// We add things to an array by using .push() method.
//This time i have to write a for loop that is going to countdown from 3 to 0.
//First i  have to initialise from the top down wards since it is a countdown
//Then i give it a condition to be > or = 0,
//The last part will be  decreamenting since the loop starts from top bottom

for (let i = 3; i >= 0; i--) {
  countdown.push(i);
}

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown,
};
