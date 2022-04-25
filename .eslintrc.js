module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false
    }
  },
  extends: [ 
    // 'plugin:yen-symbol-check/property',
    'plugin:vue/recommended',
    'eslint:recommended',  
  ], 
  plugins: ['vue','yen-symbol-check'],
  rules: {
    'yen-symbol-check/yen-symbol-check': 1,
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
