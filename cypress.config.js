const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2kn4bo",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
