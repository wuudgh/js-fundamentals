const { a, b, c, d } = require('../../src/data-types/strings')

describe('Strings', () => {
  it('fullName is Jame Smith', () => {
    expect(a).toEqual('Jane Smith')
  })

  it('tenthCharacterOfAlphabet is J', () => {
    expect(b).toEqual('J')
  })

  it('lowerCaseAlphabet is abcdefghijlkmnopqrstuvwxyz', () => {
    expect(c).toEqual('abcdefghijlkmnopqrstuvwxyz')
  })

  it('numberOfLettersInAlphabet is 26', () => {
    expect(d).toEqual(26)
  })
})
