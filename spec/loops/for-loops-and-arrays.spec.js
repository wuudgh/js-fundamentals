const { a, b, c, d, e } = require('../../src/loops/for-loop-and-arrays')

describe('For Loops and Arrays', () => {
  it('sum', () => {
    expect(a).toEqual(43)
  })

  it('doubledNums', () => {
    expect(b).toEqual([2,6,24,10,2,12,8,2,20])
  })

  it('word', () => {
    expect(c).toEqual('Hello')
  })

  it('everySecondNum', () => {
    expect(d).toEqual([3,5,6,1])
  })

  it('numsReversed', () => {
    expect(e).toEqual([10,1,4,6,1,5,12,3,1])
  })
})
