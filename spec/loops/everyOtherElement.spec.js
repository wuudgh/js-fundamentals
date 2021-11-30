const everyOtherElement = require('../../src/loops/everyOtherElement.js')

describe("For Loops", () => {
  it("Select only every other element", () => {
    expect(everyOtherElement(['a','b','c','d','e'])).toEqual(['b','d'])
  })

  it("Select only every other element", () => {
    expect(everyOtherElement(['a','1','-3','d','z',[2],":)"])).toEqual(['1','d',[2]])
  })
})
