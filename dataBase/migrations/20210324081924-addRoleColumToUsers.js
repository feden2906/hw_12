const { rolesEnum, tableNames } = require('../../constants')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        tableNames.USERS,
        {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          role: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          phone: {
            type: Sequelize.DataTypes.STRING
          },
          yearBorn: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          isMarried: {
            type: Sequelize.DataTypes.BOOLEAN,
            allowNull: false
          },
          gender: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          }
        }
    )
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(tableNames.USERS)
  }
};
