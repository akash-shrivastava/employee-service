'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const { config } = require("../../config/app.config");
const db = {};

const optionalParameters = {
        username: config.get("postgres.user"),
        password: config.get("postgres.password"),
        database: config.get("postgres.database"),
        host: config.get("postgres.host"),
        dialect: config.get("postgres.dialect"),
        port: config.get("postgres.port")
}

const sequelize= new Sequelize(
  config.get("postgres.database"),
  config.get("postgres.user"),
  config.get("postgres.password"),
  optionalParameters
);


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
