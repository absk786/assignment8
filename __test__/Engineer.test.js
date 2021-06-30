const { test, expect } = require('@jest/globals')
const {Engineer} = require('../lib/Engineer')

test ("creates an engineer objec", () => {
    const number = parseInt(5)
    const engineer = new Engineer("testName",number,"test@test.com","gitHubUser")
    expect(engineer.name).toBe("testName")
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toBe("test@test.com")
    expect(engineer.gitHub).toBe("gitHubUser")
})