const Sentry = require('@sentry/node');

const { SENTRY_DSN } = require('../configs/configs')

Sentry.init({
  dsn: SENTRY_DSN
})

module.exports = Sentry;
