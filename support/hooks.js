const {BeforeAll, Before, After} = require('cucumber')
const Logger = require('logplease')
const TestData = require('../util/test_data')
const LoginPage = require('./pages/login_page')
const eSportsPage = require('./pages/esports_page')
const TournamentsPage = require('./pages/tournaments_page')
const ProfilePage = require('./pages/profile_page')

let testData

const logger = Logger.create(
  'esports_playground',
  {filename: 'esports_playground.log', appendFile: true}
)

BeforeAll(async function () {
  logger.info('Initialize test run...')
})

Before(async function (scenario) {
  this.logger = logger
  await this.webdriver.init()

  // init page objects
  this.loginPage = new LoginPage(this)
  this.eSportsPage = new eSportsPage(this)
  this.tournamentsPage = new TournamentsPage(this)
  this.profilePage = new ProfilePage(this)

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
