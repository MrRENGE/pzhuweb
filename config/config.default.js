
module.exports = appInfo => {
  const config = {};

  config.keys = "pzhuweb";

  config.host = 'http://www.pzhuweb.cn';

  // 添加 view 配置
  config.view = {
    defaultViewEngine: "nunjucks",
    mapping: {
      ".tpl": "nunjucks"
    }
  };

  // 数据库配置
  config.sequelize = {
    dataType: 'mysql',
    database: 'web',
    port: '3306',
    username: 'user_web',
    password: '',
  }

  return config;
};
