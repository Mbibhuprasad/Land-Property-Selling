const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin } = require("../controllers/authController");
const { getAllUsers } = require("../controllers/adminController");

// IMPORTANT: Protect registration in production
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

router.get("/users", getAllUsers);

module.exports = router;
