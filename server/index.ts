const express = require("express");
const cors = require("cors");
// const pool = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Estabilishing the port
const PORT = process.env.PORT || 5000;

// Create a server running on chosen PORT
app.listen(PORT, () => {
  console.log(`test3 server has start on PORT ${PORT}`);
});