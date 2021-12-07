const { a, b, c, d } = require('../../src/loops/for-loop-basic')

describe('For Loop Basic', () => {
  it('numsZeroToThree', () => {
    expect(a).toEqual([0,1,2,3])
  })

  it('numsFiveToTen', () => {
    expect(b).toEqual([5,6,7,8,9,10])
  })

  it('evenNums', () => {
    expect(c).toEqual([0,2,4,6])
  })

  it('countdown', () => {
    expect(d).toEqual([3,2,1,0])
  })
})
