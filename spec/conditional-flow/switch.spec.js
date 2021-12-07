const {a, b} = require('../../src/conditional-flow/switch')

describe('seasonForMonth', () => {
  it('January is Winter', () => {
    expect(a('January')).toEqual('Winter')
  })
  it('February is Winter', () => {
    expect(a('February')).toEqual('Winter')
  })
  it('March is Spring', () => {
    expect(a('March')).toEqual('Spring')
  })
  it('April is Spring', () => {
    expect(a('April')).toEqual('Spring')
  })
  it('May is Spring', () => {
    expect(a('May')).toEqual('Spring')
  })
  it('June is Summer', () => {
    expect(a('June')).toEqual('Summer')
  })
  it('July is Summer', () => {
    expect(a('July')).toEqual('Summer')
  })
  it('August is Summer', () => {
    expect(a('August')).toEqual('Summer')
  })
  it('September is Autumn', () => {
    expect(a('September')).toEqual('Autumn')
  })
  it('October is Autumn', () => {
    expect(a('October')).toEqual('Autumn')
  })
  it('November is Autumn', () => {
    expect(a('November')).toEqual('Autumn')
  })
  it('December is Winter', () => {
    expect(a('December')).toEqual('Winter')
  })
  it('Marchprilvember is empty', () => {
    expect(a('Marchprilvember')).toEqual('')
  })
})
