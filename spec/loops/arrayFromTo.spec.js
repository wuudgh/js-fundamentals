const arrayFromTo = require('../../src/loops/arrayFromTo.js')

describe("For Loops", () => {
  it("Array From 1 to 5", () => {
    expect(arrayFromTo(1, 5)).toEqual([1,2,3,4,5])
  })
})
