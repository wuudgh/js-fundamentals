const answers = require('../../../src/data-types/arrays/accessing-elements.js')

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

  it("lengthOfCitiesArray is 5", () => {
    expect(answers.e).toEqual(5)
  })

})
