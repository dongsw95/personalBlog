const Controller = require('egg').Controller;

class AuthController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = AuthController;
