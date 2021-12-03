module.exports = {
  a : isInRange,
  b : isHelloOrGoodbye
}

const {a, b} = require('../../src/conditional-flow/multiple-conditions')

describe("isInRange", () => {
  it("4 is between 1 and 6", () => {
    expect(a(4, 1, 6)).toEqual(true)
  })
  it("10 is not between 1 and 5", () => {
    expect(a(10, 1, 5)).toEqual(false)
  })
  it("10 is between 1 and 10", () => {
    expect(a(10, 1, 10)).toEqual(true)
  })
  it("8 is between 8 and 8", () => {
    expect(a(8, 8, 8)).toEqual(true)
  })
})

describe("isHelloOrGoodbye", () => {
  it("'Hello' returns true", () => {
    expect(b('Hello')).toEqual(true)
  })

  it("'Hey!' returns false", () => {
    expect(b('Hey!')).toEqual(false)
  })

  it("'Goodbye' returns true", () => {
    expect(b('Goodbye')).toEqual(true)
  })
})
