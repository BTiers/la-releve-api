const publicRoutes = {
  'POST /users': 'UserController.register',
  'POST /sessions': 'UserController.login',
};

module.exports = publicRoutes;
