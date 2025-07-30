const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  video: true,
  retries: 2,
  viewportWidth: 1600,
  viewportHeight: 900,
  e2e: {
    baseUrl: 'https://blog.agibank.com.br',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },
});
