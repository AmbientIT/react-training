/*eslint-disable*/

const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    })
  ]
}
