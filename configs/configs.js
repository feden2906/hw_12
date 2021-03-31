module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'MY_SECRET',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'MY_REFRESH_SECRET',

  SENTRY_DSN: process.env.SENTRY_DSN || 'https://c86e2d9d79004ee6b0d13676189b2575@o561011.ingest.sentry.io/5697310',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/users_cars',
  PORT: process.env.PORT || 5000,

  ROOT_EMAIL: process.env.ROOT_EMAIL || 'maksona2906@gmail.com',
  ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || 'ozater12345',

  DB_LOGIN: process.env.DB_LOGIN || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'root',

  DB_DIALECT: process.env.DB_DIALECT || 'mysql',
  DB_HOST: process.env.DB_HOST || '127.0.0.1',
  DB_SCHEMA: process.env.DB_SCHEMA || 'users-cars',
};
