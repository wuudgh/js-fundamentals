const isArrayEmpty = require('../../src/conditional-flow/isArrayEmpty.js')

describe("isArrayEmpty", () => {
  it("[] is empty", () => {
    expect(isArrayEmpty([])).toEqual(true)
  })
  it("[1] is not empty", () => {
    expect(isArrayEmpty([1])).toEqual(false)
  })

  it("['hello', 'Ed'] is not empty", () => {
    expect(isArrayEmpty(['hello', 'Ed'])).toEqual(false)
  })
})
