//Object Shape Validation with Functions
function isFood(obj) {
  return (
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.price === "number" &&
    typeof obj.ingredients.ingredientName === "string" &&
    typeof obj.ingredients.quantity === "string"
  );
}

const foods = [
  {
    id: 1,
    name: "Sisig",
    price: 20,
    ingredients: {
      ingredientName: "pork",
      quantity: "2lbs",
    },
  },
];

class FoodModel {
  static getAll() {
    return foods;
  }

  static getById(id) {
    return foods.find((food) => food.id === id);
  }
}

module.exports = FoodModel;
