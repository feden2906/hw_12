const { rolesEnum, tableNames } = require('../../constants')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(tableNames.AUTH, 'createdAt', { type: Sequelize.DataTypes.STRING })
    await queryInterface.addColumn(tableNames.AUTH, 'updatedAt', { type: Sequelize.DataTypes.STRING })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(tableNames.AUTH, 'createdAt')
    await queryInterface.removeColumn(tableNames.AUTH, 'updatedAt')

  }
};
