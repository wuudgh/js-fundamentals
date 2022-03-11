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
//A funtion is a block of code expressing what you want to.
// To call a function you have to use the name given to the function and ()
const hello = sayHello();

// Set this variable variable to 'Hello Jane' calling the sayHelloTo function
//To
const helloToJane = sayHelloTo("Jane");

// Set this variable to 'Hello Bob! Hello Bob! Hello Bob!' calling the sayHelloManyTimes function
const helloToBob3Times = sayHelloManyTimes("Bob", 3);

// do not edit below this line
module.exports = {
  a: hello,
  b: helloToJane,
  c: helloToBob3Times,
};
