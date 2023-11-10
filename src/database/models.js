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
    bouncehouse_id: { type: DataTypes.INTEGER, allowNull: false},
    customer_id: { type: DataTypes.INTEGER, allowNull: false },

    
  },
  {
    sequelize: dbConnection,
    modelName: "bookingDetails",
  }
);

export class customerDetails extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
customerDetails.init(
  {
    id: { type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    name: { type: DataTypes.STRING},
    phone: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING }
  
  },
  
  {
    sequelize: dbConnection,
    modelName: "customerDetails",
  }
);

export class bouncehouse extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
bouncehouse.init(
  {
    id: { type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true },
    price_3hr: { type: DataTypes.FLOAT },
    price_6hr: {type: DataTypes.FLOAT },
    description: { type: DataTypes.STRING }, 
    product_img: { type: DataTypes.STRING },
  },
  {
    sequelize: dbConnection,
    modelName: "bouncehouse",
  }
);

bookingDetails.hasMany(customerDetails)
bookingDetails.hasMany(bouncehouse)