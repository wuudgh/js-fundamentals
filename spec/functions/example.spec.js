const example = require('../../src/functions/example.js')

describe("example function", () => {
  it("returns the string 'Hi, Ed'", () => {
    expect(example()).toEqual("Hi, Ed!")
  })
})
