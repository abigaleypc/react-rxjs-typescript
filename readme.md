
## 添加 Webpack

* npm install webpack --save-dev
* npm install webpack-dev-server --save-dev # 启动服务
* npm install html-webpack-plugin --save-dev # 添加html模板
* npm install --save-dev typescript ts-loader # 用于编译typescript

## 引入typescript 

webpack 中添加

```js
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
```


