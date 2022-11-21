// 1. зайти на сайт https://chromedriver.chromium.org/home;
// 2. проверить текст основного тайтла "ChromeDriver";
// 3. кликнуть в хедере на пункт "Chrome Extensions";
// 4. сделать хайлайт для нового основного тайтла;
// 5. проверить что новый тайтл стал "Chrome Extensions";

// 1. Перейти на страницу поиска;
// 2. Ввести driver в поиск;
// 3. Проверить что первая ссылка содержит слово driver;

// 1. Открыть в меню "Дополнительно"
// 2. Нажать "Mobile Emulation"
// 3. Проверить что url содержит /mobile-emulation


const {Builder, By, Key, until} = require('selenium-webdriver');
const {expect} = require('chai');

describe('Lesson 17. WebDriver', function () {

    let driver;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://chromedriver.chromium.org/home');
    });

    afterEach(async () => {
        await driver.close();
    });

    it('page title should contain "Chrome Extensions" when user switches from main page to extension page', async () => {
        let title = await driver.getTitle();
        expect(title).to.equal('ChromeDriver - WebDriver for Chrome');
        let chromeExtMenuItem = await driver.findElement(By.xpath("//*[@id='WDxLfe']//*[@href='/extensions' and @data-level='1']"));
        await driver.actions().click(chromeExtMenuItem).perform();
        title = await driver.getTitle();
        expect(title).to.equal('ChromeDriver - WebDriver for Chrome - Chrome Extensions');
    });

    // it('link of first GOOGLE search result for word "driver" should contain "driver"', async () => {
    //     await driver.get('https://www.google.com/');
    //     let searchField = await driver.findElement(By.xpath('//*[@name="q"]'));
    //     await driver.actions().click(searchField).perform();
    //     await driver.actions().sendKeys('driver', Key.ENTER).perform();
    //     let firstSearchResult = await driver.findElement(By.xpath('//*[@class="yuRUbf"]/a')).getAttribute('href');
    //     // console.log(firstSearchResult);
    //     expect(firstSearchResult).to.include('driver');
    //     await driver.sleep(3000);
    // });

    it('link of first search result for word "driver" should contain "driver"', async () => {
        let searchButton = await driver.findElement(By.xpath('//*[@class="RBEWZc"]'));
        await driver.actions().click(searchButton).perform();
        let searchField = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@class="whsOnd zHQkBf"]'))));
        await driver.actions().click(searchField).sendKeys('driver', Key.ENTER).perform();
        await driver.sleep(2000);
        let firstSearchResultLink = await driver.findElement(By.xpath('//*[@class="vH0yjd"]/a[@data-position="1"]')).getAttribute('href');
        //console.log(firstSearchResultLink);
        expect(firstSearchResultLink).to.include('driver');
    });

    it('"Mobile Emulation" page url should contain "/mobile-emulation"', async () => {
        let moreMenuItem = await driver.findElement(By.xpath('//*[@class="VsJjtf oXBWEc"]'))
        await driver.actions().move({origin: moreMenuItem}).perform();
        let mobEmulationItem = await driver.findElement(By.xpath('//*[@class="VsJjtf oXBWEc"]//*[@href="/mobile-emulation"]'));   
        await driver.actions().click(mobEmulationItem).perform();
        let mobEmulationURL = await driver.getCurrentUrl(); 
        expect(mobEmulationURL).to.include('/mobile-emulation');
    });

})