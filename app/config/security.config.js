var dotenv = require('dotenv');
dotenv.config();  // Nạp các biến môi trường từ file .env
const secretKey = process.env.SECRET_JWT;

module.exports = {
  SALT: 10,
  SECRET: secretKey
};
