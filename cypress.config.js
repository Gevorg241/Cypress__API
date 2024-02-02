const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
  token: "Bearer 94dd2809b6b6307afbad4b703de1af23657c86093316e76c1900590f006448e7"
  },

  e2e: {
    baseUrl: "https://gorest.co.in/public/v2/users"
  },
});