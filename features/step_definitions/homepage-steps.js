const {Given,When,Then} = require('cucumber');
const chai = require('chai');
const expect = chai.expect;

Given('user opens Google homepage', function (callback) {
            browser.get('https://www.google.com/');

            expect(browser.getTitle()).to.equal('Google');
           return callback();
         });

When('user enters search term {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
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
