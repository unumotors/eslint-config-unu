module.exports = {
    rules: {
        'no-unused-vars': ['error', {
            vars: 'all',
            args: 'none', // Ignore args for GCC interfaces & abstract class methods
            ignoreRestSiblings: false
        }],
        'no-unused-expressions': 'off', // closure compiler takes care of these for us
        'no-empty-function': ['error', {
            allow: [
                'constructors',  // Singletons can have empty constructors just for @private flag
                'methods', // Interface definitions & implementations
                'getters' // Interface definitions & implementations
            ]
        }],
        'no-useless-constructor': 'off', // this is for empty constructor function'
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/first': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off', // TODO this is temporary until problem with GCC is resolved
        'no-restricted-properties': ['error', { // this part is stolen from airbnb base with Math.pow rule removed
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated',
        }, {
            property: '__defineGetter__',
            message: 'Please use Object.defineProperty instead.',
        }, {
            property: '__defineSetter__',
            message: 'Please use Object.defineProperty instead.',
        }]
    },
    globals: {
        'goog': false
    }
};
