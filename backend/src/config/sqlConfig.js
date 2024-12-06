// backend/config/sqlConfig.js
require("dotenv").config(); // If you're using environment variables

module.exports = {
  development: {
    username: "myuser",
    password: "mypassword",
    database: "mydatabase",
    host: "db", // Ensure this matches your Docker service name
    port: 3306,
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER || "myuser",
    password: process.env.DB_PASSWORD || "mypassword",
    database: process.env.DB_NAME || "mydatabase_test",
    host: process.env.DB_HOST || "db",
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  },
};
