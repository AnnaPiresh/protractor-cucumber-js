const {Given,When,Then} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const homepage = require('../pages/homepage');
let term = '';


Given('user opens {string} homepage', (string) => {
  homepage.open(browser.baseUrl, string);
});

When('user enters search term {string}', async (string) => {
  await homepage.enterSearchTerm(string);
  term = string;
});

When('presses Enter on keyboard', async () => {
  await homepage.submit();
});

Then('title of page is {string}', (string) => {
    expect(browser.getTitle()).to.eventually.equal(`${term} - ${string}`);
});


Then('search results are matching the search term', () => {
 browser.driver.findElements(by.css('a h3')).then((elements)=> {
   for(let i = 0; i < elements.length; i++){
     expect(elements[i].getText()).to.eventually.contains(term);
   }
 });
});

