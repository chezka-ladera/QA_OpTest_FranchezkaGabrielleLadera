const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://yahshuapayroll.com/signin/?login=yes", 
    supportFile: "cypress/support/e2e.js",
  },
});  },
});
