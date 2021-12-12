const answers = require('../../../src/data-types/arrays/adding-removing-elements.js')

describe("Arrays adding and removing:", () => {
  it("Array A", () => {
    expect(answers.a).toEqual(["Fred"])
  })

  it("Array B", () => {
    expect(answers.b).toEqual([1,2,3,4])
  })

  it("Array C", () => {
    expect(answers.c).toEqual(["Rio", "London", "Shanghai", "New York", "Delhi", "Kuala Lumpur"])
  })

  it("Array D", () => {
    expect(answers.d).toEqual(["Blue", "Yellow"])
  })

  it("Array E", () => {
    expect(answers.e).toEqual(["q", "w", "e", "r", "t"])
  })

  it("Array F", () => {
    expect(answers.f).toEqual(["Bolivia", "Greenland"])
  })

  it("Array G", () => {
    expect(answers.g).toEqual(["Apple", "Orange"])
  })

  it("Array H", () => {
    expect(answers.h).toEqual("Pear")
  })
})
