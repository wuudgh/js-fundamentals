const answers = require('../../src/objects/creating-objects.js')

describe('Objects', () => {
  it('Person should be an object with the name "Jane"', () => {
    expect(answers.person.name).toEqual('Jane')
  })

  it('Person should be an object with the age 32', () => {
    expect(answers.person.age).toEqual(32)
  })

  it('Computer should be an object with the form of "ATX"', () => {
    expect(answers.computer.form).toEqual("atx")
  })

  it('Computer.graphicsCard should be an object with name "GTX 3090" and vram "8GB"', () => {
    expect(answers.computer.graphicsCard).toEqual({name: "GTX 3090", vram: "8GB"})
  })
})
