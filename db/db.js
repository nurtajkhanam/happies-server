import { Sequelize } from "sequelize";

const db = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  database: "happies",
  username: "root",
  password: "root1234",
});

const DB_FN = db.Sequelize;

export { db, DB_FN };
