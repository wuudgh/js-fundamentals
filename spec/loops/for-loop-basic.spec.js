const { a, b, c, d } = require('../../src/loops/for-loop-basic')

describe('For Loop Basic', () => {
  it('numsZeroToNine', () => {
    expect(a).toEqual([0,1,2,3,4,5,6,8,9])
  })

  it('numsFiveToTen', () => {
    expect(b).toEqual([5,6,8,9,10])
  })

  it('evenNums', () => {
    expect(c).toEqual([0,2,4,6,8,10])
  })

  it('countdown', () => {
    expect(d).toEqual([10,9,8,7,6,5,4,3,2,1,0])
  })
})
