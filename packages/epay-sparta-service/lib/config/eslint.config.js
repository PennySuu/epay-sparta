// 创建这个文件的话，本王推荐用eslint --init创建
module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': '@babel/eslint-parser',
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    // https://github.com/BenoitZugmeyer/eslint-plugin-html
    'html'
  ],
  'settings': {
    'html/html-extensions': ['.html', '.vue'],
  },
  // https://eslint.org/docs/rules/
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': 0,
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'no-trailing-spaces': [
      'error',
      {
        'skipBlankLines': true
      }
    ],
    'no-multi-spaces': 2,
    'space-before-blocks': 2,
    // https://eslint.org/docs/user-guide/configuring#using-configuration-files
    // "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
    'no-prototype-builtins': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    // vue rules
    'vue/html-self-closing': 0,
    'vue/no-v-html': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/component-definition-name-casing': 0,
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': [2, {
      'singleline': 3,
      'multiline': {
        'max': 3,
      }
    }]
  }
}