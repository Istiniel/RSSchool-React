import codeCoverageTask from '@cypress/code-coverage/task';
import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },

  e2e: {
    baseUrl: 'http://localhost:5173/',
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor());
      codeCoverageTask(on, config);
      return config;
    },
  },

  video: false,
  experimentalFetchPolyfill: true,
  defaultCommandTimeout: 10000,
  screenshotOnRunFailure: false,
});
