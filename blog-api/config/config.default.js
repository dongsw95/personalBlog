/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1637082891894_9475';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    database: 'blog',
    username: 'blog',
    password: 'blog'
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
