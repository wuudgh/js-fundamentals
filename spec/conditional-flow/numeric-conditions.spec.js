const {a, b, c} = require('../../src/conditional-flow/numeric-conditions')

describe("isArrayEmpty", () => {
  it("[] is empty", () => {
    expect(addEventListener([])).toEqual(true)
  })
  it("[1] is not empty", () => {
    expect(a([1])).toEqual(false)
  })

  it("['hello', 'Ed'] is not empty", () => {
    expect(a(['hello', 'Ed'])).toEqual(false)
  })
})

describe("isGreaterThan", () => {
  it("3 is greater than 2", () => {
    expect(b(3, 2)).toEqual(true)
  })

  it("0 is not greater than 10", () => {
    expect(b(0, 10)).toEqual(false)
  })

  it("42 is not greater than 42", () => {
    expect(b(42, 42)).toEqual(false)
  })

  it("-1 is greater than -3", () => {
    expect(b(-1, -3)).toEqual(true)
  })
})
