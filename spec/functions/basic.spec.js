const add = require('../../src/functions/basic.js')

describe("add function", () => {
  it("returns the sum of 2 numbers", () => {
    expect(add(1,3)).toEqual(4)
  })

  it("returns the sum of 2 numbers", () => {
    expect(add(-2,17)).toEqual(15)
  })
})
