const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');

Given('I navigate to {string} page', async (url) => {
    await browser.url(url)
});

When('I click {string} button', async (button) => {
    await $(button).waitForClickable();
    await $(button).click();
});

When('I press Enter button', async () => {
    await browser.keys('\uE007');
});

Then('I expect {string} title should be {string}', async (header, title) => {
    await $(header).waitForDisplayed();
    expect(await $(header).getText()).to.equal(title);
})

Then('I expect page element {string} should have {string} color', async (element, color) => {
    await $(element).waitForDisplayed();
    const elementColor = await $(element).getCSSProperty('background-color');
    expect(await elementColor.value).to.equal(color);
})

When('I fill in request {string} in search field {string}', async (request, searchField) => {
    await $(searchField).waitForDisplayed();
    await $(searchField).setValue(request);
    await browser.pause(1000);
});

Then ('I expect browser url should contain {string} value', async (url) => {
    await expect(await browser.getUrl()).to.include(url);
})