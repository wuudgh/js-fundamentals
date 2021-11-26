const getMiddleLetter = require('../../src/conditional-flow/getMiddleLetter.js')

describe("getMiddleLetter", () => {
  it("'Alex' returns 'le'", () => {
    expect(getMiddleLetter("Alex")).toEqual('le')
  })
  it("'Edward' returns 'wa'", () => {
    expect(getMiddleLetter("Edward")).toEqual('wa')
  })
  it("'Kayla' returns 'y'", () => {
    expect(getMiddleLetter("Kayla")).toEqual('y')
  })
  it("'Tom' returns 'o'", () => {
    expect(getMiddleLetter("Tom")).toEqual('o')
  })
})
