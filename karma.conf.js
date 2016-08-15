/*eslint-disable*/
const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
      'src/**/*.spec.js',
    ],
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'src/**/*.jsx': ['webpack', 'sourcemap'],
    },
    webpack: {
      devtool: 'inline-source-map',
      resolve: webpackConfig.resolve,
      module: {
        loaders: webpackConfig.module.loaders,
        postLoaders: [
          {
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'istanbul-instrumenter',
         }
       ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true,
        jsdom: 'window',
        cheerio: 'window',
      },
    },
    webpackServer: {
      noInfo: true,
    },
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-coverage',
    ],
    babelPreprocessor: {
      options: {
        presets: ['es2015-native-modules', 'stage-0', 'react'],
      },
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },
    reporters: ['spec', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  });
};
