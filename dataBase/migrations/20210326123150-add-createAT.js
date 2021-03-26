const { rolesEnum, tableNames } = require('../../constants')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(tableNames.USERS, 'createAt', { type: Sequelize.DataTypes.STRING })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(tableNames.USERS, 'createAt')

  }
};
