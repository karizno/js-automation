# Тесты из домашнего задания из занятия 20, где мы писали тесты на WDIO, переписать на cucumber фреймворк;
# - сделать все настройки фреймворка;
# - сделать шаги максимально универсальными, чтобы их можно было переиспользовать в разных тестах;
# - передавать в шаги параметры чтобы их можно было переиспользовать;
# - настроить cucumber-html-reporter.

Feature: Lesson 20. WebdriverIO site testing using Cucumber framework

  Background:
    Given I navigate to 'https://webdriver.io/' page

  Scenario: As a user, I click on 'Get Started' button and see title 'Getting Started' on opened page
    When I click '//*[@class="buttons_pzbO"]//*[@href="/docs/gettingstarted"]' button
    Then I expect '//header/h1' title should be 'Getting Started'

  Scenario: As a user, I navigate through menu 'API -> elements -> getCSSProperty' and I see title 'getCSSProperty'
    When I click '//*[@class="navbar__items"]//*[@href="/docs/api"]' button
    And I click '//*[@class="sidebar_njMd"]//*[@href="/docs/api/element"]' button
    And I click '//*[@href="/docs/api/element/getCSSProperty"]' button
    Then I expect '//header/h1' title should be 'getCSSProperty'

  Scenario: As a user, I click on dark mode switcher and see black navigation bar
    When I click '//*[@class="clean-btn toggleButton_gllP"]' button
    Then I expect page element '//*[@class="navbar navbar--fixed-top"]' should have 'rgba(0,0,0,1)' color

  Scenario: As a user, I see that url contains search result if site contains appropriate section
    When I click '//*[@class="DocSearch DocSearch-Button"]' button
    When I fill in request 'clearValue' in search field '//*[@class="DocSearch-Input"]'
    And I press Enter button
    Then I expect browser url should contain 'clearValue' value