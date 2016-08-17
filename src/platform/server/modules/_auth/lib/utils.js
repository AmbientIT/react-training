const jwt = require('jwt-simple');
const moment = require('moment');
const path = require('path');

const config = {
  tokenDurationInSecond: '10000000',
  TOKEN_SECRET: 'YOUR_UNIQUE_JWT_TOKEN_SECRET',
  mockPath: path.join(process.cwd(), 'src/platform/server/mockData/user.json'),
};

const ensureAuthenticated = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401)
      .send({ message: 'Please make sure your request has an Authorization header' });
  }
  const token = req.headers.authorization.split(' ')[1];

  let payload = null;
  try {
    payload = jwt.decode(token, config.TOKEN_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: 'invalid token',
    });
  }
  if (payload.exp < moment().unix) {
    return res.status('401').json({
      message: 'token expired',
    });
  }
  req.user = payload.user;
  return next();
};

const generateToken = user => {
  const payload = {
    user,
    exp: moment().add(config.tokenDurationInSecond, 's').unix(),
    createdAt: moment().unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};

const errorHandler = (res, err, status) => {
  console.error(err);
  res.status(status).json(err);
};

module.exports = {
  ensureAuthenticated,
  config,
  generateToken,
  errorHandler,
};
