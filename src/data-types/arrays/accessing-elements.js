// do not edit this section
const cities = ["London", "Shanghai", "New York", "Delhi", "Kuala Lumpur"];

// TODO: write code to pass the tests

// Set names equal to an array containing 'Bob', 'Jane', 'Joanna' in that order
//To define an array i use [] syntax
//The array needs to contain the avove values which i can coppy and paste
const names = ["Bob", "Jane", "Joanna"];

// Set fourthCity to the 4th element in the cities array
//The array has 5 elements
//To access value in an array by its index, we use []syntax with a number inside it (e.g.[1])
// the [index]needs to be on the end of the array's variable namw, e.g myArray[1]
//Arrays atarts at index 0, not not 1, so to get the 4th element we use index 3 not 4

const fourthCity = cities[3];

// Set firstCity to the 1st element in the cities array
//Array starts at index 0, so the first element has an index 0
const firstCity = cities[0];

// Set lengthOfCitiesArray to the length of the cities array
// we can get the length of an array by doing the name of the array.legth
const lengthOfCitiesArray = cities.length;

// Do not edit this exported object
module.exports = {
  a: names,
  b: fourthCity,
  c: firstCity,
  d: lengthOfCitiesArray,
};
