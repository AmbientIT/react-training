const jwt = require('jwt-simple');
const fs = require('fs-promise');
const { config, ensureAuthenticated, generateToken, errorHandler } = require('./lib/utils');

module.exports = server => {
  server.post('/auth/signup', (req, res) => {
    fs.readJson(config.mockPath)
      .then(data => {
        req.body.id = data.length;
        data.push(req.body);
        return fs.outputJson(config.mockPath, data);
      })
      .then(() => {
        res.json({ token: jwt.encode(req.body, config.TOKEN_SECRET) });
      })
      .catch(err => errorHandler(res, err, 500));
  });

  server.post('/auth/login', (req, res) => {
    fs.readJson(config.mockPath)
      .then(file => {
        const user = file.find(fileUser => fileUser.email === req.body.email);
        if (user) {
          if (user.password === req.body.password) {
            delete user.password;
            const token = generateToken(user);
            res.json({ token, user });
          } else {
            errorHandler(res, new Error('forbidden'), 403);
          }
        } else {
          errorHandler(res, new Error('forbidden'), 403);
        }
      })
      .catch(err => errorHandler(res, err, 500));
  });

  server.get('/auth/me',
    ensureAuthenticated,
    (req, res) => res.json(req.user)
  );
};
