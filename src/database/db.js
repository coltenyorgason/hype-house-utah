import { Sequelize } from "sequelize";

async function myConnectionToDB(uri) {
  const sequelize = new Sequelize(uri, {
   
  });
  await sequelize.authenticate();
  return sequelize;
}
export default myConnectionToDB;