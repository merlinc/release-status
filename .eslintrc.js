module.exports = {
  root: true,
  extends: [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:react/recommended"
  ],
  plugins: ["jest", "jsx-a11y", "react", "import", "react-hooks"],
  env: {
    node: true,
    jest: true,
    mocha: true
  },
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [".storybook/**", "stories/**"]
      }
    ],
    "react/static-property-placement": [2, "static public field"],
    "react/jsx-props-no-spreading": [
      2,
      {
        custom: "ignore"
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  parser: "babel-eslint",
  // "parser": "esprima",
  parserOptions: {
    ecmaVersion: 2018,
    jsx: true
  }
};
