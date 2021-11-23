module.exports = (app) => {
  // 注册
  app.router.post('/user', app.controller.user.createUser);

  app.router.get('/user/list', app.controller.user.getUserList);
};
