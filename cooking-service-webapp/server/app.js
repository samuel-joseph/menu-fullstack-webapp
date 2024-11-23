const express = require("express");
const app = express();
const cors = require("cors");
const foodRoutes = require("./routes/foodRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api", foodRoutes);

module.exports = app;
