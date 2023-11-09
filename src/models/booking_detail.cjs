"use strict";
import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Booking_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Booking_detail.init(
    {
      id: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      scheduledDate: DataTypes.DATETIME,
      order_price: DataTypes.FLOAT,
      pricing_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Booking_detail',
    }
  );
  return Booking_detail;
};
