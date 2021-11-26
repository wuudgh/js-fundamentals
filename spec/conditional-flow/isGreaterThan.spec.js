const isGreaterThan = require('../../src/conditional-flow/isGreaterThan.js')

describe("isGreaterThan", () => {
  it("3 is greater than 2", () => {
    expect(isGreaterThan(3, 2)).toEqual(true)
  })

  it("0 is not greater than 10", () => {
    expect(isGreaterThan(0, 10)).toEqual(false)
  })

  it("42 is not greater than 42", () => {
    expect(isGreaterThan(42, 42)).toEqual(false)
  })

  it("-1 is greater than -3", () => {
    expect(isGreaterThan(-1, -3)).toEqual(true)
  })
})
