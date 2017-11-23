const passport = require('passport');

modlue.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (res, req) => {
    req.logout();
    res.send(req.user);
  });
};
