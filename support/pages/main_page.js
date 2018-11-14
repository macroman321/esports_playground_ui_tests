// main_page.js
const Page = require('../page')

// Custom timeouts
const WAIT_TIME_SHORT = 5000
const WAIT_TIME_MEDIUM = 10000
const WAIT_TIME_LONG = 30000

class MainPage extends Page {
  constructor (world) {
    super(world)
  }

  // Page elements locators
  get profileChangeAvatarButtonClass () {return '[class="gc-button gc-button--icon gc-button--ghost gc-button--round gc-profile__user__change"]'}
  get profileImageDivClass () {return '[class="gc-profile__user__avatar"]'}
  get profileNameH1Class () {return '[class="gc-profile__user__name"]'}
  get profileUsernameEmClass () {return '[class="gc-profile__user__alias"]'}
  get editProfileButtonClass () {return '[class="gc-button gc-button--primary gc-button--medium gc-profile__user__action"]'}
  get firstNameTextFieldName () {return '[name="firstName"]'}
  get lastNameTextFieldName () {return '[name="lastName"]'}
  get backgroundHeaderClass () {return '[class="gc-profile__header"]'}

  // Page methods
  async openMainPage () {
    await super.open('gnation_profile', '/profile')
  }

  async verifyProfileElements () {
    await this.webdriver.waitForVisible(this.profileChangeAvatarButtonClass, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.profileImageDivClass, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.profileNameH1Class, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.profileUsernameEmClass, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.editProfileButtonClass, WAIT_TIME_MEDIUM)
  }

  async clickEditProfileButton () {
    await this.webdriver.waitForVisible(this.editProfileButtonClass, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.editProfileButtonClass)
  }

  async editProfileWithRandomInfo () {
    await this.webdriver.waitForVisible(this.firstNameTextFieldName, WAIT_TIME_MEDIUM)
    await this.webdriver.setValue(this.firstNameTextFieldName, this.generateRandomString())
    await this.webdriver.waitForVisible(this.lastNameTextFieldName, WAIT_TIME_MEDIUM)
    await this.webdriver.setValue(this.lastNameTextFieldName, this.generateRandomString())
  }

  async clickOutsideOfPopup () {
    await this.webdriver.click(this.backgroundHeaderClass)
  }

  async verifyEditProfilePopupIsOpen () {
    if ((await this.webdriver.waitForVisible(this.firstNameTextFieldName) === false)) {
      throw new Error ('Edit profile has been closed when it should be open!')
    }
  }

  // Helper methods
  async generateRandomString () {
    return Math.random().toString(36).slice(-5)
  }
}

module.exports = MainPage
