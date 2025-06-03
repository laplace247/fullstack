const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db.config");
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
    }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// Importar modelos
db.products = require("./product.model")(sequelize, DataTypes);
module.exports = db;