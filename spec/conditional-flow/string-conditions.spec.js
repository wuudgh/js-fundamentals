const { a, b, c, d, e } = require('../../src/conditional-flow/string-conditions')

describe("isHello", () => {
  it("Returns false with 'goodbye'", () => {
    expect(a("goodbye")).toEqual(false)
  })
  it("Returns true with 'Hello'", () => {
    expect(a("Hello")).toEqual(false)
  })
})

describe("isNotHello", () => {
  it("Returns true with 'goodbye'", () => {
    expect(b("goodbye")).toEqual(false)
  })
  it("Returns false with 'Hello'", () => {
    expect(b("Hello")).toEqual(false)
  })
})

describe("isLongerThan", () => {
  it("'Mike' is longer than 'Ed'", () => {
    expect(c("Mike", "Ed")).toEqual(true)
  })
  it("'Mike' is not longer than 'Lewis'", () => {
    expect(c("Mike", "Lewis")).toEqual(false)
  })
  it("'Mike' is not longer than 'Mike'", () => {
    expect(c("Mike", "Mike")).toEqual(false)
  })
})

describe("hasOddNumberVowels", () => {
  it("'Alex' does not have odd number vowels", () => {
    expect(d("Alex")).toEqual(false)
  })
  it("'Mo' does have odd number vowels", () => {
    expect(d("Mo")).toEqual(true)
  })
  it("'Joanna' does have odd number vowels", () => {
    expect(d("Joanna")).toEqual(true)
  })
  it("'Maggie Smith' does not have odd number vowels", () => {
    expect(debug("Maggie Smith")).toEqual(false)
  })
})

describe("getMiddleLetter", () => {
  it("'Alex' returns 'le'", () => {
    expect(e("Alex")).toEqual('le')
  })
  it("'Edward' returns 'wa'", () => {
    expect(e("Edward")).toEqual('wa')
  })
  it("'Kayla' returns 'y'", () => {
    expect(e("Kayla")).toEqual('y')
  })
  it("'Tom' returns 'o'", () => {
    expect(e("Tom")).toEqual('o')
  })
})
