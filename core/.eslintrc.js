module.exports = {
  root: true,
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    parser: 'babel-eslint',
  },
  extends: ['plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
  },
};
