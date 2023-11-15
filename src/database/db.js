import { Sequelize } from "sequelize";

async function myConnectionToDB(uri) {
  const sequelize = new Sequelize(uri, "coltenyorgason", "Yorgie92$", {
    database: "bouncehouseDB",
    dialect: "postgres",
    // "logging": false,
    // "define": { timestamps: true,
    // underscored: true
    // }
  });
  try {
    await sequelize.authenticate();
    console.log("Connected to bouncehouseDB successfully!");
  } catch (error) {
    console.error("Unable to connect to bouncehouseDB:", error);
  }

  return sequelize;
}
export default myConnectionToDB;
