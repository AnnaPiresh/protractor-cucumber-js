const {Given,When,Then} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;


Given('user opens Google homepage', function () {
    const title = "Google";
    browser.get('https://www.google.com/');

    expect(browser.getTitle()).to.eventually.equal(title);
});

When('user enters search term {string}', function (string) {
    let searchField = element(by.name('q'));

    browser.waitForAngular(false);

    searchField.sendKeys(string);
    searchField.submit();
});

When('presses Enter on keyboard', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

Then('title of page is {string}', function (string) {
            // Write code here that turns the phrase above into concrete actions
            return 'pending';
          });


Then('search results are matching the search term', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
