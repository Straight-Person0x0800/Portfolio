const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const router = require("./routes");

dotenv.config({ path: "./.env" }); //Setting the env file

const app = express(); //Start app with express

//Global middleware they run before every routes
//They run  with the order write it
app.use(cors());

// JSON parsing middleware
app.use(express.json());

// Middleware to handle JSON parsing errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Invalid JSON received:', err.message);
    return res.status(400).json({ error: "Invalid JSON format" });
  }
  next();
});

app.use(express.urlencoded({ extended: true }));

//Routers
app.use("/api", router);

// Example Route
app.get("/", (req, res) => {
  res.json({ message: "Hello API" });
});


// Start Server
const PORT = process.env.PORT || 5000; //run server in the port in the env file if you don't find it run it on port 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

