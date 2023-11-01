'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bouncehouse_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bouncehouse_detail.init({
    id: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    description: DataTypes.STRING,
    product_img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bouncehouse_detail',
  });
  return Bouncehouse_detail;
};