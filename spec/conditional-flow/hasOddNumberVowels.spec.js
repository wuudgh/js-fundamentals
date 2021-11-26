const hasOddNumberVowels = require('../../src/conditional-flow/hasOddNumberVowels.js')

describe("hasOddNumberVowels", () => {
  it("'Alex' does not have odd number vowels", () => {
    expect(hasOddNumberVowels("Alex")).toEqual(false)
  })
  it("'Mo' does have odd number vowels", () => {
    expect(hasOddNumberVowels("Mo")).toEqual(true)
  })
  it("'Joanna' does have odd number vowels", () => {
    expect(hasOddNumberVowels("Joanna")).toEqual(true)
  })
  it("'Maggie Smith' does not have odd number vowels", () => {
    expect(hasOddNumberVowels("Maggie Smith")).toEqual(false)
  })
})
