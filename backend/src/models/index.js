const sqlDBConfigImport = require("../config/sqlConfig.js"); //Import the configuration for SQL DATABASE
const mongoDBConfigImport = require("../config/mongoConfig.js");
const { Sequelize, DataTypes } = require("sequelize"); //Import sequilize
const mongoose = require("mongoose"); //import mongoose

const environment = process.env.NODE_ENV || "development";
const sqlDBConfig = sqlDBConfigImport[environment];
const mongoDBConfig = mongoDBConfigImport[environment];

if (!sqlDBConfig || !sqlDBConfig.dialect) {
  throw new Error("Database configuration is missing or incomplete.");
}

const sequelize = new Sequelize( //Create the instance of sequelize and define the variables from sqlConfig.js with the variable sqlDBConfig
  sqlDBConfig.database,
  sqlDBConfig.username,
  sqlDBConfig.password,
  {
    host: sqlDBConfig.host,
    dialect: sqlDBConfig.dialect,
    operatorsAlianses: false,
    logging: console.log,
    // pool: {
    //   max: sqlDBConfig.pool.max,
    //   min: sqlDBConfig.pool.min,
    //   acquire: sqlDBConfig.pool.acquire,
    // },
  }
);

sequelize
  .authenticate() //Anthenticate with the information provided above
  .then(() => {
    console.log("Connected With sequelize"); //Display Connected succefully message
  })
  .catch((err) => {
    console.log("err" + err); //Catch The error and display it in log
  });

const db = {};

// Associate models
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Initialize MongoDB Connection
mongoose
  .connect(mongoDBConfig.uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

//Models Here ADD all your models for SQL
db.users = require("./userModel.js")(sequelize, DataTypes); //UsersModel will git it from usersModel
db.portfolioManager = require("./porfolioManagerModel.js")(
  sequelize,
  DataTypes
); //PorfolioMaker
db.NavStyles = require("./navStylesModel.js")(sequelize, DataTypes);
db.AboutStyles = require("./aboutStylesModel.js")(sequelize, DataTypes);
db.SectionStyles = require("./sectionStyleModel.js")(sequelize, DataTypes);
db.ContactStyles = require("./contactStylesModel.js")(sequelize, DataTypes);

// Add MongoDB Models
db.mongoModels = {};

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database sql is synchonized !");
});

module.exports = db;
