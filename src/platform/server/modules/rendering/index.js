module.exports = server => {
  server.get('*', (req, res, next) => {
    return req.path.match(/^\/api/)
      || req.path.match(/^\/public/)
      || req.path.match(/^\/__what/) ? next() : res.render('index');
  });
};
