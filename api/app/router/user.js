'use strict';

module.exports = app => {
  app.router.get('/user/list', app.controller.user.getUserList);
};
