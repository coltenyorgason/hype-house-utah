"use strict";
import { Model, DataTypes } from "sequelize";
import myConnectionToDB  from "../database/db.js";
import util from "util";


export const dbConnection = myConnectionToDB("postgresql:///bouncehouseDB");

export class Booking_details extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Booking_details.init(
  {
    id: { type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
    },
    scheduledDate: { type: DataTypes.DATETIME },
    order_price: { type: DataTypes.FLOAT },
    pricing_id: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnection,
    modelName: "booking_details",
  }
);

export class Bouncehouse_details extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Bouncehouse_details.init(
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
    modelName: "bouncehouse_details",
  }
);

export class Bouncehouse_pricings extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Bouncehouse_pricings.init(
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
    modelName: "bouncehouse_pricings",
  }
);
