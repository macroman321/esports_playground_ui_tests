const {BeforeAll, Before, After} = require('cucumber')
const Logger = require('logplease')
const TestData = require('../util/test_data')
const LoginPage = require('./pages/login_page')
const MainPage = require('./pages/main_page')

let testData

const logger = Logger.create(
  'gn_profile',
  {filename: 'gn_profile.log', appendFile: true}
)

BeforeAll(async function () {
  logger.info('Initialize test run...')
})

Before(async function (scenario) {
  this.logger = logger
  await this.webdriver.init()

  // init page objects
  this.loginPage = new LoginPage(this)
  this.mainPage = new MainPage(this)

  if (!testData) {
    // init test data
    logger.info(`parameters: ${JSON.stringify(this.parameters)}`)
    TestData.load(this.parameters.environment)
    testData = TestData.data
  } else {
    logger.debug('Test data already initialized!')
  }

  this.testData = testData

  this.logger.info(`Start test: ${scenario.pickle.name}`)
})

After(async function (scenario) {
  this.logger.info(`Scenario '${scenario.pickle.name}' ${scenario.result.status}!`)
  await this.webdriver.end()
})
