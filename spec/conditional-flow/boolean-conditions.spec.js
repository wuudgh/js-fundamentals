const { a } = require('../../src/conditional-flow/boolean-conditions')

describe("toggle", () => {
  it("Returns false when provided true", () => {
    expect(a(true)).toEqual(false)
  })
  it("Returns true when provided false", () => {
    expect(a(false)).toEqual(true)
  })
})
