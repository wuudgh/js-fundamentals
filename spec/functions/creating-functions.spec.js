const greet = require('../../src/functions/creating-functions')

describe("Creating Functions", () => {
  it("returns string with smiley", () => {
    expect(greet("edward")).toEqual("Hi, Edward :)")
  })

  it("returns string with smiley", () => {
    expect(greet("Aiyana")).toEqual("Hi, Aiyana :)")

  })
})
