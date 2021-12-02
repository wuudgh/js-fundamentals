// do not edit the below
function sayHello() {
  return 'Hello'
}

function sayHelloTo(name) {
  return 'Hello ' + name + '!'
}

function sayHelloManyTimes(name, times) {
  let hello = '';
  for (let i=0; i<times; i++){
    hello += 'Hello ' + name + '!'
  }

  return hello
}

// TODO: Add and update code here to make the tests pass

const hello = '' // Set this variable to 'Hello by using the sayHello function

const helloToJane = '' // Set this variable variable to 'Hello Jane' using the sayHelloTo function

const helloToBob3Times = '' // Set this variable to 'Hello Bob! Hello Bob! Hello Bob!' using the sayHelloManyTimes function

// do not edit below this line
module.exports = {
  a: hello,
  b: helloToJane,
  c: helloToBob3Times
}