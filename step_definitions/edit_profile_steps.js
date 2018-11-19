//
// FILE NAME: verify_profile_elements_steps.js
// DESCRIPTION: Step definitions for verify_profile_elements.feature file
// AUTHOR: Milan Šubarević (MŠ)
// CREATED: 14-Nov-18
// NOTES:
//

const {Given, When, Then} = require('cucumber')

When('I click on the Edit profile button', {timeout: 20000}, async function () {
  await this.mainPage.clickEditProfileButton()
})

When('I make some changes to my profile', {timeout: 20000}, async function () {
  await this.mainPage.editProfileWithRandomInfo()
})

When('I click outside of the Edit profile popup', {timeout: 20000}, async function () {
  await this.mainPage.clickOutsideOfPopup()
})

Then('I should see the Edit profile popup is still open', {timeout: 20000}, async function () {
  await this.mainPage.verifyEditProfilePopupIsOpen()
})
