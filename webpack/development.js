/*eslint-disable*/

const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: [ 'es2015', 'react' ]
      }
    }]
  },
  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
