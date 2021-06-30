const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')

test ("creates an employee objec", () => {
    const number = parseInt(5)
    const employee = new Employee("testName",number,"test@test.com")
    expect(employee.name).toBe("testName")
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toBe("test@test.com")
})