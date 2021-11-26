const isLongerThan = require('../../src/conditional-flow/isLongerThan.js')

describe("isLongerThan", () => {
  it("'Edward' is longer than 'Asia'", () => {
    expect(isLongerThan("Edward", "Asia")).toEqual(false)
  })

  it("'Mo' is not longer than 'Joanna'", () => {
    expect(isLongerThan("Mo", "Joanna")).toEqual(false)
  })

  it("'Alex' is not longer than 'Kris'", () => {
    expect(isLongerThan("Alex", "Kris")).toEqual(false)
  })
})
