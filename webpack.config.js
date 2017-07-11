const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SOURCE_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './build');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: SOURCE_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: './index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {loader: 'babel-loader'}
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'sass-loader', options: {sourceMap: true}}
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    open: true,
    port: 9000,
    stats: 'errors-only'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: isProduction
      }
    })
  ]
}

module.exports = config;
