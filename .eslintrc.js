module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs',
    'prettier',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    /*****************
     * ESLint Rules
     ****************/
    semi: 0,
    'space-before-function-paren': 0,
    'arrow-parens': ['error', 'always'],
    /*****************
     * Vue Rules
     ****************/
    // 'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/require-explicit-emits': 0,
    // 'vue/html-closing-bracket-newline': 0,
    /*****************
     * Nuxt Rules
     ****************/
    'nuxt/no-cjs-in-config': 0,
  },
}
