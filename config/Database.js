import { Sequelize } from "sequelize";

const db = new Sequelize("reactjs_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;