const app = require("./app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors());
// app.use(express.json());

// //Object Shape Validation with Functions

// function isFood(obj) {
//   return (
//     typeof obj.id === "number" &&
//     typeof obj.name === "string" &&
//     typeof obj.price === "number" &&
//     typeof obj.ingredients.ingredientName === "string" &&
//     typeof obj.ingredients.quantity === "string"
//   );
// }

// const foods = [
//   {
//     id: 1,
//     name: "Sisig",
//     price: 20,
//     ingredients: {
//       ingredientName: "pork",
//       quantity: "2lbs",
//     },
//   },
// ];

// app.get("/foods", (req, res) => {
//   res.json(foods);
// });

// app.post("/checkout", (req, res) => {
//   const { items } = req.body;
//   if (isFood(items)) {
//     const total = items.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//     res.json({ success: true, total });
//   } else {
//     res.json({ success: false });
//   }
// });

// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
