"use strict";
import { Model, DataTypes } from "sequelize";
import myConnectionToDB  from "../database/db.js";
import util from "util";
import Sequelize from "sequelize";

export const dbConnection = await myConnectionToDB("bouncehouseDB");

// export const dbConnection = new Sequelize('postgresql://localhost:5173/bouncehouseDB')

export class bookingDetails extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
bookingDetails.init(
  {
    id: { type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
    },
    scheduledDate: { type: DataTypes.DATE },
    order_price: { type: DataTypes.FLOAT },
    pricing_id: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnection,
    modelName: "bookingDetails",
  }
);

export class bouncehouseDetails extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
bouncehouseDetails.init(
  {
    id: { type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    description: { type: DataTypes.STRING }, 
    product_img: { type: DataTypes.STRING },
  },
  
  {
    sequelize: dbConnection,
    modelName: "bouncehouseDetails",
  }
);

export class bouncehousePricings extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
bouncehousePricings.init(
  {
    id: { type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true },
    price_3hr: { type: DataTypes.FLOAT },
    price_6hr: {type: DataTypes.FLOAT },
    detail_id: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnection,
    modelName: "bouncehousePricings",
  }
);

bouncehouseDetails.belongsTo(bouncehousePricings, {
  through: detail_id
})
bookingDetails.hasMany(bouncehousePricings, {
foreignKey: pricing_id
})