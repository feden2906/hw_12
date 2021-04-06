const cron = require('node-cron');

const { countUsers } = require('./calculate-statistic');

module.exports = () => {
  try {
    cron.schedule('*/10 * * * * *', () => {
      // Promise.allSettled([countUsers()]).then(() => console.log(1))
      // countUsers();
    });
  } catch (e) {
    console.log(e); // не можна викидати вище/ вже в app
  }
};
