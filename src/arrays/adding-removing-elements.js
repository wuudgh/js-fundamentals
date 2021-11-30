// TODO: write code to pass the tests

const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur']
const names = []
const numbers = [1, 2, 3]
const colours = ['Red', 'Blue', 'Yellow']
const keys = ['q', 'w', 'e', 'r', 't', 'y']
const countries = ['Bolivia', 'Jordan', 'Greenland']
const fruits = ['Apple', 'Orange', 'Pear']

names.push(undefined)
numbers.push(NaN)
cities.unshift(undefined)
colours // use an array method to remove the first item
keys // use an array method to remove the last item
countries.splice(NaN, NaN)
const pear = fruits.undefined // use an array method to remove the last fruit from the fruits array and store the value in pear

// Do not edit this exported object
module.exports = {
  a: names,
  b: numbers,
  c: cities,
  d: colours,
  e: keys,
  f: countries,
  g: fruits,
  h: pear
}
