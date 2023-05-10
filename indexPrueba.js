/* 
* FIRST INDEX.JS
*/
const express = require("express");
const dotenv = require("dotenv");

// Configuration the .env file
dotenv.config();

// Create Express App
const app = express();
/**
 * in Node, to access to vars of ".env" use "process"
 */
const port = process.env.PORT || 8000;

// Define first Route of APP
app.get("/", (req, res) => {
  // Send HELLO WORLD
  res.send("Welcome to API Restful: Express + TS + Swagger + Mongoose");
});

// Execute APP and Listen Request to PORT
app.listen(port, () =>
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
);
