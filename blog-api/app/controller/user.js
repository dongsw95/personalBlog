const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUserList() {
    const { ctx } = this;
    const users = await ctx.service.user.getUserList();
    return (ctx.body = {
      status: 200,
      data: users
    });
  }

  async createUser() {}
}

module.exports = UserController;
