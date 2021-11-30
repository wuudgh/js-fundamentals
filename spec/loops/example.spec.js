const example = require('../../src/loops/example.js')

describe("For Loops", () => {
  it("Array from 1 to 5", () => {
    expect(example(5)).toEqual([1,2,3,4,5])
  })
})
