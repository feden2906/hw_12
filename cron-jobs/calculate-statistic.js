const db = require('../dataBase').getInstance();
const Sequelize = require('sequelize');
const { USER } = require('../constants/modelNames.enum');

module.exports = {
  countUsers: async () => {
    const User = db.getModel(USER)

    const count = await User.findAll({where: { include: [[Sequelize.fn("COUNT", Sequelize.col("sensors.id")), "sensorCount"]] }}
    )
    console.log(count)
  }
}
// { where: { accountStatus: 'active' }}

























