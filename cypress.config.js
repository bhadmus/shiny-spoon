const { defineConfig } = require('cypress');
const path = require('path')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.trymima.com/',
    defaultCommandTimeout: 10000,
    viewportHeight: 960,
    viewportWidth: 1530,
    chromeWebSecurity: false,
    specPattern: '**/*.feature',
    supportFile: path.resolve(__dirname, 'cypress/support/e2e.js'),
    setupNodeEvents,
  },
});
