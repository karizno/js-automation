const { BasePage } = require('./BasePage');

class GettingStarted extends BasePage {
  constructor() {
    super();
    this.headerTitle = '//header/h1';
  }
}

module.exports = { GettingStarted };
