/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
    "no-console": "warn",
    "react/self-closing-comp": ["warn", { component: true, html: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
