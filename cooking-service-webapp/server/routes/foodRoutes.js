const express = require("express");
const FoodController = require("../controllers/foodController");
const router = express.Router();

const authenticateToken = require("../middleware/authMiddleware");

//Router
router.get("/foods", FoodController.getAllFoods);
router.get("/foods/:id", FoodController.getFoodById);
router.post("/foods", authenticateToken, FoodController.createFood);
router.put("/foods/:id", authenticateToken, FoodController.updateFoodById);
router.delete("/foods/:id", authenticateToken, FoodController.deleteFoodById);

module.exports = router;
