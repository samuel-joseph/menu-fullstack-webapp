const express = require("express");
const authController = require("../controllers/authControllers");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/protected", authMiddleware, authController.getProtectedResource);

module.exports = router;
