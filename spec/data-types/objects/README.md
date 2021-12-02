# Objects
Let’s say you are trying to represent a person using code. What kind of attributes do you think are important to store about a person? How would you store these attributes using what you know so far? Perhaps we'd try something like this:

```javascript
const firstName = 'Nicolas'
const lastName = 'Marcora'
const age = 33
```

Mmm, ok. What if we want to have a second person?

```javascript
const firstName1 = 'Nicolas'
const lastName1 = 'Marcora'
const age1 = 33

const firstName2 = 'Sergio'
const lastName2 = 'Neves'
const age2 = 30
```

How could we make this better? The answer is **Objects**. JavaScript objects are a data type that consists of keys and values, wrapped with curly braces. We can use objects to 
collect together related properties that represent a single instance of something, like a
person:

```javascript
const person = {
  firstName: 'Nicolas',
  lastName: 'Marcora',
  age: 33
}
```

## References

* [Boolean Objects Slides](https://docs.google.com/presentation/d/1OrCY1WRyXlX29bx99f-RXhx6jYraL9gMkmUE5uo4nBE/edit#slide=id.gd46f8ee6d4_0_18)
* [MDN Javascript Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
