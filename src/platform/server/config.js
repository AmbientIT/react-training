const path = require('path');

module.exports = {
  port: 3000,
  paths: {
    modules: path.join(__dirname, 'modules/**/index.js'),
    mockData: path.join(__dirname, 'mockData/*.json'),
    usersMock: path.join(__dirname, 'mockData/user.json'),
    webpack: '../../../webpack.config',
  },
};
