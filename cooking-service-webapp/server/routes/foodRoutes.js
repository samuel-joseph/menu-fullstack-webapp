const express = require("express");
const router = express.Router();
const foodController = require("../controllers/foodController");

router.get("/foods", foodController.getAllFoods);
router.get("/foods/:id", foodController.getFoodById);

module.exports = router;
