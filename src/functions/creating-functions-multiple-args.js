// define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
//To write a a function i first need the function key word
//then the name i give to the function.
//Two pair of brackets where i write the parameters or the input.
//Another pair of curlly brackets where i write the block of code telling the function what i want it to do.
//The last part is the return,  where i write the  output of the function.
//I will also need a for loop which begins from lower to upper
//So i will initialise is from lower.
//And make it run to less than or equals to upper.
//I keep increasing any time the loop runs.
//I also need to create an empty array where i push all the output on.
//I also need a prototype method .push().

function lowerUpper(lower, upper) {
  let nums = [];
  for (let i = lower; i <= upper; i++) {
    nums.push(i);
  }
  return nums;
}
// define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
//To write a function i need the function key word.
//I also need to give the function a name.
//The function will also need a pair of bracket () where i write the parameters or the input.
//I will also need a pair of curly brackets where i write the block of code tell the function what i want it to do.
//I last part is the return where i return the out put of the function.
//To turn a string of lowercase to uppercase i need a prototype method call toUpperCase()
// I will also need a for loop.
// I need a method of joining two strings together call string concatenation.

function twoArgs(word, num) {
  for (let i = 0; i < num; i++) {
    word += "!";
  }
  const newWord = word.toUpperCase();
  return newWord;
}

// change the exported value to be the name of the function you defined
module.exports = {
  a: lowerUpper, // change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: twoArgs, // change undefined to be the name of the function defined to return the string with exclamations (the second todo)
};
