const { isGreaterThan, isArrayEmpty, isLongerThan } = require('../../src/conditional-flow/conditional-flow.js')

describe("Conditional Flow", () => {
  describe("isGreaterThan", () => {
    it("3 is greater than 2", () => {
      expect(isGreaterThan(3, 2)).toEqual(true)
    })

    it("0 is not greater than 10", () => {
      expect(isGreaterThan(0, 10)).toEqual(false)
    })

    it("42 is not greater than 42", () => {
      expect(isGreaterThan(42, 42)).toEqual(false)
    })

    it("-1 is greater than -3", () => {
      expect(isGreaterThan(-1, -3)).toEqual(true)
    })
  })

  describe("isArrayEmpty", () => {
    it("[] is empty", () => {
      expect(isArrayEmpty([])).toEqual(true)
    })
    it("[1] is not empty", () => {
      expect(isArrayEmpty([1])).toEqual(false)
    })

    it("['hello', 'Ed'] is not empty", () => {
      expect(isArrayEmpty(['hello', 'Ed'])).toEqual(false)
    })
  })

  describe("isLongerThan", () => {
    it("'Edward' is longer than 'Asia'", () => {
      expect(isLongerThan("Edward", "Asia")).toEqual(false)
    })

    it("'Mo' is not longer than 'Joanna'", () => {
      expect(isLongerThan("Mo", "Joanna")).toEqual(false)
    })

    it("'Alex' is not longer than 'Kris'", () => {
      expect(isLongerThan("Alex", "Kris")).toEqual(false)
    })
  })
})
