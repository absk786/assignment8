const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')

test ("creates an employee objec", () => {
    const employee = new Employee("testName","01","test@test.com")
    expect(employee.name).toBe("testName")
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toBe("tes@test.com")
})