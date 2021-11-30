const numsToStrs = require('../../src/loops/numsToStrs.js')

describe("For Loops", () => {
  it("transform numbers to strings", () => {
    expect(numsToStrs([1,2,3])).toEqual(["1", "2", "3"])
  })

  it("transform numbers to strings", () => {
    expect(numsToStrs([-1,102,47])).toEqual(["-1","102","47"])
  })
})
