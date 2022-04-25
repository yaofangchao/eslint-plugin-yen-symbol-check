module.exports = {
    rules: {
      'yen-symbol-check': require('./rules/yen-symbol-check'),
    },
    configs: {
      'property': {
        rules: {
          'yen-symbol-check/yen-symbol-check': 'warn',
        }
      }
    }
  }




