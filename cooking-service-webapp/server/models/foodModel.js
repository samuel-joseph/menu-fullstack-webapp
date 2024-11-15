//Object Shape Validation with Functions
function isFood(obj) {
  return (
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.price === "number" &&
    typeof obj.description === "string"
  );
}

const foods = [
  {
    id: 1,
    name: "Sisig",
    price: 20,
    description: "It's a sisig!",
  },
  {
    id: 2,
    name: "Bulalo",
    price: 25,
    description: "It's a bulalo!",
  },
  {
    id: 3,
    name: "Pancit",
    price: 15,
    description: "It's a pancit!",
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
