const passport = require('passport');

<<<<<<< HEAD
module.exports = app => {
=======
modlue.exports = app => {
>>>>>>> 99f3035ac7b19b05c0a6205c80737e458aafe985
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
<<<<<<< HEAD

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (res, req) => {
    req.logout();
    res.send(req.user);
  });
=======
>>>>>>> 99f3035ac7b19b05c0a6205c80737e458aafe985
};
