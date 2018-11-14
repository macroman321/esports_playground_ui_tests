//
// FILE NAME: verify_profile_elements_steps.js
// DESCRIPTION: Step definitions for verify_profile_elements.feature file
// AUTHOR: Milan Šubarević (MŠ)
// CREATED: 13-Nov-18
// NOTES:
//

const {Given, When, Then} = require('cucumber')
const TestData = require('../util/test_data')

When('I log in as user {string}', {timeout: 20000}, async function (userId) {
  const user = TestData.getUser(userId)
  this.logger.debug(`user = ${JSON.stringify(user)}`)
  await this.loginPage.openLoginPage()
  await this.loginPage.login(user.username, user.password)
  await this.loginPage.didToSPageAppear()
})

Then('I should see the user has been successfully logged in', {timeout: 20000}, async function () {
  await this.loginPage.verifySuccessfulLogin()
})

When('I go my profile page', async function () {
  await this.mainPage.openMainPage()
})

Then('I should see all the expected profile elements present', {timeout: 20000}, async function () {
  await this.mainPage.verifyProfileElements()
})