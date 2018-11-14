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
}

module.exports = MainPage
