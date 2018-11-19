const TestData = require('../util/test_data')

class Page {
  constructor (world) {
    this.world = world
    this.webdriver = world.webdriver
    this.logger = world.logger
  }

  async open (project, relativeUrl) {
    // Fullscreen the window
    await this.webdriver.windowHandleFullscreen()
    await this.webdriver.url(`${TestData.getBaseUrl(project)}/${relativeUrl}`)
  }
}

module.exports = Page
