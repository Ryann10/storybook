module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "prettier",
    "airbnb-typescript",
    "prettier/react",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  "rules": {
    // disable the rule for all files
    "@typescript-eslint/explicit-function-return-type": "off"
  },
};
