// esports_page.js
const Page = require('../page')

// Custom timeouts
const WAIT_TIME_SHORT = 5000
const WAIT_TIME_MEDIUM = 10000
const WAIT_TIME_LONG = 30000

class eSportsPage extends Page {
  constructor (world) {
    super(world)
  }

  // Page methods
  async openeSportsPage () {
    await super.open('playground', 'esports')
  }
}

module.exports = eSportsPage
