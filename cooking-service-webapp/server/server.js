require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
db.once("open", () => {
  console.log("MongoDB connected successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
