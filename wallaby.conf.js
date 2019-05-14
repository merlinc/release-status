/* eslint-disable import/no-extraneous-dependencies, global-require */

module.exports = wallaby => ({
  files: [
    "button.stories.js.js.js",
    "@(components|pages|static)/**/*.js?(x)",
    "!(components|pages|static)/**/*.spec.js",
    "!node_modules/**"
  ],
  tests: ["button.stories.js.js.spec.js", "**/*.spec.js", "!node_modules/**"],
  env: {
    type: "node",
    runner: "node",
    NODE_ENV: "test"
  },

  compilers: {
    "**/*.js?": wallaby.compilers.babel({
      babel: require("babel-core"),
      presets: ["react-app"]
    })
  },

  testFramework: "jest",
  debug: true
});
