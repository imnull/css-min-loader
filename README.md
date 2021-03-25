# css-min-loader

A loader to compress CSS code in webpack.

# Why

When we bundle our project by webpack, the CSS code will be merged in JS as a STRING content.If you've checked the bundle code, you'll find the CSS code has NOT been compressed:

- with comment
- with break-line and blank chars

For example:
```js
r.push([n.i,"/* stylelint-disable */\n*::after {\n  box-sizing: border-box;\n}\n/* stylelint-disable at-rule-no-unknown */\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n ... "]
```

So I want to clean them, and lower the bundle file size.

# Why loader

Webpack loader is a single functional module. For easiler using e.g installing or configing, I think loader is a best way to implement my wish, while the wish so likely should be a plugin-way.

# How to use

https://www.npmjs.com/package/css-min-loader

## Install

```bash
$ npm i --save-dev css-min-loader
```

## Config

```js
{
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader',
        'css-min-loader',
    ],
},
{
    test: /\.less$/i,
    use: [
        'style-loader',
        'css-loader',
        'css-min-loader',
        {
            loader: 'less-loader',
            options: {
                lessOptions: {
                    javascriptEnabled: true,
                }
            },
        }
    ],
}
```

That's all.