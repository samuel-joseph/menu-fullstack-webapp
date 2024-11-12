const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const foods = [
  { id: 1, name: "Sisig", price: 20 },
  { id: 2, name: "Pancit", price: 20 },
];

app.get("/foods", (req, res) => {
  res.json(foods);
});

app.post("/checkout", (req, res) => {
  const { items } = req.body;
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  res.json({ success: true, total });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
