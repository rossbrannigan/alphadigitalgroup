import { defineConfig } from "cypress";

export default defineConfig({
  // General Cypress configuration
  // ...

  // Specific configurations for different environments
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  // Project ID configuration
  projectId: "5f7zuz", // Replace with your actual project ID
});

