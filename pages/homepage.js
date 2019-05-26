const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

browser.waitForAngularEnabled(false);

module.exports = {
  open: (url, name) => {
    browser.driver.get(url);
    expect(browser.getTitle()).to.eventually.equal(name);
  },

  enterSearchTerm : (term) => {
   return browser.driver.findElement(by.name('q')).sendKeys(term);
  },

  submit: () => {
    return browser.driver.findElement(by.name('q')).submit();
  }
};
