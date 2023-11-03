"use strict";
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class Bouncehouse_pricing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bouncehouse_pricing.hasMany("Booking_detail", {
        foreignKey: "pricing_id",
      });
    }
  }
  Bouncehouse_pricing.init(
    {
      id: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      price_3hr: DataTypes.FLOAT,
      price_6hr: DataTypes.FLOAT,
      detail_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bouncehouse_pricing",
    }
  );
  return Bouncehouse_pricing;
};
