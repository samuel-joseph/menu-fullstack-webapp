const express = require("express");
const app = express();
const foodRoutes = require("./routes/foodRoutes");

//middleware
app.use(express.json());

//this is called "mounting routes"
app.use("/api", foodRoutes);

module.exports = app;
