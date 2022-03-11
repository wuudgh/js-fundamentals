// do not edit this section
const cities = ["London", "Shanghai", "New York", "Delhi", "Kuala Lumpur"];
const names = [];
const numbers = [1, 2, 3];
const colours = ["Red", "Blue", "Yellow"];
const keys = ["q", "w", "e", "r", "t", "y"];
const countries = ["Bolivia", "Jordan", "Greenland"];
const fruits = ["Apple", "Orange", "Pear"];

// TODO: write code to pass the tests

// Edit this code to add 'Fred' to the names array
//To add a new element to an array you have to do the name of the array.pussh in to ()the element you want to add.
names.push("Fred");

// Edit this code to add 4 to the end of the numbers array
//The same applies to numbers to add and element to the numbers  array, you will have to do the array name.push in to () the element you want to add.
numbers.push(4);

// Edit this code to add 'Rio' to the start of the cities array
//To add a new element at the start of the array, you do the name of the array.unshitf in to () the element, that will make sure the element is at the start of the array.
cities.unshift("Rio");

// Use an array method to remove the first item from colours
//To remove the first emelent from array, you do the array name.shift.([0]) with the index number of the element and sice arrays starts from 0 the index number for the fist element will be 0.
//With shift it removes the first element of the array so i do not need to pass it the index of the element.
//colours.shift([0]);
colours.shift();
// array1.shift();
// Use an array method to remove the last item from keys
//To remove the last elemnt of the an array, you can do the name of the array.pop ([]) with the index number in the syntax.
// With pop it will always remove the last element of the array so i dont need to pass it the index of the element.
//keys.pop([5]);
keys.pop();

// Use an array method to remove 'Jordon' from the countries array
// To remove an element from an array using splice, you have to do the name of the array.splice ()with the number of elements you want to remove and which index.
countries.splice(1, 1);

// use an array method to remove the last item from the fruits array and store the value in the pear variable
//To remove a last  item from an array, you can do the name of the array.pop the index of the array you want to remove.
// To store it in a variable can write all that code within a varaible name where you want to store what ever you deleting.
//Pop always removes the last element of the array so i dont need to pass it the index.
//const pear = fruits.pop([2]);
const pear = fruits.pop();

// Do not edit this exported object
module.exports = {
  a: names,
  b: numbers,
  c: cities,
  d: colours,
  e: keys,
  f: countries,
  g: fruits,
  h: pear,
};
