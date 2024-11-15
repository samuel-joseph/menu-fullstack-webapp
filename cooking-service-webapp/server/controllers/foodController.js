const FoodModel = require("../models/foodModel");

class FoodController {
  static getAllFoods(req, res) {
    const foods = FoodModel.getAll();
    res.json(foods);
  }

  static getFoodById(req, res) {
    const id = parseInt(req.params.id, 10);
    const food = FoodModel.getById(id);

    if (!food) {
      return res.status(400).json({ message: "Food not found" });
    }

    res.json(food);
  }
}

module.exports = FoodController;
