exports.config = {
  framework: 'custom',
  seleniumAddress: 'http://localhost:4444/wd/hub',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome'
    },
    specs: [
      'features/*.feature'
    ],
    cucumberOpts: {
      require: 'features/step_definitions/homepage-steps.js',
      tags: false,
      profile: false,
      'no-source': true
    }
}