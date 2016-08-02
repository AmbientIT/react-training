/*eslint-disable*/

'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ENV = require('yargs').argv.env || 'development';



module.exports = webpackMerge.smart(require(`./webpack/${ENV}`), {
  entry: {
    vendor: './src/app/vendor',
    main: './src/app/index'
  },
  output: {
    path: 'dist',
    filename: '[name].[hash].bundle.js',
    sourceMapFilename: '[name].[hash].map'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
    modulesDirectories: ['node_modules']
  },
  module: {
    preLoaders: [
     {
       test: /\.js$/,
       loaders: ['eslint-loader', 'source-map-loader'],
       exclude: /node_modules/,
     },
   ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: [ 'es2015', 'react' ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: ['src/index.html']
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        loader: 'file?name=dist/images/[name].[ext]'
      },
      {
        test: /\.woff2?$/,
        loader: 'url?name=dist/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
       },
      {
        test: /\.(ttf|eot|svg)$/,
        loader: 'file?name=dist/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: ''
    }]),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'src/index.html'),
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': `"${ENV}"`
      }
    })
  ]
})
