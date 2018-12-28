// profile_page.js
const Page = require('../page')

// Custom timeouts
const WAIT_TIME_SHORT = 5000
const WAIT_TIME_MEDIUM = 10000
const WAIT_TIME_LONG = 30000

class ProfilePage extends Page {
  constructor (world) {
    super(world)
  }

  // Page elements locators
  get profileChangeAvatarButtonClass () {return '[class="gc-button gc-button--icon gc-button--ghost gc-button--round gc-profile__user__change"]'}
  get profileImageDivClass () {return '[class="gc-profile__user__avatar"]'}
  get profileNameH1Class () {return '[class="gc-profile__user__name"]'}
  get profileUsernameEmClass () {return '[class="gc-profile__user__alias"]'}
  get profileSaveButtonClass () {return '[class="gc-button gc-button--primary gc-button--fixed gc-edit-profile__footer__action"]'}
  get profileAvatarDivClassMedium () {return '[class="gc-avatar gc-avatar--medium gc-choose-avatar__avatar"]'}
  get profileAvatarSaveButtonClass () {return '[class="gc-button gc-button--primary gc-button--fixed gc-choose-avatar__footer__action"]'}
  get profileCancelButtonClass () {return '[class="gc-button gc-button--fixed gc-edit-profile__footer__action"]'}
  get editProfileButtonClass () {return '[class="gc-button gc-button--medium gc-profile__user__action"]'}
  get firstNameTextFieldName () {return '[name="firstName"]'}
  get lastNameTextFieldName () {return '[name="lastName"]'}
  get backgroundHeaderClass () {return '[class="fade in gc-modal"]'}

  // Page methods
  async openProfilePage () {
    await super.open('profile', 'profile')
  }

  async verifyProfileElements () {
    await this.webdriver.waitForVisible(this.profileChangeAvatarButtonClass, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.profileImageDivClass, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.profileNameH1Class, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.profileUsernameEmClass, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.editProfileButtonClass, WAIT_TIME_MEDIUM)
  }

  async clickEditProfileButton () {
    await this.webdriver.waitForVisible(this.editProfileButtonClass, WAIT_TIME_LONG)
    await this.webdriver.click(this.editProfileButtonClass)
  }

  async editProfileWithRandomInfo () {
    let randomStringOne = this.generateRandomString(5)
    let randomStringTwo = this.generateRandomString(5)
    await this.webdriver.pause(WAIT_TIME_SHORT)
    await this.webdriver.waitForVisible(this.firstNameTextFieldName, WAIT_TIME_MEDIUM)
    await this.webdriver.setValue(this.firstNameTextFieldName, randomStringOne)
    await this.webdriver.waitForVisible(this.lastNameTextFieldName, WAIT_TIME_MEDIUM)
    await this.webdriver.setValue(this.lastNameTextFieldName, randomStringTwo)
  }

  async clickOutsideOfPopup () {
    await this.webdriver.leftClick(this.backgroundHeaderClass, 34, 34)
    await this.webdriver.pause(WAIT_TIME_MEDIUM)
  }

  async verifyEditProfilePopupIsOpen () {
    try {
      await this.webdriver.waitForVisible(this.firstNameTextFieldName, WAIT_TIME_SHORT)
    } catch (error) {
      throw new Error(error + '\nEdit profile popup has been closed when it should be open!')
    }
  }

  async verifyFirstNameLastName () {
    let randomStringOne = this.generateRandomString(5)
    let randomStringTwo = this.generateRandomString(5)
    await this.webdriver.waitForVisible(this.firstNameTextFieldName, WAIT_TIME_LONG)
    await this.webdriver.setValue(this.firstNameTextFieldName, randomStringOne)
    await this.webdriver.waitForVisible(this.lastNameTextFieldName, WAIT_TIME_LONG)
    await this.webdriver.setValue(this.lastNameTextFieldName, randomStringTwo)
    await this.webdriver.click(this.profileSaveButtonClass)

    await this.webdriver.pause(WAIT_TIME_SHORT)
    let stringToCompare = randomStringOne + ' ' + randomStringTwo
    if ((await this.webdriver.getText(this.profileNameH1Class)) !== stringToCompare) {
      throw new Error('First and last name values do not match with generated values!')
    }
  }

  async clickAvatarIcon () {
    await this.webdriver.waitForVisible(this.profileChangeAvatarButtonClass, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.profileChangeAvatarButtonClass)
  }

  async chooseRandomAvatar () {
    try {
      await this.webdriver.waitForExist(this.profileAvatarDivClassMedium, WAIT_TIME_MEDIUM)
      let randomNumber = Math.floor(Math.random() * 8)
      let countAvatars = await this.webdriver.elements(this.profileAvatarDivClassMedium)
      let countAvatarValues = countAvatars.value[randomNumber]
      let randomizedAvatar = Object.values(countAvatarValues)[0]
      await this.webdriver.pause(WAIT_TIME_SHORT)
      await this.webdriver.elementIdClick(randomizedAvatar)
    } catch (error) {
      throw new Error(error + '\nAvatar selector does not exist!')
    }
  }

  async verifyChosenAvatar () {
    //TODO: Continue here when you come back to the Change avatar scenario
    await this.webdriver.click(this.profileAvatarSaveButtonClass)
    await this.webdriver.pause(WAIT_TIME_SHORT)
  }

  async verifyAlreadyEnteredInfo () {
    await this.webdriver.waitForVisible(this.profileNameH1Class, WAIT_TIME_MEDIUM)
    return await this.webdriver.getText(this.profileNameH1Class)
  }

  async clickCancelButton () {
    await this.webdriver.click(this.profileCancelButtonClass)
    await this.webdriver.pause(5000)
  }

  async enterMoreThanFiftyChars (value1, value2) {
    await this.webdriver.waitForVisible(this.firstNameTextFieldName, WAIT_TIME_MEDIUM)
    await this.webdriver.clearElement(this.firstNameTextFieldName)
    await this.webdriver.setValue(this.firstNameTextFieldName, value1)
    await this.webdriver.waitForVisible(this.lastNameTextFieldName, WAIT_TIME_MEDIUM)
    await this.webdriver.clearElement(this.lastNameTextFieldName)
    await this.webdriver.setValue(this.lastNameTextFieldName, value2)
    await this.webdriver.click(this.profileSaveButtonClass)
  }

  async verifyFiftyCharactersHaveBeenSaved (value1, value2) {
    await this.webdriver.waitForVisible(this.profileNameH1Class, WAIT_TIME_MEDIUM)
    await this.webdriver.pause(WAIT_TIME_SHORT)
    let profileNameValue = await this.webdriver.getText(this.profileNameH1Class)
    let stringToCompare = value1.substring(0, 50) + ' ' + value2.substring(0, 50)

    if (profileNameValue !== stringToCompare) {
      throw new Error('First and last name values do not match with generated values!')
    }
  }

  // Helper methods
  generateRandomString (length, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let randomString = ''
    for (let i = 0; i < length; i++) {
      let randomPoz = Math.floor(Math.random() * charSet.length)
      randomString += charSet.substring(randomPoz, randomPoz + 1)
    }
    return randomString
  }
}

module.exports = ProfilePage
