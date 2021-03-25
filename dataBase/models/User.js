const DataTypes = require('sequelize');

const { modelNames, rolesEnum, tableNames } = require('../../constants')

module.exports = (client) => {
  const User = client.define(
      modelNames.USER,
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        role: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: rolesEnum.USER
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        phone: {
          type: DataTypes.STRING
        },
        yearBorn: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        isMarried: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
        gender: {
          type: DataTypes.STRING,
          allowNull: false
        },
        accountStatus: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'active'
        }
      },
      {
        tableName: tableNames.USERS,
        timestamps: false
      }
  );

  return User;
};
