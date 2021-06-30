const { test, expect } = require('@jest/globals')
const Manager = require('../lib/Manager')

test ("creates an employee objec", () => {
    const number = parseInt(5)
    const manager = new Manager("testName",number,"test@test.com")
    expect(manager.name).toBe("testName")
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toBe("test@test.com")
})