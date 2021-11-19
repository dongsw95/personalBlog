'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUserList() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = UserController;
