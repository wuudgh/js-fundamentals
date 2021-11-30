const answers = require('../../src/arrays/accessing-elements.js')

describe("Arrays", () => {
  it("Element A", () => {
    expect(answers.a).toEqual("Kuala Lumpur")
  })

  it("Element B", () => {
    expect(answers.b).toEqual("Ed")
  })

  it("Element C", () => {
    expect(answers.c).toEqual("Joanna")
  })

  it("Element D", () => {
    expect(answers.d).toEqual("London")
  })

  it("accessing element at unknown index returns undefined", () => {
    expect(answers.e).toEqual(undefined)
  })
})
