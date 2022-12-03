// 1. Настроить фреймворк WebdriverIO для запуска тестов.
// 2. Подготовить 3-5 тестовых сценария проходящих по официальному сайту фреймворка;
// 3. Автоматизировать сценарии с использованием выбранного фреймворка используя:
// - Page Object Model;
// - API выбранного фреймворка;
// - структуру одного из фреймворков: Jasmine, Mocha;
// 4. Добавить eslint и репортер;
const allureReporter = require('@wdio/allure-reporter').default;

const { expect } = require('chai');
const { MainPage } = require('./pageobjects/MainPage');
const { GettingStarted } = require('./pageobjects/GettingStarted');
const { ApiPage } = require('./pageobjects/ApiPage');

const mainPage = new MainPage();
const gettingStarted = new GettingStarted();
const apiPage = new ApiPage();

beforeEach(async () => {
    await browser.url('https://webdriver.io/');
    // await browser.pause(1000);
});

afterEach(async () => {
    await browser.pause(1000);
    await browser.reloadSession();
});

describe('Lesson 20. Webdriver IO', () => {
    it('page with getting started title should be opened after click on get started button on main page', async () => {
        allureReporter.addFeature('navigation feature');
        await mainPage.clickOn(mainPage.getStartedButton);
        expect(await gettingStarted.getElementText(gettingStarted.headerTitle)).to.equal('Getting Started');
    });

    it('page url should contain search request "clearValue" text when appropriate page will be opened', async () => {
        allureReporter.addFeature('search feature');
        await mainPage.clickOn(mainPage.searchButton);
        await mainPage.searchRequest('ClearValue');
        await $(mainPage.searchResultPlaceholder).waitForClickable();
        await browser.keys('\uE007');
        await expect(await browser.getUrl()).to.include('clearValue');
    });

    it('page title for API -> elements -> getCSSProperty should be getCSSProperty', async () => {
        allureReporter.addFeature('navigation feature');
        await mainPage.clickOn(mainPage.apiButton);
        await apiPage.clickOn(apiPage.sidebarElementItem);
        await $(apiPage.getCSSPropertySection).waitForClickable();
        await apiPage.clickOn(apiPage.getCSSPropertySection);
        await browser.pause(1000);
        expect(await apiPage.getElementText(apiPage.headerTitle)).to.include('getCSSProperty');
    });

    it('navbar should have black color (rgba(0,0,0,1)) after switch mode from light to dark', async () => {
        allureReporter.addFeature('dark mode feature');
        await mainPage.clickOn(mainPage.darkLightModeSwitcher);
        const navBarBgColor = await $(mainPage.navBar).getCSSProperty('background-color');
        expect(await navBarBgColor.value).to.equal('rgba(0,0,0,1)');
    });
});
