//
// FILE NAME: verify_profile_elements_steps.js
// DESCRIPTION: Step definitions for verify_profile_elements.feature file
// AUTHOR: Milan Šubarević (MŠ)
// CREATED: 14-Nov-18
// NOTES:
//

const {Given, When, Then} = require('cucumber')
const assert = require('assert')

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

Then('I should see the changes I have made displayed on my profile', {timeout: 20000}, async function () {
  await this.mainPage.verifyFirstNameLastName()
})

When('I click on the avatar icon', {timeout: 20000}, async function () {
  await this.mainPage.clickAvatarIcon()
})

When('I choose a random avatar', {timeout: 20000}, async function () {
  await this.mainPage.chooseRandomAvatar()
})

Then('I should see the avatar I have chosen displayed', {timeout: 20000}, async function () {
  await this.mainPage.verifyChosenAvatar()
})

When('I verify my profile information that I have already entered', {timeout: 20000}, async function () {
  this.firstime = await this.mainPage.verifyAlreadyEnteredInfo()
})

When('I click the cancel button', {timeout: 20000}, async function () {
  await this.mainPage.clickCancelButton()
})

Then('I should see all my old information being displayed', {timeout: 20000}, async function () {
  this.secondtime = await this.mainPage.verifyAlreadyEnteredInfo()
  assert(this.firstime, this.secondtime, 'First name and last name are not the same!')
})

When('I enter more than 50 characters in the first and last name text fields', {timeout: 20000}, async function () {
  this.value1 = await this.mainPage.generateRandomString(60)
  this.value2 = await this.mainPage.generateRandomString(60)
  await this.mainPage.enterMoreThanFiftyChars(this.value1, this.value2)
})

Then('I should see my changes have been saved with exactly 50 characters', {timeout: 20000}, async function () {
  await this.mainPage.verifyFiftyCharactersHaveBeenSaved(this.value1, this.value2)
})
