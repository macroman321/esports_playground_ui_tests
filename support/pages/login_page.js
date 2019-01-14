// login_page.js
const Page = require('../page')

// Custom timeouts
const WAIT_TIME_SHORT = 5000
const WAIT_TIME_MEDIUM = 10000
const WAIT_TIME_LONG = 30000

class LoginPage extends Page {
  constructor (world) {
    super(world)
  }

  // Page element locators
  get emailTextFieldName () {return '[name="username"]'}
  get passwordTextFieldName () {return '[name="password"]'}
  get submitButtonClass () {return '[class="gc-button gc-button--primary gc-button--full gc-button--large"]'}
  get playgroundCurrentLadderClass () {return '[class="gc-current-ladder__content"]'}
  get termsOfServiceDivClass () {return '[class="gc-accept-tos__text"]'}
  get acceptTermsCheckboxClass () {return '[class="gc-label__text"]'}
  get continueTermsOfServiceButtonClass () {return '[class="gc-button gc-button--primary gc-button--large"]'}
  get skipWelcomeScreenButtonClass () {return '[class="gc-button gc-stepper__button gc-stepper__button--skip"]'}

  // Page methods
  async openLoginPage () {
    await super.open('accounts', 'login')
  }

  async login (username, password) {
    await this.webdriver.waitForVisible(this.emailTextFieldName, WAIT_TIME_SHORT)
    await this.webdriver.setValue(this.emailTextFieldName, username)
    await this.webdriver.waitForVisible(this.passwordTextFieldName, WAIT_TIME_SHORT)
    await this.webdriver.setValue(this.passwordTextFieldName, password)
    await this.webdriver.waitForVisible(this.submitButtonClass, WAIT_TIME_SHORT)
    await this.webdriver.click(this.submitButtonClass)
  }

  async didToSPageAppear () {
    if ((await this.webdriver.waitForExist(this.termsOfServiceDivClass, WAIT_TIME_LONG)) === true) {
      await this.webdriver.waitForVisible(this.acceptTermsCheckboxClass, WAIT_TIME_MEDIUM)
      let getCheckboxes = await this.webdriver.elements(this.acceptTermsCheckboxClass)
      let firstCheckBox = getCheckboxes.value[0]
      let secondCheckBox = getCheckboxes.value[1]
      let firstCheckBoxElementID = Object.values(firstCheckBox)[0]
      let secondCheckBoxElementID = Object.values(secondCheckBox)[0]
      await this.webdriver.elementIdClick(firstCheckBoxElementID)
      await this.webdriver.elementIdClick(secondCheckBoxElementID)
      await this.webdriver.click(this.continueTermsOfServiceButtonClass)
    }
  }

  async verifySuccessfulLogin () {
    if ((await this.webdriver.waitForExist(this.skipWelcomeScreenButtonClass, WAIT_TIME_MEDIUM)) === true) {
      await this.webdriver.click(this.skipWelcomeScreenButtonClass)
    }
    await this.webdriver.waitForVisible(this.playgroundCurrentLadderClass, WAIT_TIME_MEDIUM)
  }
}

module.exports = LoginPage
