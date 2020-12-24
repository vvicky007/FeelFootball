const path = require('path');

const config = {
  resolve:{
    modules:[path.resolve('./lib'),path.resolve('./node_modules')]
  },
  entry: ['@babel/polyfill', './lib/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test:/\.svg$/,
        use:[
          {
           loader: 'svg-url-loader',
           options: {
            limit: 10000,
          },
          }
        ]
      }
    ]
  }
};

module.exports = config;