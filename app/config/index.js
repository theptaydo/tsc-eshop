const serverConfig = require('./server.config');
const dbConfig = require('./db.config');
const securityConfig = require('./security.config');
var dotent = require('dotenv');

module.exports = {
  serverConfig,
  dbConfig,
  securityConfig
};