const {setWorldConstructor} = require('cucumber')
let webdriver = require('webdriverio')

function CustomWorld({attach, parameters}) {
  this.attach = attach
  this.parameters = parameters

  const options = { 
    desiredCapabilities: { 
      browserName: parameters.browser 
    } 
  }
  this.webdriver = webdriver.remote(options);
}

setWorldConstructor(CustomWorld)
