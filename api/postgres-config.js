import config from './config';

require('dotenv').config();

module.exports = {
  development: {
    username: config.PG_USERNAME,
    password: config.PG_PASSWORD,
    database: config.PG_DATABASE,
    host: config.PG_HOST,
    port: config.PG_PORT,
    dialect: 'postgres',
    timezone: '+00:00'
  }
};
