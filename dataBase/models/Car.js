const DataTypes = require('sequelize');

const { modelNames, tableNames } = require('../../constants')
module.exports = (client) => {
  const Car = client.define(
      modelNames.CAR,
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      producer: {
        type: DataTypes.STRING,
        allowNull: false
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false
      },
      owner: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: tableNames.CARS,
      timestamps: false
    }
  );

  return Car;
};
