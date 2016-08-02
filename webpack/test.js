/*eslint-disable*/


const DefinePlugin = require('webpack/lib/DefinePlugin');
const ENV = require('yargs').argv.env || 'development';

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: '../src',
  },
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: 'node_modules'
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
        '../node_modules/rxjs',
        '../node_modules/@angular'
      ]}

    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          compilerOptions: {
            removeComments: true
          }
        },
        exclude: [/\.e2e\.ts$/]
      },
      { test: /\.json$/, loader: 'json-loader', exclude: '../src/index.html' },
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'], exclude: '../src/index.html' },
      { test: /\.html$/, loader: 'raw-loader', exclude: '../src/index.html' }

    ],
    postLoaders: [
      {
        test: /\.(js|ts)$/, loader: 'istanbul-instrumenter-loader',
        include: '../src',
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      }

    ]
  },
  plugins: [
    new DefinePlugin({
      'WEBPACK_ENV': 'test'
    }),
  ],
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },
  node: {
    global: 'window',
    process: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
