const {Given,When,Then} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

let searchField = element(by.name('q'));

Given('user opens Google homepage', function () {
    const title = "Google";
    browser.driver.get('https://www.google.com/');

    expect(browser.getTitle()).to.eventually.equal(title);
});

When('user enters search term {string}', function (string) {
    searchField.sendKeys(string);
});

When('presses Enter on keyboard', function () {
    searchField.submit();
});

Then('title of page is {string}', function (string) {
    expect(browser.getTitle()).to.eventually.equal(string);
});


Then('search results are matching the search term', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
