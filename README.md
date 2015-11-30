# eslint-plugin-eslint-defines-plugin

Adds basic support for #ifdef and #ifndef in js code.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-defines-plugin`:

```
$ npm install eslint-plugin-eslint-defines-plugin --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-eslint-defines-plugin` globally.

## Usage

Add `eslint-defines-plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-defines-plugin"
    ]
}
```





