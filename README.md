# JS Fundamentals

### Setup

1. Fork this repository to your GitHub account
2. Clone your forked repository to your machine
3. Change directory into the project.
4. Install the project dependencies

```sh
$ npm install
```

### Exercises
- [Variable Assignments](./src/variable-assignments)
- [Arrays](./spec/arrays/README.md)
  - [example]('./src/arrays/example.js')
  - [accessing-elements]('./src/arrays/accessing-elements.js')
  - [adding-removing-elements]('./src/arrays/adding-removing-elements.js')
- [Objects](./spec/objects/README.md)
  - [Object Keys](./src/objects/object-key.js)
  - [Creating Objects](./src/objects/creating-objects.js)
  - [Objects And Arrays](./src/objects/objects-and-arrays.js)
- [Conditional Flow](./src/conditional-flow)
  - [example]('./src/conditional-flow/example.js')
  - [isGreaterThan](./src/conditional-flow/isGreaterThan.js)
  - [isLongerThan](./src/conditional-flow/isLongerThan.js)
  - [isArrayEmpty](./src/conditional-flow/isArrayEmpty.js)
  - [hasOddNumberVowels](./src/conditional-flow/hasOddNumberVowels.js)
  - [getMiddleLetter](./src/conditional-flow/getMiddleLetter.js)
- [Loops](./src/loops)
  - [example]('./src/loops/example.js')
  - [arrayFromTo]('./src/loops/arrayFromTo.js')
  - [everyOtherElement]('./src/loops/everyOtherElement.js')
  - [numsToStrs](./src/loops/numsToStrs.js)
- [Functions](./src/functions)
  - [example]('./src/functions/example.js')
  - [basic]('./src/functions/basic.js')
  - [basic2]('./src/functions/basic2.js')
  - [basic3]('./src/functions/basic3.js')
  - [intermediate1]('./src/functions/basic.js')
  - [intermediate2]('./src/functions/basic2.js')
  - [intermediate3]('./src/functions/basic3.js')



### Instructions

Once you've gone through set up, start with the first exercise in the list above. Your job is to write code for each exercise to make the tests pass, one test at a time.

To start, always first run the tests for the set of exercises you are on. For example:
```sh
$ npx jasmine spec/variable-assignments/variable-assignments.spec.js
```
![](./_images/test-output1.png)

**Inspect** this output. Your output might be slightly different. Read through this, and focus on one test at a time.

**NB:** Do not change any code in the `spec` directory. When you encounter something you don't know, research it, using the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

Once you've passed the tests for each exercise, push your work to your repository
```sh
$ git add src/variable-assignments/variable-assignments.js
$ git commit -m "variable-assignments completed"
```

> **Important** - running git commit runs a test to check the formatting of your code. **If there are errors the command will abort.**
> Make sure you see no errors in the exercise you completed before continuing. If you see errors, read them carefully and **fix your work** before repeating the above steps.
> You can verify a successful commit by checking with `git log` - verify you see the commit message.
```
$ git push origin main
```
Then, move on to the next exercise!


### Tests
You can run all the tests manually whenever you want:
```sh
$ npm test
```

This will run two sets of tests.

### Linter Tests
Using `npm test` will first run a set of tests that make sure your code satisfies specific stylistic rules - make sure you resolve these problems as you go.

You can also run the linter manually whenever you want and autocorrect where it's possible:
```sh
npx eslint src --fix
```

### Functional Tests
The second set of tests that will run are functional. They test the behaviour of the programs you write.

You can also run the tests manually whenever you want
```sh
npx jasmine # run all the tests
# or
npx jasmine spec/variable-assignments/variable-assignments.spec.js # run a set of tests in a spec file
```
