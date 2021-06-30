const { test, expect } = require('@jest/globals')
const {Manager} = require('../lib/Manager')

test ("creates an Manager objec", () => {
    const number = parseInt(5)
    const officeNumber = parseInt(9)
    const manager = new Manager("testName",number,"test@test.com",officeNumber)
    expect(manager.name).toBe("testName")
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toBe("test@test.com")
    expect(manager.officeNumber).toEqual(expect.any(Number))
})