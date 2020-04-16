const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './example/index.js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true, // 自动地打开一个浏览器并访问这个服务器的地址
    port: 9000
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    }),
    new CleanWebpackPlugin({
      dry: false,
      cleanStaleWebpackAssets: true,
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, 'dist'),
        "**/*"
      ]
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'keyboardnavigation'
  },
}