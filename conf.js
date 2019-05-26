exports.config = {
  framework: 'custom',
  defaultTimeoutInterval: 30000,
  baseUrl: 'https://www.google.com/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: [ 'lang=en-GB' ],
        prefs: {
          intl: { accept_languages: "en-GB"}
        }
      }
    },
    specs: [
      'features/*.feature'
    ],
    cucumberOpts: {
      require: 'step_definitions/homepage-steps.js',
      tags: false,
      profile: false,
      'no-source': true
    }
};