'use strict';
import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class Bouncehouse_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bouncehouse_detail.hasOne('Bouncehouse_pricing'), {
        foreignKey: 'detail_id'
      }
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