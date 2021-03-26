const cron = require('node-cron');

module.exports = () => {
  try {

  cron.schedule('*/10 * * * * *', () => {
    Promis.allSettled()
  })
  } catch (e) {
    console.log(e)   // не можна викидати вище
  }
}
