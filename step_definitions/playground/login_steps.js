//
// FILE NAME: login_steps.js
// DESCRIPTION: Step definitions for login.feature file
// AUTHOR: Petar Manojlović (MŠ)
// CREATED: 17-Nov-18
// NOTES:
//

const {Given, When, Then} = require('cucumber')
const assert = require('assert')

When('I provide the username and password combo for "qa_user_1"', {timeout: 20000}, async function () {
    const user = TestData.getUser(userId)
    this.logger.debug(`user = ${JSON.stringify(user)}`)
    await this.loginPage.openLoginPage()
    await this.loginPage.login(user.username, user.password)
    await this.loginPage.didToSPageAppear()
})

Then('I should see that I am logged in', {timeout: 20000}, async function () {
    await this.loginPage.verifySuccessfulLogin()
})

When('I attempt to login without providing a username', {timeout: 20000}, async function () {
    await this.loginPage.openLoginPage()
    await this.loginPage.login('', '12345678')
})

Then('I should see that the login button is inactive', {timeout: 20000}, async function () {
    await this.loginPage.submitButtonInactive()
})