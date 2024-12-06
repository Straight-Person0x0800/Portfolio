const mysql = require('mysql2');
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" }); //Setting the env file

// MySQL Connection Configuration
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST, // Name of the MySQL service in docker-compose.yml
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = db;