module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base'
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'no-tabs': 'off',
        'linebreak-style': ['error', 'unix'],
        'object-curly-spacing': ['error', 'always'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'no-new': 'off',
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'no-alert': 'warn',
        'max-len': ['error', { code: 220 }],
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off',
        'no-var': 'error',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        camelcase: 'off'
    }
}
