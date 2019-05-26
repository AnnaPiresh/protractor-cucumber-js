const {AfterAll} = require('cucumber');

AfterAll(()=> browser.close());