'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserList(uid) {
    const user = await this.ctx.db.query('select * from user where uid = ?', uid);
    return user;
  }
}

module.exports = UserService;
