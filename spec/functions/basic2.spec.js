const greet = require('../../src/functions/basic2.js')

describe("greet function", () => {
  it("returns string with smiley", () => {
    expect(greet("edward")).toEqual("Hi, Edward :)")
  })

  it("returns string with smiley", () => {
    expect(greet("Aiyana")).toEqual("Hi, Aiyana :)")

  })
})
