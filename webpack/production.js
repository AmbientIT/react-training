/*eslint-disable*/

const webpack = require('webpack');

module.exports = {
  entry: {
    main: './platform/browser/index.jsx'
  },
  output: {
    path: 'dist',
    filename: '[name].[hash].bundle.js',
    sourceMapFilename: '[name].[hash].map'
  },
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
