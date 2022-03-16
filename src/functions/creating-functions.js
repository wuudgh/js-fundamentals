// Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
//TODO: write code below
//We can define a funtion by using the function key word
//followed by the name we want to give and a pair of bracket () where we can pass the input.
//we also need a pair of curly bracket where we write the block of code
//we also need a return that is where we output our code.
//to increase a number from 1 to 2 we need to use the +
function addOne(number) {
  return number + 1;
}

// Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
//To define a function i need the function key word.
//Followed by the function name
//After the name i need a pair of bracket where i pass the input of the function.
//Plus i also need a pair of curly bracket where we tell the function what i want it to do.
//The finall part is the return where we find our output.
//To make a capitalized i need a proto type method call toUpperCase()
//But before i do that i have to create a variable where i concatinate the functions parameter and the trings,
//which i want to join together with the parameter, i do that by applying the + sign between them.
//Correction: i thought i can use the prototype method toUpperCase within the variable where i concatenated
//the parameter and the string to change them to uppercase, but that didn't work because the protype toUpperCase
//does not change the value of what ever you give it, But it rather gives you a new value in upperCase.
//Correction: I am suppose to change only the first leter of the word to an upperCase not the whole word.
//To do that i have to the target the first index of the word which is basically the the first letter.
//e.g. letter[0] since java script starts counting from 0.
//That alone wasn't enough to wet what i wanted so researched and found prototype method call slice()
//I didn't really understand it but it worked for me.
//

function nameSmiley(name) {
  const newName = name[0].toUpperCase() + name.slice(1);
  const hi = "Hi";
  const concat = hi + ", " + newName + " :)";
  return concat;
}
nameSmiley("edmond");
// TODO: change undefined to be the name of the functions you defined
module.exports = {
  a: addOne, // change undefined to be the name of the function you defined to increment a number (the first TODO)
  b: nameSmiley, // change undefined to be the name of the function you defined to say hi (the second TODO)
};

//npx jasmine spec/functions/creating-functions.spec.js
