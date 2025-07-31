const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  video: true,
  retries: 3,
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
