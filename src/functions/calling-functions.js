// do not edit the below
function sayHello() {
  return "Hello";
}

function sayHelloTo(name) {
  return "Hello " + name + "!";
}

function sayHelloManyTimes(name, times) {
  let hello = "";
  for (let i = 0; i < times; i++) {
    hello += "Hello " + name + "!";
  }

  return hello;
}

// TODO: Add and update code here to make the tests pass

// Set this variable to 'Hello' by calling the sayHello function
//A funtion is a block of code expressing what you want to do.
// To call a function you have to use the name given to the function and ()
const hello = sayHello();

// Set this variable variable to 'Hello Jane' calling the sayHelloTo function
//A function is a block of code expresssing what you want to do.
//I have to call a funtion and to do that i have to use the name given to the function.
//I have to pass in the name jane in the bracket so that the function will say hello jane.
const helloToJane = sayHelloTo("Jane");

// Set this variable to 'Hello Bob! Hello Bob! Hello Bob!' calling the sayHelloManyTimes function
//A function is a block of code expressing what you want to be done.
//I have to call a function and to do that i have use the name i gave to the function when creating it.
//To call a funtion
const helloToBob3Times = sayHelloManyTimes("Bob", 3);

// do not edit below this line
module.exports = {
  a: hello,
  b: helloToJane,
  c: helloToBob3Times,
};
