const { test, expect } = require('@jest/globals')
const {Intern} = require('../lib/Intern')

test ("creates an intern object", () => {
    const number = parseInt(5)
    const intern = new Intern("testName",number,"test@test.com", "testschool")
    expect(intern.name).toBe("testName")
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toBe("test@test.com")
    expect(intern.schoolName).toBe("testschool")
})

