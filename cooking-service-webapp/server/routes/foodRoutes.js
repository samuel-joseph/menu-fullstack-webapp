const express = require("express");
const FoodController = require("../controllers/foodController");
const router = express.Router();

//Router
router.get("/foods", FoodController.getAllFoods);
router.get("/foods/:id", FoodController.getFoodById);
router.post("/foods", FoodController.createFood);
router.put("/foods/:id", FoodController.updateFoodById);
router.delete("/foods/:id", FoodController.deleteFoodById);

module.exports = router;
