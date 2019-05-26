browser.waitForAngularEnabled(false);

module.exports = {
  open: (url) => {
    browser.driver.get(url);
  },

  enterSearchTerm : (term) => {
   return browser.driver.findElement(by.name('q')).sendKeys(term);
  },

  submit: () => {
    return browser.driver.findElement(by.name('q')).submit();
  }
};
