const { BasePage } = require('./BasePage');

class ApiPage extends BasePage {
  constructor() {
    super();
    this.sidebarElementItem = "//*[@class='sidebar_njMd']//*[@href='/docs/api/element']";
    this.getCSSPropertySection = "//*[@href='/docs/api/element/getCSSProperty']";
    this.headerTitle = '//header/h1';
  }
}

module.exports = { ApiPage };
