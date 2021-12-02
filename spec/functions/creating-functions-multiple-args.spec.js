const greet = require('../../src/functions/creating-functions-multiple-args')

describe("Creating Functions Multiple Args", () => {

  it("returns oh no with single exclamation", () => {
    expect(greet("oh no")).toEqual("OH NO!")
  })

  it("returns watch out with 6 exclamations", () => {
    expect(greet("watch out")).toEqual("WATCH OUT!!!!!!")
  })
})
