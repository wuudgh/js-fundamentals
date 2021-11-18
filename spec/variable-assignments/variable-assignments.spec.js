const { count, count2, count3 } = require('../../src/variable-assignments/variable-assignments.js')

describe("Variable Assignments", () => {
  it("count is 2", () => {
    expect(count).toEqual(2)
  })

  it("count2 is 10", () => {
    expect(count2).toEqual(10)
  })

  it("count3 is 42", () => {
    expect(count3).toEqual(42)
  })
})
