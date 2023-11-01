'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bouncehouse_pricing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bouncehouse_pricing.init({
    id: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    price_3hr: DataTypes.FLOAT,
    price_6hr: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Bouncehouse_pricing',
  });
  return Bouncehouse_pricing;
};