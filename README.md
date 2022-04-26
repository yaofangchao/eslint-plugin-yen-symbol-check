# eslint-plugin-synlint

In the Vue project, eslint prompts to verify whether the Yen symbol ¥ is used

**Notice** Change the rule to skip the attribute verification prompt of this

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-yen-symbol-check`:

```sh
npm install eslint-plugin-yen-symbol-check --save-dev
```

## Usage

Add `synlint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "yen-symbol-check"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "yen-symbol-check/yen-symbol-check": 2
    }
}
```

## Supported Rules

* Fill in provided rules here

### test 

npm i && npm link && npm link eslint-plugin-yen-symbol-check && npm run test


