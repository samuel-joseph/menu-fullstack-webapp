const express = require("express");
const app = express();
const cors = require("cors");
const foodRoutes = require("./routes/foodRoutes");

app.use(cors());
//middleware
app.use(express.json());

//this is called "mounting routes"
app.use("/api", foodRoutes);

module.exports = app;