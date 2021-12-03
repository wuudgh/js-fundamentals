const {a, b} = require('../../src/conditional-flow/switch')

describe('monthName', () => {
  it('1 is January', () => {
    expect(a(1)).toEqual('January')
  })
  it('2 is February', () => {
    expect(a(2)).toEqual('February')
  })
  it('3 is March', () => {
    expect(a(3)).toEqual('March')
  })
  it('4 is April', () => {
    expect(a(4)).toEqual('April')
  })
  it('5 is May', () => {
    expect(a(5)).toEqual('May')
  })
  it('6 is June', () => {
    expect(a(6)).toEqual('June')
  })
  it('7 is July', () => {
    expect(a(7)).toEqual('July')
  })
  it('8 is August', () => {
    expect(a(8)).toEqual('August')
  })
  it('9 is September', () => {
    expect(a(9)).toEqual('September')
  })
  it('10 is October', () => {
    expect(a(10)).toEqual('October')
  })
  it('11 is November', () => {
    expect(a(11)).toEqual('November')
  })
  it('12 is December', () => {
    expect(a(12)).toEqual('December')
  })
  it('0 is empty', () => {
    expect(a(0)).toEqual('')
  })
  it('13 is empty', () => {
    expect(a(13)).toEqual('')
  })
})

describe('isInUk', () => {
  it('Scotland is in UK', () => {
    expect(b('Scotland')).toEqual(true)
  })
  it('England is in UK', () => {
    expect(b('England')).toEqual(true)
  })
  it('Wales is in UK', () => {
    expect(b('Wales')).toEqual(true)
  })
  it('Northern Ireland is in UK', () => {
    expect(b('Northern Ireland')).toEqual(true)
  })
  it('France is not in UK', () => {
    expect(b('France')).toEqual(true)
  })
})
