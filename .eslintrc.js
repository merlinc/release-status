module.exports = {
  root: true,
  extends: [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:react/recommended"
  ],
  plugins: ["jest", "jsx-a11y", "react", "import"],
  env: {
    node: true,
    jest: true,
    mocha: true
  },
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  },
  parser: "babel-eslint",
  // "parser": "esprima",
  parserOptions: {
    ecmaVersion: 2018,
    jsx: true
  }
};
