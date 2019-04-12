require('dotenv/config');

const env = process.env;

module.exports = {
  currEnv: env.NODE_ENV || 'development',
  port: env.PORT || 5000,
  db: env.MONGO_URI
};
