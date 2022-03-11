const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10];
const letters = ["H", "e", "l", "l", "o"];
let sum = 0;
let word = "";

// TODO: Add code below this line to make the tests pass
// Use a for loop to set the sum variable to the sum of all the values in nums
//To write a for loop i aways have to remember the 3 parts
//Thwe initial part
//The conditional part
//The finall part is increament or decreament
//To sum up the values in nums array in to sum varaible
//I have to set the sum variable = sum + nums[i]
//nums[i] stands for all the values in the nums array.

for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}

// Use a for loop to populate doubledNums with every value from nums array doubled (i.e [2, 6, 24, etc...])
//To write a for loop i first need to initailise it, that is where the loop begins.
//The conditional part, where i set the the conditions for the loop e.g how long it's going to run for.
//The final part is what happens as the loop keeps running, e.g. if it's going to increase or decrease.
// After the loop i will then multiply the values of nums by 2 and create a variable to safe it in.
//Finally i will prototype method .push to push my result into doubledNums.
const doubledNums = [];
for (let i = 0; i < nums.length; i++) {
  const newNums = nums[i] * 2;
  doubledNums.push(newNums);
}

// Use a for loop to set word equal to all the letters in the letters array
//To write a loop i need to initialise the loop, it is to tell the loop where to start.
//Then i give it conditions how long to run for.
//The finall part i tell it if to increase or to decrease whiles the loop is running.
//To join all the letters to a single word i will use method call string
word = "";
for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  word += letter;
}

// Use a for loop to populate everySecondNum with every second number from the nums array
//To write a for loop i will first initialise it, meaning where the loop begins.
//Correction:The loop has to start from the second number in the array.
//I will set conditions for the for loop, how long it runs for.
//I will set to increase or decrease so long us it keeps running.
//In this case i set the loop to increase after every other number.
//I will use the prototype method .push to add things to an array.
//i += 2 is the same as i = i + 2, as writen in the loop.
const everySecondNum = [];
for (let i = 1; i < nums.length; i += 2) {
  everySecondNum.push(nums[i]);
}

// Use a for loop to populate numsReversed with the numbers from nums in reverse order
//To write a loop i will first have to initialis it, that is where it should start from.
//In this case the loop will be in reverse form. That means it will start from top to bottom.
//The next thing is to give it conditions, how long it should run for.
//The last  part is to increase or decrease as the loop goes on.
//I have to add things  to an array and to do that i have to use the prototype method call .push.
const numsReversed = [];

for (i = 8; i >= 0; i--) {
  numsReversed.push(nums[i]);
}

// do not change below this line
module.exports = {
  a: sum,
  b: doubledNums,
  c: word,
  d: everySecondNum,
  e: numsReversed,
};

//npx jasmine spec/loops/for-loops-and-arrays.spec.js
