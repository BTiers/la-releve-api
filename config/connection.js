const development = {
  database: 'testreleveapi',
  username: 'baptiste',
  password: '123456789',
  host: 'localhost',
  dialect: 'mysql',
};

const testing = {
  database: 'testreleveapi',
  username: 'baptiste',
  password: '123456789',
  host: 'localhost',
  dialect: 'mysql',
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development,
  testing,
  production,
};
