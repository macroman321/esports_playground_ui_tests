const path = require('path')
const yaml = require('js-yaml')
const fs = require('fs')
const _ = require('lodash')

const config_path = path.join(
  path.dirname(__dirname),
  'config')

class TestData {
  // Loads the config and test data from the following files:
  //   cd_<environment>.yml
  //   td_<environment>.yml
  //
  // Parameters:
  // environment - stage, prod (default: stage)
  //
  static load (environment) {
    TestData.environment = environment || 'stage'
    console.log(`Loading test data for ${TestData.environment} environment...`)

    let config_data
    let test_data

    try {
      const cd_file = path.join(config_path, `cd_${TestData.environment}.yml`)
      config_data = yaml.safeLoad(fs.readFileSync(cd_file, 'utf8'))
    } catch (e) {
      console.log(`Unable to load config data for ${TestData.environment}!`)
      throw e
    }

    try {
      const td_file = path.join(config_path, `td_${TestData.environment}.yml`)
      test_data = yaml.safeLoad(fs.readFileSync(td_file, 'utf8'))
    } catch (e) {
      console.log(`Unable to load ${TestData.environment} test data!`)
      throw e
    }

    try {
      TestData.data = _.merge(config_data, test_data)
    } catch (e) {
      console.log('Unable to load test data!')
      console.log(e)
    }
  }

  static getUser (userId) {
    return TestData.data.users[userId]
  }

  static getBaseUrl (project) {
    return TestData.data.url[project]
  }
}

module.exports = TestData
