# Arrays
Variables allow us to store a single value. An `age` variable is a single number, a `name` variable is a single string. But what if we wanted to have not one, but several names stored for later? Or what if we wanted to store a list of tweets or a list of items in a shopping cart?

**Arrays** allow us to do this. Array's are a single data type used to represent a list of things. For example, the code below creates a list of 3 names:

```javascript
 const names = ['Nicolas', 'Sergio', 'Steven']
```

We can add items to an array using helper methods of our array: `.unshift()` and `.push()`.  

`unshift` will add elements to the start of an array:

```javascript
instructors.unshift('Mike')
=> ['Mike', 'Nicolas', 'Sergio', 'Steven']
```

`push` will add elements to the end of the array:

```javascript
instructors.push('Ed')
=> ['Mike', 'Nicolas', 'Sergio', 'Steven', 'Ed']
```

The `array[index]` syntax reads a single element from an array:

```javascript
instructors[0] // indices start at 0, not 1!
=> 'Mike'
```

The `.slice(firstIndex, lastIndex)` helper method can be used to get a segment of the array:

```javascript
instructors.slice(1,3) // careful: last index is NOT INCLUDED
=> ['Nicolas', 'Sergio']  // this is a *copy*! The original array still has all 4
```

Using `array[index] = newValue`, we can swap the element at a specific location:

```javascript
instructors[1] = 'Lewis'
=> ['Mike', 'Lewis', 'Sergio', 'Steven', 'Ed']
```

Similar to adding an element, we can remove an element from the start or end of the array using `.shift()` and `.pop()`

`shift` removes elements from the start of the array:

```javascript
instructors.shift()
=> ['Lewis', 'Sergio', 'Steven', 'Ed'] // Mike is gone!
```

`pop` removes elements from the end of the array:

```javascript
instructors.pop()
=> ['Lewis', 'Sergio', 'Steven'] // And now Ed, too!
```

## Next
Work your way through the tests for this section. You can use the references below and also
the `example.js` file to see more code samples. Remember you can make use of the Node REPL 
to try out and experiment with code.

## References
* [Boolean Arrays Slides](https://docs.google.com/presentation/d/1GSh7zybHz3R9Dt0xjGFbJJidhz8bQHi01liJDcjmxCg/edit#slide=id.gbb3e6d91bd_0_153)
* [MDN Javascript arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
