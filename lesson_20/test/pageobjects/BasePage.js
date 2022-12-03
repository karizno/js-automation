class BasePage {
  constructor() {
    this.searchButton = "//*[@class='DocSearch DocSearch-Button']";
    this.searchInput = "//*[@class='DocSearch-Input']";
    this.searchResultPlaceholder = "//*[@id='docsearch-item-0']";
    this.apiButton = "//*[@class='navbar__items']//*[@href='/docs/api']";
    this.darkLightModeSwitcher = "//*[@class='clean-btn toggleButton_gllP']";
    this.navBar = "//*[@class='navbar navbar--fixed-top']";
  }

  async navigate(path) {
    return browser.url(path);
  }

  async clickOn(selector) {
    return $(selector).click();
  }

  async getElementText(selector) {
    return $(selector).getText();
  }

  async searchRequest(request, selector = this.searchInput) {
    return $(selector).setValue(request);
  }
}

module.exports = { BasePage };
