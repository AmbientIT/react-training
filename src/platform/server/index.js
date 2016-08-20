process.env.BROWSER = true;
require('babel-register')({
  presets: ['es2015-native-modules', 'stage-0', 'react'],
  plugins: ['transform-decorators-legacy'],
});

const path = require('path');
const fs = require('fs');
const glob = require('glob-promise');
const express = require('express');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const open = require('open');
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const config = require('./config');

const webpackConfig = require(config.paths.webpack);
const compiler = webpack(webpackConfig);

const webpackDevInstance = webpackDev(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
});

const webpackHotInstance = webpackHot(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
});

function setMockRouter(server, mocks) {
  server.use(
    '/api',
    jsonServer.router(
      mocks.reduce((db, mockPath) => {
        db[path.basename(mockPath).replace('.json', '')] = require(`${mockPath}`);
        return db;
      }, {})
    )
  );
  return mocks;
}

const server = jsonServer.create();
server.set('view engine', 'ejs');
server.use(morgan('dev', { skip: req => req.path.match(/^\/__what/) }));
server.use('/', express.static('public'));
server.use(bodyParser.json());
server.use(webpackDevInstance);
server.use(webpackHotInstance);

glob(config.paths.modules)
  .then(modules => modules.forEach(modulePath => require(`${modulePath}`)(server)))
  .then(() => glob(config.paths.mockData))
  .then(mocks => setMockRouter(server, mocks))
  .then(mocks => fs.watch(config.paths.usersMock, () => setMockRouter(server, mocks)))
  .then(() => webpackDevInstance.waitUntilValid(
    () => server.listen(config.port, () => {
      console.log(`express server listening on port ${config.port}`);
      open(`http://localhost:${config.port}`);
    })
  ))
  .catch(err => console.error(err));
