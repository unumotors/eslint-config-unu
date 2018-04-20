module.exports = {
    extends: [
        'plugin:vue/recommended'
    ],
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    rules: {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never'
        }],
        'vue/no-dupe-keys': 'error',
        'vue/no-reserved-keys': 'error',
        'vue/no-shared-component-data': 'error',
        'vue/require-valid-default-prop': 'error',
        'vue/return-in-computed-property': 'error',
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-side-effects-in-computed-properties': 'error',
        'vue/order-in-components': 'warn',
        'vue/require-prop-types': 'warn'
    }
};
