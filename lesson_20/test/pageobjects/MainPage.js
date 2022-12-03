const { BasePage } = require('./BasePage');

class MainPage extends BasePage {
  constructor() {
    super();
    this.getStartedButton = "//*[@class='buttons_pzbO']//*[@href='/docs/gettingstarted']";
  }
}

module.exports = { MainPage };
