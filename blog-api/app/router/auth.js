module.exports = (app) => {
  // 登录
  app.router.post('/login', app.controller.auth.login);
};
