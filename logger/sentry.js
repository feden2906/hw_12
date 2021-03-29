const Sentry = require('@sentry/node');

const { SENTRY_DSN } = require('../configs/configs')

module.exports = Sentry.init({
  dsn: SENTRY_DSN
})
