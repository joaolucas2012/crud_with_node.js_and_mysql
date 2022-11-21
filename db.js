require("dotenv").config();
const Sequelize = require("sequelize");
const componentSequelize = new Sequelize(
  "dbProduto",
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = componentSequelize;
