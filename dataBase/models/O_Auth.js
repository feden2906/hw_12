const DataTypes = require('sequelize');

const { modelNames, tableNames } = require('../../constants')

module.exports = (client) => {
  const O_Auth = client.define(
      modelNames.O_AUTH,
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      access_token: {
        type: DataTypes.STRING,
        allowNull: false
      },
      refresh_token: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: tableNames.AUTH,
      timestamps: true
    }
  );

  return O_Auth;
};
