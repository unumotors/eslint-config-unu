# eslint-config-unu

This package provides unu's .eslintrc as an extensible shared config. And optional rulesets for different type of projects.

## Usage

This package should be included in `package.json` dependencies (devDependencies prereffably). So first install it with `npm install --dev eslint-config-unu`.

For using sharable configurations in your projects, please follow insturctions in eslint's webpage: https://eslint.org/docs/developer-guide/shareable-configs

### A simple setup example:

Create a `.eslintrc.js` file with content:

```js
module.exports = {
    extends: 'unu'
};

```

Will allow you to use shared configuration right away.


Or if you need to include different rulesets and custom globals, you can extend your configuration with any setting you like.

```js
module.exports = {
    extends: [
        'unu',
        'unu/rules/closure-compiler'
    ],
    globals: {
        'analytics': false
    }
};
```
