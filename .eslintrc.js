module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": "off",
        "no-shadow": "off",
        "no-undef": "off",
        quotes: "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  "prettier/prettier": [
    "error",
    {
      endOfLine: "auto",
    },
  ],
};
