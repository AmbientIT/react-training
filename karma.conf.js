/*eslint-disable*/

module.exports = function(config) {
  var testWebpackConfig = require('./webpack/test.js');
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    exclude: [ ],
    files: [ { pattern: './test/unit.js', watched: false } ],
    preprocessors: { './test/unit.js': ['coverage', 'webpack', 'sourcemap'] },
    webpack: testWebpackConfig,
    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'html' }
      ]
    },
    webpackServer: { noInfo: true },
    reporters: [ 'mocha', 'coverage' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [
      'Chrome'
    ],
    singleRun: true
  });

};
