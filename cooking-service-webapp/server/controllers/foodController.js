const FoodModel = require("../models/foodModel");

class FoodController {
  static async getAllFoods(req, res) {
    try {
      const foods = await FoodModel.find();
      res.status(200).json(foods);
    } catch (error) {
      res.status(500).json({ error: "an error occured while fetching foods" });
    }
  }

  static async getFoodById(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const food = await FoodModel.findOne({ id });

      if (!food) {
        return res.status(400).json({ message: "Food not found" });
      }

      res.status(200).json(food);
    } catch (error) {
      res.status(500).json({ error: "an error while fetching food" });
    }
  }

  static async createFood(req, res) {
    try {
      const newFood = new FoodModel(req.body); //create new Food instance
      await newFood.save(); //save to db
      res.status(201).json(newFood);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateFoodById(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedFood = await FoodModel.findOneAndUpdate({ id }, req.body, {
        new: true,
        runValidators: true,
      });

      if (!updatedFood) {
        return res.status(404).json({ message: "Food not found" });
      }

      res.status(200).json(updatedFood);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteFoodById(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const deletedFood = await FoodModel.findOneAndDelete({ id });

      if (!deletedFood) {
        return res.status(404).json({ message: "Food not found" });
      }

      res.status(200).json({ message: "Food successfully deleted" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error occured while attempting to delete food" });
    }
  }
}

module.exports = FoodController;
