/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  require('./router/user')(app);
};
